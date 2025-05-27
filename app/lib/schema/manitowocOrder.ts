import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "awaiting", "paid", "failed"],
      default: "pending",
    },
    paystackReference: {
      type: String,
      unique: true,
      sparse: true, // allows multiple nulls
    },
    transactionId: {
      type: String,
      unique: true,
      sparse: true,
    },
    paymentMethod: {
      type: String,
      enum: ["card", "bank_transfer", "ussd", "qr", "mobile_money", "bank"],
      default: "card",
    },
    paidAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

const OrderModel = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default OrderModel;
