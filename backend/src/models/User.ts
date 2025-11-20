import mongoose, { Schema, Document } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser extends Document {
  username?: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  identityNumber?: string;
  identityType?: "ktp" | "sim" | "passport";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      sparse: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    identityNumber: String,
    identityType: {
      type: String,
      enum: ["ktp", "sim", "passport"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Hash password sebelum save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as any);
  }
});

// Method untuk compare password
userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcryptjs.compare(password, this.password);
};

export default mongoose.model<IUser>("User", userSchema);
