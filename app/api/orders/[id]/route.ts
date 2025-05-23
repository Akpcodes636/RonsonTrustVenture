import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { dbConnect } from "../../../config/dbConnect";
import OrderModel from "@/app/lib/schema/manitowocOrder";
// import OrderModel from "../../../lib/mongodb"; // assuming you have a Mongoose model here

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response("Invalid ID format", { status: 400 });
    }

    await dbConnect(); // just call it, don’t try to get anything from it

    const order = await OrderModel.findById(id); // use your Mongoose model

    if (!order) {
      return new Response("Order not found", { status: 404 });
    }

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
