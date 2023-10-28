import Image from "next/image"
import Link from "next/link"
import useNextBlurhash from "use-next-blurhash";
import shirts from '../../public/ali-muhamad-hT1R6Z5pY5I-unsplash.jpg' 
import {BsArrowRight} from 'react-icons/bs'
import { Work_Sans } from "next/font/google"

const work_sans = Work_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
  });

export default function Hero() {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  return (
    <div className="relative md:h-[90vh] overflow-hidden">
      <Image placeholder="blur" className="object-cover" alt="Shirts Hanging on a Rack" src={shirts} />
      <div className="flex flex-col items-center gap-y-7 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className={`${work_sans.className} text-slate-800  drop-shadow-md font-semibold uppercase text-center text-5xl md:text-7xl`}>&apos;23 Collection</span>
        <Link className="group flex items-center gap-x-4 py-4 px-7 text-xl border-none shadow-lg bg-white md:bg-none md:py-4 md:px-10 md:text-2xl" href={"/collection"}>
            Checkout Now
            <BsArrowRight className="group-hover:translate-x-2 transition-all duration-500"/>
            </Link>
        </div>
    </div>
  )
}
