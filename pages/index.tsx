import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/productData/random", {
    method: "GET",
    headers: {
      contentType: "application/json",
    },
  });
  const data = await res.json();

  return {
    props: { data: data },
  };
};

export default function Home(props: any) {
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />

        <div className="pt-20">
          <Hero />
          <Categories />

          <div className="pt-10 px-10 md:pb-10">
            <h1 className="text-3xl font-semibold">Todays Best Deals!</h1>
            <div className="mt-10">
              <div className="flex flex-col gap-y-10 md:flex-row md:overflow-x-scroll gap-x-10">
                {props.data.data.map((product: any, index: number) => {
                  return (
                    <ProductCard
                      key={index}
                      name={product.title}
                      id={product.class_id}
                      image={product.path}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
