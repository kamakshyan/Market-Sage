import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useNextBlurhash from "use-next-blurhash";

export default function ProductCard(props: any) {
  
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  
  const addToCart = async () =>{
    try {
      const res = await fetch('/api/cart/userCart',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({number:props.id})
      });
      const body = JSON.stringify(res);
      // console.log(body.length)
      if(!res.ok){
        throw new Error("Failed to add to cart");
      }

      alert("Added to cart");
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="hover:cursor-pointer group flex flex-col min-h-[250px] md:min-w-[400px] mb-5">
      <div className=" bg-gray-100 rounded-xl p-10">
        <Image
        placeholder="blur"
        blurDataURL={blurDataUrl}
          className="group-hover:scale-110 transition-all duration-300 mx-auto object-contain mix-blend-multiply h-[250px] w-[250px]"
          height={250}
          width={350}
          alt={props.name}
          src={"/"+props.image}
        />
      </div>
      <div className="flex justify-between mt-5">
        <h1 className="font-semibold text-lg w-56 line-clamp-2">
          Product {props.id}
        </h1>
        <p className="font-semibold mr-3">$ 299</p>
      </div>
      <p className="max-w-[300px] text-sm mt-2 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus consequuntur totam itaque earum, optio vero repellat, sequi quaerat iusto natus nulla distinctio laudantium! Natus consequuntur obcaecati tenetur ab omnis!</p>
      <button
      onClick={addToCart} className="mt-4 text-sm hover:bg-black hover:text-white mb-5 w-32 text-center rounded-full px-5 py-3 border border-black">Add to Cart</button>
    </div>
  );
}
