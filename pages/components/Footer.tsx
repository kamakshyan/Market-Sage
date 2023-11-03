import Link from "next/link";
import React from "react";

import { FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    {
      icon: <FaXTwitter />,
    },
    {
      icon: <FaYoutube />,
    },
    {
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="md:py-16 md:grid md:grid-cols-2  px-10 py-7 flex flex-col items-center text-center bg-[#F8FAFB] ">
      <div className="md:text-left">
        <Link href={"/"} className="font-semibold text-lg">
          ✨MarketSage
        </Link>
        <p className="text-xs md:text-[15px] md:ml-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          eligendi nam numquam.
        </p>
      </div>
      <div className="hidden md:flex text-right ml-auto gap-x-6">
        <span className="hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out">Contact</span>
        <span className="hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out">About</span>
        <span className="hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out">Blog</span>
        <span className="hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out">FAQ</span>

      </div>
    </div>
  );
}
