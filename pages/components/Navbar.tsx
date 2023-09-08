import { CiShoppingBasket, CiMenuFries } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const navlinks = [
    {
      title: "Trending",
      href: "/trending",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "Sale",
      href: "/sale",
    },
  ];

  const icons = [
    {
      icon: <CiShoppingBasket />,
      name: "cart",
      href: "/cart",
    },
    {
      icon: <GoGraph />,
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <AiOutlineUser />,
      name: "Profile",
      href: "/profile",
    },
  ];

  function showMenu() {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("hidden");
  }

  return (
    <>
      <div className="z-30 bg-white w-full fixed border-b border-slate-400 p-7 items-center flex justify-between">
        <Link href={"/"} className="font-semibold">
          ✨MarketSage
        </Link>
        <div className="hidden md:flex items-center gap-x-5">
          {navlinks.map((link: any, index: any) => {
            return (
              <>
                <div key={index}>
                  {index > 0 && (
                    <span key={index} className="text-gray-500">
                      {" "}
                      /{" "}
                    </span>
                  )}
                  <Link key={index} href={link.href}>
                    {link.title}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="hidden md:flex items-center text-xl gap-x-5">
          {icons.map((icon: any, index: any) => {
            return (
              <>
                {index > 0 && <span className="text-gray-500"> | </span>}
                <Link key={index} href={icon.href}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>{icon.icon}</TooltipTrigger>
                      <TooltipContent>
                        <p>{icon.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </>
            );
          })}
        </div>
        <CiMenuFries onClick={showMenu} className="md:hidden" />
      </div>
      <div className="menu flex flex-col bg-white hidden fixed z-40 h-full w-full">
        <div className="flex justify-between p-7">
        <Link href={"/"} className="font-semibold">
          ✨MarketSage
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={showMenu}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </div>
        <div className="flex flex-col p-7">
          {navlinks.map((link: any, index: any) => {
            return (
              <>
                <Link className="py-3 flex justify-between" href={link.href}>
                  {link.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </>
            );
          })}
        </div>
        <div className="mx-auto flex gap-x-5 mt-10">
          {
            icons.map((icon:any, index:any) =>{
              return (
                <>
                <Link
                className="text-2xl p-4 bg-black text-white rounded-full"
                href={icon.href}>{icon.icon}</Link>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
