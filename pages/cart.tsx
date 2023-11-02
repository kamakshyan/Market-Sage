import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/cart/userCart",{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const products = await fetch("https://api.baserow.io/api/database/rows/table/213679/?user_field_names=true", {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.baserow_API_key}`
    },
  });
  const data = await res.json();
  const productsData = await products.json();
  return {
    props: { data: data,products:productsData },
  };
};


export default function cart(props:any) {
  // console.log("Products",props.products)
  return (
    <div className={`${poppins.className}`}>
      <Navbar />

      <div className="pt-36">
        <p className="text-3xl font-bold text-center">Cart</p>
        {/* <p className="md:text-lg mt-2 text-center mx-4">Discover our stunning selection of bicycles that combine form and function, ensuring you not only enjoy the ride but turn heads while doing it.</p> */}
        <p className="text-center mt-5 text-green-600">Total Products Fetched : {props.data.total}</p>
        <div className="mt-10">
        <div className="flex flex-col mx-10 gap-y-10 md:grid md:grid-cols-3 gap-x-16">
        {/* {
            props.data.map((product:any,index:number) =>{
                return (
                    <ProductCard
                    key={index}
                    name={product.title}
                    id = {product.id}
                    image={product.path}
                    />
                )
            })
        } */}
        </div>
        
        </div>
      </div>
    </div>
  );
}
