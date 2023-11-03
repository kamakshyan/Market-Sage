import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any){
    const {productId} = req.body;

    const {db} = await connectToDatabase();

    await db.collection("userCart").deleteOne({
        productId
    });

    res.status(200).end();
}