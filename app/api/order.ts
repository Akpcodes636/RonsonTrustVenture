// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../lib/mongodb"; // make sure this exists

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connectToDatabase();
    const products = await db.collection("products").find({}).toArray();
    res.status(200).json(products);
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
