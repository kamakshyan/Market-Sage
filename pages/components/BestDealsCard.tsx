import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import useNextBlurhash from "use-next-blurhash";

export default function BestDealsCard(props: any) {
  const star_count = Math.floor(props.rating);
  const starComponents = Array.from({ length: star_count }, (_, index) => (
    <AiFillStar className="text-yellow-400 text-lg" key={index} />
  ));
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  return (
    <div className="hover:cursor-pointer group flex flex-col min-h-[250px] md:min-w-[400px] mb-5">
      <div className=" bg-gray-100 rounded-xl p-10">
        <Image
        placeholder="blur"
        blurDataURL={blurDataUrl}
          className="group-hover:scale-110 transition-all duration-300 mx-auto object-contain mix-blend-multiply h-[250px] w-[250px]"
          height={250}
          width={350}
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="flex justify-between mt-5">
        <h1 className="font-semibold text-lg w-56 line-clamp-2">
          {props.name}
        </h1>
        <p className="font-semibold mr-3">${props.price}</p>
      </div>
      <p className="max-w-[300px] text-sm mt-2 line-clamp-2">{props.descr}</p>
      <div className="mt-2 mb-5 flex gap-x-2 items-center">
        {star_count > 0 ? starComponents.map((star) => star) : <p>No Rating</p>}
        <p className="text-sm">{`(${props.rating_count})`}</p>
      </div>
      <Link className="mt-auto text-sm hover:bg-black hover:text-white mb-5 w-32 text-center rounded-full px-5 py-3 border border-black" href="/">Add to Cart</Link>
    </div>
  );
}
