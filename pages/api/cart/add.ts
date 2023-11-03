import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any){
    const {productId} = req.body;
    console.log("productId", productId);

    const {db} = await connectToDatabase();

    await db.collection("userCart").insertOne({
        productId: productId
    });

    res.status(200).end();
}