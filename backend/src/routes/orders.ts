import express, { Response } from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { AuthRequest, verifyToken, customerOnly, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// Create Order (Customer)
router.post(
  "/",
  verifyToken,
  customerOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const {
        items,
        paymentMethod,
        pickupDate,
        returnDate,
        notes,
      } = req.body;

      if (!items || items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Keranjang belanja tidak boleh kosong.",
        });
      }

      if (!paymentMethod || !pickupDate || !returnDate) {
        return res.status(400).json({
          success: false,
          message: "Metode pembayaran, tanggal pengambilan, dan pengembalian harus diisi.",
        });
      }

      // Calculate total and validate stock
      let totalAmount = 0;
      const orderItems = [];

      for (const item of items) {
        const product = await Product.findById(item.productId);

        if (!product) {
          return res.status(404).json({
            success: false,
            message: `Produk ${item.productId} tidak ditemukan.`,
          });
        }

        if (product.stock < item.quantity) {
          return res.status(400).json({
            success: false,
            message: `Stok ${product.name} tidak cukup. Stok tersedia: ${product.stock}`,
          });
        }

        const startDate = new Date(item.startDate);
        const endDate = new Date(item.endDate);
        const durationDays = Math.ceil(
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        const subtotal = product.price * item.quantity * durationDays;
        totalAmount += subtotal;

        orderItems.push({
          productId: product._id,
          productName: product.name,
          quantity: item.quantity,
          price: product.price,
          startDate,
          endDate,
          durationDays,
          subtotal,
        });

        // Reduce stock
        product.stock -= item.quantity;
        await product.save();
      }

      // Calculate deposit (30% of total)
      const depositPaid = Math.ceil(totalAmount * 0.3);

      const newOrder = new Order({
        userId: req.user?.id,
        items: orderItems,
        totalAmount,
        paymentMethod,
        paymentStatus: paymentMethod === "cod" ? "unpaid" : "partial",
        depositPaid: paymentMethod === "cod" ? 0 : depositPaid,
        pickupDate: new Date(pickupDate),
        returnDate: new Date(returnDate),
        notes,
        status: "pending",
      });

      await newOrder.save();

      res.status(201).json({
        success: true,
        message: "Order berhasil dibuat. Silakan lakukan pembayaran.",
        data: {
          orderId: newOrder._id,
          totalAmount,
          depositAmount: depositPaid,
          paymentStatus: newOrder.paymentStatus,
          items: orderItems,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);

// Get User Orders (Customer)
router.get(
  "/",
  verifyToken,
  customerOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const orders = await Order.find({ userId: req.user?.id })
        .populate("items.productId")
        .sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);

// Get Order by ID
router.get(
  "/:id",
  verifyToken,
  async (req: AuthRequest, res: Response) => {
    try {
      const order = await Order.findById(req.params.id)
        .populate("userId", "email firstName lastName phone")
        .populate("items.productId");

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order tidak ditemukan.",
        });
      }

      // Check authorization
      if (
        req.user?.role === "customer" &&
        order.userId._id.toString() !== req.user?.id
      ) {
        return res.status(403).json({
          success: false,
          message: "Anda tidak memiliki akses ke order ini.",
        });
      }

      res.status(200).json({
        success: true,
        data: order,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);

// Upload Payment Proof (Customer)
router.post(
  "/:id/payment-proof",
  verifyToken,
  customerOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const { paymentProof } = req.body;

      if (!paymentProof) {
        return res.status(400).json({
          success: false,
          message: "Bukti pembayaran harus diupload.",
        });
      }

      const order = await Order.findById(req.params.id);

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order tidak ditemukan.",
        });
      }

      if (order.userId.toString() !== req.user?.id) {
        return res.status(403).json({
          success: false,
          message: "Anda tidak memiliki akses ke order ini.",
        });
      }

      order.paymentProof = paymentProof;
      order.paymentStatus = "partial";
      await order.save();

      res.status(200).json({
        success: true,
        message: "Bukti pembayaran berhasil diupload. Admin akan memverifikasi.",
        data: order,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);

// Get All Orders (Admin)
router.get(
  "/admin/all",
  verifyToken,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const orders = await Order.find()
        .populate("userId", "email firstName lastName phone")
        .populate("items.productId")
        .sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        count: orders.length,
        data: orders,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);

// Update Order Status (Admin)
router.patch(
  "/:id/status",
  verifyToken,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const { status, paymentStatus } = req.body;

      const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: status || undefined,
          paymentStatus: paymentStatus || undefined,
        },
        { new: true }
      );

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order tidak ditemukan.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Status order berhasil diperbarui.",
        data: order,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);

export default router;
