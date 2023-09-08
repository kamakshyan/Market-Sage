import { Poppins } from "next/font/google";
import {AiFillRobot} from 'react-icons/ai'
import {
  BiSolidBarChartSquare,
  BiSolidPackage,
  BiSolidTruck,
  BiSolidCog,
} from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import LineChart from ".././components/Dashboard/LineChart";
import PieChart from ".././components/Dashboard/PieChart";
import Navbar from ".././components/Navbar";

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
      active: true,
    },
    {
      name: "Products",
      icon: <BiSolidPackage />,
      link: "/dashboard/products",
      active: false,
    },
    {
      name: "Orders",
      icon: <BiSolidTruck />,
      link: "/dashboard/orders",
      active:false,
    },
    {
      name: "Customers",
      icon: <BsFillPersonFill />,
      link: "/dashboard/customers",
      active:false,
    },
    {
      name: "Chatbot",
      icon: <AiFillRobot />,
      link: "/dashboard/chatbot",
      active:false,
    },
    {
      name: "Settings",
      icon: <BiSolidCog />,
      link: "/dashboard/settings",
      active:false,
    },
  ];
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex flex-col bg-gray-50 border-r border-slate-400 py-10 pl-5 pr-10 justify-between min-h-screen">
          <div className=" ">
            {dashboard_links.map((link: any, index: any) => {
              return (
                <Link
                  href={link.link}
                  key={index}
                  className={link.active ? `flex flex-col my-2 rounded-xl py-3 px-5 transition-all bg-black text-white` : `flex flex-col my-2 rounded-xl py-3 px-5 transition-all hover:bg-black hover:text-white`}
                >
                  <div className="flex items-center gap-x-2">
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-screen p-4 md:p-14">
          <div className="max-h-[45vh] flex flex-col gap-y-3 justify-start items-center p-10 hover:shadow-lg transition-all duration-300 border border-slate-200 rounded-lg">
            <span className="text-xl">Product Sales</span>
            <span className="text-5xl font-bold ">10,000</span>
            <span className="text-sm text-green-500">+10% since last week</span>
          </div>
          <div className="max-h-[45vh] flex flex-col gap-y-3 justify-start items-center p-10 hover:shadow-lg transition-all duration-300 border border-slate-200 rounded-lg">
            <span className="text-xl">Product Reviews</span>
            <span className="text-5xl font-bold ">4.5/5</span>
            <span className="text-sm text-red-500">-10% since last week</span>
          </div>
          <LineChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}
