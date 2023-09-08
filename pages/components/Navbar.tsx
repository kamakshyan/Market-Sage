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
  return (
    <div className="relative border-b border-slate-400 p-7 items-center flex justify-between">
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
        {/* {
                icons.map((icon:any,index:any) =>{
                    return (
                        <>
                        {index > 0 && <span  className="text-gray-500"> | </span>}
                        <Link key={index} href={icon.href}>{icon.icon}</Link>
                        </>
                    )
                })
            } */}
        {icons.map((icon: any, index: any) => {
          return (
            <>
            {index > 0 && <span  className="text-gray-500"> | </span>}
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
      <CiMenuFries className="md:hidden" />
    </div>
  );
}
