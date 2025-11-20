import express, { Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { AuthRequest, verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Admin Login
router.post("/admin/login", async (req: AuthRequest, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username dan password harus diisi.",
      });
    }

    // Check if admin credentials match environment variables
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        {
          id: "admin",
          email: "admin@outdoorcamp.id",
          role: "admin",
        },
        process.env.JWT_SECRET || "",
        { expiresIn: process.env.JWT_EXPIRE || "7d" },
      );

      return res.status(200).json({
        success: true,
        message: "Login admin berhasil.",
        token,
        user: {
          id: "admin",
          email: "admin@outdoorcamp.id",
          role: "admin",
          username: "admin",
        },
      });
    }

    // Also check in database for admin users
    const admin = await User.findOne({ username, role: "admin" });

    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Username atau password salah.",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
      process.env.JWT_SECRET || "",
      { expiresIn: process.env.JWT_EXPIRE || "7d" },
    );

    res.status(200).json({
      success: true,
      message: "Login admin berhasil.",
      token,
      user: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

// Customer Register
router.post("/customer/register", async (req: AuthRequest, res: Response) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password harus diisi.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email sudah terdaftar. Silakan gunakan email lain.",
      });
    }

    // Create new customer
    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
      phone,
      role: "customer",
    });

    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.JWT_SECRET || "",
      { expiresIn: process.env.JWT_EXPIRE || "7d" },
    );

    res.status(201).json({
      success: true,
      message: "Registrasi berhasil. Selamat datang!",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

// Customer Login
router.post("/customer/login", async (req: AuthRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password harus diisi.",
      });
    }

    const user = await User.findOne({ email, role: "customer" });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah.",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET || "",
      { expiresIn: process.env.JWT_EXPIRE || "7d" },
    );

    res.status(200).json({
      success: true,
      message: "Login berhasil.",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

// Get Current User
router.get("/me", verifyToken, async (req: AuthRequest, res: Response) => {
  try {
    if (req.user?.id === "admin") {
      return res.status(200).json({
        success: true,
        user: {
          id: "admin",
          email: "admin@outdoorcamp.id",
          role: "admin",
          username: "admin",
        },
      });
    }

    const user = await User.findById(req.user?.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan.",
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        address: user.address,
        identityType: user.identityType,
        identityNumber: user.identityNumber,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

export default router;
