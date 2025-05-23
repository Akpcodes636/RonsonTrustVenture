import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { dbConnect } from "../../../config/dbConnect";
import OrderModel from "@/app/lib/schema/manitowocOrder";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  if (!id || !ObjectId.isValid(id)) {
    return new Response("Invalid ID format", { status: 400 });
  }

  await dbConnect();

  const order = await OrderModel.findById(id);

  if (!order) {
    return new Response("Order not found", { status: 404 });
  }

  return new Response(JSON.stringify(order), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
