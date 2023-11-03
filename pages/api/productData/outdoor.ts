import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any) {
    const { db } = await connectToDatabase();
    const data = await db.collection("product_data").find({
        super_class_id:{
            $eq: 1
        }
    }).toArray();
    const total = await db.collection("product_data").countDocuments({
        super_class_id:{
            $eq: 1
        }
    });
    res.json({data,total});
}