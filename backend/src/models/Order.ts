import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem {
  productId: mongoose.Types.ObjectId;
  productName: string;
  quantity: number;
  price: number;
  startDate: Date;
  endDate: Date;
  durationDays: number;
  subtotal: number;
}

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "ready"
    | "returned"
    | "cancelled";
  paymentMethod: "transfer" | "ewallet" | "cod";
  paymentProof?: string;
  paymentStatus: "unpaid" | "partial" | "paid";
  depositPaid: number;
  notes: string;
  pickupDate: Date;
  returnDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productName: String,
        quantity: Number,
        price: Number,
        startDate: Date,
        endDate: Date,
        durationDays: Number,
        subtotal: Number,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "ready",
        "returned",
        "cancelled",
      ],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["transfer", "ewallet", "cod"],
      required: true,
    },
    paymentProof: String,
    paymentStatus: {
      type: String,
      enum: ["unpaid", "partial", "paid"],
      default: "unpaid",
    },
    depositPaid: {
      type: Number,
      default: 0,
    },
    notes: String,
    pickupDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IOrder>("Order", orderSchema);
