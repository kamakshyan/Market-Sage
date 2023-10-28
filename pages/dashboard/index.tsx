import { Poppins } from "next/font/google";
import { AiFillRobot } from "react-icons/ai";
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
import BarChart from "../components/Dashboard/BarChart";
import OrdersTable from "../components/Dashboard/OrdersTable";
import { use, useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function Dashboard() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
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
      active: false,
    },
    {
      name: "Customers",
      icon: <BsFillPersonFill />,
      link: "/dashboard/customers",
      active: false,
    },
    // {
    //   name: "Chatbot",
    //   icon: <AiFillRobot />,
    //   link: "/dashboard/chatbot",
    //   active: false,
    // },
    {
      name: "Settings",
      icon: <BiSolidCog />,
      link: "/dashboard/settings",
      active: false,
    },
  ];
  const [dashboardLinks, setDashboardLinks] = useState(dashboard_links);
  const [activeTab, setActiveTab] = useState<String>(dashboard_links[0].name);
  console.log(activeTab);

  const handleLinkClick = (name:String) => {
    
    setActiveTab(name);
    // console.log("handle-clicked");
    const updatedLinks = dashboard_links.map((link) => ({
      ...link,
      active: link.name === name,
    }));
    setDashboardLinks(updatedLinks);
  };

  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className=" flex pt-20">
        <div className="hidden md:flex flex-col bg-gray-50 border-r border-slate-400 py-10 pl-5 pr-10 justify-between min-h-screen">
          <div className="sticky top-32 ">
            {dashboardLinks.map((link: any, index: any) => {
              return (
                <span
                  // href={link.link}
                  key={index}
                  className={
                    link.active
                      ? `flex flex-col my-2 rounded-xl py-3 px-5 transition-all bg-black text-white`
                      : `flex flex-col my-2 rounded-xl py-3 px-5 transition-all hover:bg-black hover:text-white`
                  }
                  onClick={() => handleLinkClick(link.name)}
                >
                  <div className="flex items-center gap-x-2">
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
        <div className="min-w-[80vw] max-w-[80vw]">
          {/* <BarChart /> */}
          {/* <OrdersTable invoices={invoices} /> */}
          {activeTab === "Dashboard" ? (
            <BarChart />
          ) : activeTab === "Products" ? (
            <PieChart />
          ) : activeTab === "Orders" ? (
            <OrdersTable invoices={invoices} />
          ) : activeTab === "Customers" ? (
            <LineChart />
          ) : activeTab === "Chatbot" ? (
            <div>Chatbot</div>
          ) : activeTab === "Settings" ? (
            <div>Settings</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
