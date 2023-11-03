import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any) {
    const { db } = await connectToDatabase();
    const data = await db.collection("userCart").find({}).toArray();
    const total = await db.collection("userCart").countDocuments({});
    res.json({data,total});
}