import { Poppins } from "next/font/google";
import {IoExitOutline} from "react-icons/io5"
import {
  BiSolidBarChartSquare,
  BiSolidPackage,
  BiSolidTruck,
  BiSolidCog,
} from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import LineChart from "./components/Dashboard/LineChart";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function dashboard() {
  const dashboard_links = [
    {
      name: "Dashboard",
      icon: <BiSolidBarChartSquare />,
      link: "/dashboard",
    },
    {
      name: "Products",
      icon: <BiSolidPackage />,
      link: "/dashboard/products",
    },
    {
      name: "Orders",
      icon: <BiSolidTruck />,
      link: "/dashboard/orders",
    },
    {
      name: "Customers",
      icon: <BsFillPersonFill />,
      link: "/dashboard/customers",
    },
    {
      name: "Settings",
      icon: <BiSolidCog />,
      link: "/dashboard/settings",
    },
  ];
  return (
    <div className={`${poppins.className}`}>
      {/* <Navbar /> */}
      <div className="flex">
        <div className="flex flex-col bg-gray-100 py-10 pl-5 pr-10 justify-between min-h-screen">
        <div className=" ">
          {dashboard_links.map((link: any, index: any) => {
            return (
              <Link
                href={link.link}
                key={index}
                className="flex flex-col my-2 rounded-xl py-3 px-5 transition-all hover:bg-black hover:text-white gap"
              >
                <div className="flex items-center gap-x-2">
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          href={"/"}
          className="flex flex-col my-2 rounded-xl py-3 px-5 transition-all bg-black text-white gap"
        >
          <div className="flex items-center gap-x-2">
            <span>
              <IoExitOutline/>
            </span>
            <span>Home</span>
          </div>
        </Link>
        </div>

        <div className="w-screen p-14">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
