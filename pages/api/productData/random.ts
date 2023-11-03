import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any) {
    const { db } = await connectToDatabase();
    const pipeline = [
        {
            $sample: { size: 10 }
        }
    ];
    const data = await db.collection("product_data").aggregate(pipeline).toArray();
    res.json({data});
}