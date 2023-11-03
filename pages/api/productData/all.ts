import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any) {
    const { db } = await connectToDatabase();
    const data = await db.collection("product_data").find({}).toArray();
    res.json(data);
}