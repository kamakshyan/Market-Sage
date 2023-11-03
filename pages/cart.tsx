import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import { get } from "http";
import Link from "next/link";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export const getServerSideProps = async () => {

  const res = await fetch("http://localhost:3000/api/cart/view", {
    method: "GET",
    headers: {
      contentType: "application/json",
    },
  });

  const products = await fetch("http://localhost:3000/api/productData/all", {
    method: "GET",
    headers: {
      contentType: "application/json",
    },
  })

  const data = await res.json();
  const productData = await products.json();
  return {
    props: { data: data, productData: productData },
  };
};


export default function cart(props:any) {

  const productIds = props.data.data.map((item:any) => item.productId);
  const filteredProducts = props.productData.filter((product:any) => {
    return productIds.includes(product.class_id)
  });


  if(props.data.data.length === 0){
    return (
      <div className={`${poppins.className}`}>
        <Navbar />
  
        <div className="pt-44 flex flex-col items-center">
          <p className="text-5xl">😖</p>
          <p className="text-2xl mt-2 font-bold text-center">
            Your shopping cart seems empty!
          </p>
          <Link className="mt-2 underline underline-offset-2" href={"/"}>Go back to Home Page</Link>
        </div>
      </div>
    )
  } else{
    return (
      <div className={`${poppins.className}`}>
        <Navbar />
  
        <div className="pt-36">
          <p className="text-3xl font-bold text-center">Cart</p>
          <p className="md:text-lg mt-2 text-center mx-4">Discover our stunning selection of bicycles that combine form and function, ensuring you not only enjoy the ride but turn heads while doing it.</p>
          <p className="text-center mt-1 text-blue-500">Total Products Fetched : {props.data.total}</p>
          <div className="mt-10">
          <div className="flex flex-col mx-10 gap-y-10 md:grid md:grid-cols-3 gap-x-16">
          {
              filteredProducts.map((product:any,index:number) =>{
                  return (
                      <CartItem
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
}
