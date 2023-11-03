import fs from 'fs';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb',
        }
    },
}

export default async function handler(req:any, res:any) {
    const formData = await req.body;
    // console.log(formData);
    const image = Buffer.from(await formData.image.arrayBuffer())
    console.log(image);

    res.status(200).json({ status:"ok" });
    
}