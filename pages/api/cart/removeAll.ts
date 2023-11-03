import { connectToDatabase } from "@/utils/db";

export default async function handler(req:any, res:any){

    const {db} = await connectToDatabase();

    await db.collection("userCart").deleteMany({});

    res.status(200).end();
}