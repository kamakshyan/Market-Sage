import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function upload() {

  const models = ["Resnet 1", "Resnet 2", "Resnet 3"]

  const [selectedModel, setSelectedModel] = useState("ResNet 1");

  console.log("Selected Model: ", selectedModel);
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className="pt-32">
        <p className="text-2xl font-bold text-center mb-10">Upload Product Image</p>
        <label className="flex justify-center w-1/2 mx-auto h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop files to Attach, or {" "}
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" />
        </label>
        <div className="flex gap-x-2 justify-center mt-5">
        <p className="">Select AI Model to use :</p>
        <select
        defaultChecked
        onChange={(e) => setSelectedModel(e.target.value)}
        name="" id="">
            {
              models.map((model:any, index:any) => (
                <option key={index} value={model}>{model}</option>
              ))
            }
        </select>
        </div>
      </div>
    </div>
  );
}
