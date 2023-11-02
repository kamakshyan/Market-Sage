import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BestDeals from "./components/BestDealsCard";
import { useEffect, useState } from "react";
// import BestDealsCard from "./components/BestDealsCard";
import ProductCard from "./components/ProductCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

// Fetching Products from FakeStoreAPI
// export const getServerSideProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products?limit=10", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();
//   // console.log("Products: ", data);

//   return {
//     props: { data: data },
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch("https://api.baserow.io/api/database/rows/table/213679/?user_field_names=true&filters=%7B%22filter_type%22%3A%22AND%22%2C%22filters%22%3A%5B%7B%22type%22%3A%22higher_than%22%2C%22field%22%3A%22class_id%22%2C%22value%22%3A%221%22%7D%2C%7B%22type%22%3A%22lower_than%22%2C%22field%22%3A%22class_id%22%2C%22value%22%3A%2211%22%7D%5D%2C%22groups%22%3A%5B%5D%7D", {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.baserow_API_key}`
    },
  });
  const data = await res.json();
  // console.log("Products: ", data.results);

  return {
    props: { data: data },
  };
};

export default function Home(props: any) {
  // Best Deals Time getter

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // Set end of day time

    const timeDiff = endOfDay.getTime() - now.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }

  // Best Deals Time getter Ends
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />

        <div className="pt-20">
        <Hero />
        <Categories />

        <div className="p-10">
          <h1 className="text-3xl font-semibold">Todays Best Deals!</h1>
          {/* <p className="text-center md:text-left text-md text-red-500 ml-1 mt-1">
        Time left: {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </p> */}
          <div className="mt-10">
            <div className="flex flex-col gap-y-10 md:flex-row md:overflow-x-scroll gap-x-10">
            {
            props.data.results.map((product:any,index:number) =>{
                return (
                    <ProductCard
                    key={index}
                    name={product.title}
                    id = {product.id}
                    image={product.path}
                    />
                )
            })
        }
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
