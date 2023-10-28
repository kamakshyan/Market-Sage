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
import Navbar from ".././components/Navbar";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function orders() {
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
      active: false,
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
      active: true,
    },
    {
      name: "Customers",
      icon: <BsFillPersonFill />,
      link: "/dashboard/customers",
      active: false,
    },
    {
      name: "Chatbot",
      icon: <AiFillRobot />,
      link: "/dashboard/chatbot",
      active: false,
    },
    {
      name: "Settings",
      icon: <BiSolidCog />,
      link: "/dashboard/settings",
      active: false,
    },
  ];
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className="flex pt-[85px]">
        <div className="hidden md:flex flex-col bg-gray-50 border-r border-slate-400 py-10 pl-5 pr-10 justify-between min-h-screen">
          <div className="sticky top-32 ">
            {dashboard_links.map((link: any, index: any) => {
              return (
                <Link
                  href={link.link}
                  key={index}
                  className={
                    link.active
                      ? `flex flex-col my-2 rounded-xl py-3 px-5 transition-all bg-black text-white`
                      : `flex flex-col my-2 rounded-xl py-3 px-5 transition-all hover:bg-black hover:text-white`
                  }
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
        <div className="flex w-full">
          <Table className="">
            <TableCaption>You&apos;ve reached end of the table 😕</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
