import { NextApiRequest, NextApiResponse } from "next";

let products: number[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const number = req.body.number;
    products.push(number);
    res.status(200).json({ message: "Number appended" });

  } else if (req.method === "GET") {
    const total = products.length;
    res.status(200).json({ products,total });

  } else if (req.method === "DELETE") {
    const number = req.body.number;

    // Filter out number with matching id
    products = products.filter((product) => product !== number);

    res.status(200).json({ message: "Number deleted" });
  } else {
    res.status(405).end();
  }
}
