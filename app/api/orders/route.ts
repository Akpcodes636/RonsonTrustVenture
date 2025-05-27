import OrderModel from "@/app/lib/schema/manitowocOrder";
import { dbConnect } from "../../config/dbConnect";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // npm install uuid if not installed

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const newOrder = new OrderModel({
      ...body,
      amount: Number(body.amount), // ensure amount is numeric
      status: "pending", // default order status
      paystackReference: uuidv4(), // optional: useful for initializing Paystack
    });

    const savedOrder = await newOrder.save();

    return NextResponse.json(
      {
        message: "Order submitted successfully",
        orderId: savedOrder._id,
        reference: savedOrder.paystackReference, // return if you need it on client
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting order:", error);
    return NextResponse.json(
      { error: "Failed to submit order" },
      { status: 500 }
    );
  }
}
