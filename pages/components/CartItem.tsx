import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

export default function CartItem(props: any) {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
 
  const removeFromCart = async () => {
    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: props.id }),
      });
      // console.log(body.length)
      if(!res.ok){
        throw new Error("Failed to remove from cart");
      } else{
        toast('Product removed from cart!',{
          icon: "❌"
        });
       
      }

      window.location.reload();
      
    } catch (error) {
      console.log(error);
    }
  };

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
          src={"/" + props.image}
        />
      </div>
      <div className="flex justify-between mt-5">
        <h1 className="font-semibold text-lg w-56 line-clamp-2">
          Product {props.id}
        </h1>
        <p className="font-semibold mr-3">$ 299</p>
      </div>
      <p className="max-w-[300px] text-sm mt-2 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus
        consequuntur totam itaque earum, optio vero repellat, sequi quaerat
        iusto natus nulla distinctio laudantium! Natus consequuntur obcaecati
        tenetur ab omnis!
      </p>
      <button
        onClick={removeFromCart}
        className="flex items-center w-32 gap-x-2 mt-4 text-sm hover:bg-black hover:text-white mb-5 text-center rounded-full px-5 py-3 border border-black"
      >
        <FiTrash2 />
        Remove
      </button>
    </div>
  );
}
