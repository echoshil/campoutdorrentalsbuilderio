import express, { Response } from "express";
import Product from "../models/Product.js";
import { AuthRequest, verifyToken, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// Get All Products (dengan filter dan sort)
router.get("/", async (req: AuthRequest, res: Response) => {
  try {
    const { category, search, sort = "popular" } = req.query;

    let query: any = {};

    if (category && category !== "all") {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let sortOption: any = {};
    switch (sort) {
      case "price-low":
        sortOption = { price: 1 };
        break;
      case "price-high":
        sortOption = { price: -1 };
        break;
      case "rating":
        sortOption = { rating: -1 };
        break;
      case "newest":
        sortOption = { createdAt: -1 };
        break;
      default:
        sortOption = { reviews: -1 };
    }

    const products = await Product.find(query).sort(sortOption);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

// Get Product by ID
router.get("/:id", async (req: AuthRequest, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Produk tidak ditemukan.",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

// Create Product (Admin Only)
router.post(
  "/",
  verifyToken,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const {
        name,
        category,
        description,
        price,
        stock,
        capacity,
        brand,
        specifications,
      } = req.body;

      if (!name || !category || !description || !price || stock === undefined) {
        return res.status(400).json({
          success: false,
          message: "Nama, kategori, deskripsi, harga, dan stok harus diisi.",
        });
      }

      const newProduct = new Product({
        name,
        category,
        description,
        price,
        stock,
        capacity,
        brand,
        specifications: specifications || {},
      });

      await newProduct.save();

      res.status(201).json({
        success: true,
        message: "Produk berhasil ditambahkan.",
        data: newProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  },
);

// Update Product (Admin Only)
router.put(
  "/:id",
  verifyToken,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const {
        name,
        category,
        description,
        price,
        stock,
        capacity,
        brand,
        specifications,
      } = req.body;

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          category,
          description,
          price,
          stock,
          capacity,
          brand,
          specifications: specifications || {},
        },
        { new: true },
      );

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Produk tidak ditemukan.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Produk berhasil diperbarui.",
        data: product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  },
);

// Delete Product (Admin Only)
router.delete(
  "/:id",
  verifyToken,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Produk tidak ditemukan.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Produk berhasil dihapus.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  },
);

// Update Stock (Admin Only)
router.patch(
  "/:id/stock",
  verifyToken,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    try {
      const { quantity } = req.body;

      if (quantity === undefined) {
        return res.status(400).json({
          success: false,
          message: "Quantity harus diisi.",
        });
      }

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { stock: quantity },
        { new: true },
      );

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Produk tidak ditemukan.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Stok produk berhasil diperbarui.",
        data: product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  },
);

export default router;
