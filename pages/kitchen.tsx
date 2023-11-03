import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/productData/kitchen", {
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    const data = await res.json();
    // console.log("Products: ", data.results);
  
    return {
      props: { data: data },
    };
  };

export default function kitchen(props:any) {
    // console.log(props.data)
  return (
    <div className={`${poppins.className}`}>
      <Navbar />

      <div className="pt-36">
        <p className="text-3xl font-bold text-center">Kitchen Section</p>
        <p className="md:text-lg mt-2 text-center mx-4">Equip your kitchen with top-notch appliances that make cooking a breeze. From cutting-edge cooktops to versatile food processors, we have everything you need.</p>
        <p className="text-center mt-5 text-green-600">Total Products Fetched : {props.data.total}</p>
        <div className="mt-10">
        <div className="flex flex-col mx-10 gap-y-10 md:grid md:grid-cols-3 gap-x-16">
        {
            props.data.data.slice(0,50).map((product:any,index:number) =>{
                return (
                    <ProductCard
                    key={index}
                    name={product.title}
                    id = {product.class_id}
                    image={product.path}
                    />
                )
            })
        }
        </div>
        
        </div>
      </div>
    </div>
  );
}
