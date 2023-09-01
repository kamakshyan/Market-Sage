import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BestDeals from "./components/BestDealsCard";
import { useEffect, useState } from "react";
import BestDealsCard from "./components/BestDealsCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

// Fetching Products from FakeStoreAPI
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=10", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log("Products: ", data)

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
      <div className={poppins.className}>
        <Navbar />
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
          props.data.map((product:any, index:any) =>{
            return (
              <BestDealsCard
              key={index}
              name={product.title} rating={product.rating.rate}
              rating_count={product.rating.count}
              descr={product.description}
              price={product.price} image={product.image} />
            )
          })
        }
        </div>
      </div>
    </div>
        
      </div>
    </>
  );
}
