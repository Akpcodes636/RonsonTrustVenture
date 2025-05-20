import { dbConnect } from "../../config/dbConnect";
import Order from "../../lib/schema/manitowocOrder";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    const newOrder = new Order(data);
    await newOrder.save();

    return NextResponse.json({ message: "Order saved!" }, { status: 201 });
  } catch (error) {
    console.error("Order submission error:", error);
    return NextResponse.json(
      {
        error: "Error submitting order",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
