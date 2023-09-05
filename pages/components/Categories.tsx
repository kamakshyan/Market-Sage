import furniture from "../../public/Categories/furniture.jpg";
import handbag from "../../public/Categories/handbags.jpg";
import books from "../../public/Categories/books.jpg";
import sneakers from "../../public/Categories/sneakers.jpg";
import tech from "../../public/Categories/tech.jpg";
import travel from "../../public/Categories/travel.jpg";

import Image from "next/image";

export default function Categories() {
    const categories = [
        {
            name: "Furniture",
            image: furniture,
        },
        {
            name: "Handbags",
            image: handbag,
        },
        {
            name: "Books",
            image: books,
        },
        {
            name: "Sneakers",
            image: sneakers,
        },
        // {
        //     name: "Tech",
        //     image: tech,
        // },
        // {
        //     name: "Travel",
        //     image: travel,
        // }
    ]
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold">Shop Our Top Categories</h1>
      <div className="grid gap-y-10 md:grid-cols-4 gap-x-7 mt-10">
        {
            categories.map((category:any,index) =>{
                return (
                    <div key={index} className="group hover:shadow-md transition-all duration-700 rounded-xl overflow-hidden relative cursor-pointer flex flex-col items-center justify-center">
                        <Image className="md:group-hover:scale-125 transition-all duration-700 w-[350px] h-[250px] object-cover lg:w-[500px]" alt={category.name} src={category.image} />
                        <div className="absolute flex md:hidden md:group-hover:flex items-center justify-center h-full w-full backdrop-blur-sm text-xl font-semibold">
                            <h1 className="drop-shadow-xl text-3xl text-white">{category.name}</h1>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
