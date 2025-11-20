import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  capacity?: string;
  brand: string;
  image?: string;
  specifications: Record<string, string>;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Tenda & Shelter",
        "Tas Carrier",
        "Sleeping Gear",
        "Masak & Dapur",
        "Hiking Gear",
        "Lighting",
      ],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    capacity: String,
    brand: String,
    image: String,
    specifications: {
      type: Map,
      of: String,
      default: {},
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
