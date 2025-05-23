  import OrderModel from "@/app/lib/schema/manitowocOrder";
  import { dbConnect } from "../../config/dbConnect";
  import { NextResponse } from "next/server";

  export async function POST(req: Request) {
    try {
      await dbConnect(); // Connect to MongoDB

      const body = await req.json(); // Get JSON data from request body
      const newOrder = new OrderModel(body); // Create a new order using Mongoose schema
      const savedOrder = await newOrder.save(); // Save to DB

      return NextResponse.json(
        {
          message: "Order submitted successfully",
          orderId: savedOrder._id,
        },
        { status: 201 }
      );
      // / Return saved data
    } catch (error) {
      console.error("Error submitting order:", error);
      return NextResponse.json(
        { error: "Failed to submit order" },
        { status: 500 }
      );
    }
  }
