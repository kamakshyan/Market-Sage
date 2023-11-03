import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

import { MdFileUpload } from "react-icons/md";

interface Props {
  dirs: string[];
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

const Upload: NextPage<Props> = ({ dirs }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");

  // console.log(selectedModel,selectedMethod)

  const models = [
    "Resnet-18",
    "Resnet-34",
    "Resnet-50",
    "Resnet-101",
    "Resnet-152",
    "VGG-16",
    "VGG-19",
  ];

  const methods = ["Naive", "LSH"];

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("model", selectedModel);
      formData.append("method", selectedMethod);
      const { data } = await axios.post("/api/upload", formData);
      // console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className="pt-32 text-center">
      <p className="text-xl md:text-2xl font-bold">Upload Image</p>
        <p className="text-sm text-center mt-2">
          Upload an image, find similar products instantly
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-10">
        
        <label className="md:mx-auto">
          <input
            accept="image/*"
            type="file"
            hidden
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                setSelectedImage(URL.createObjectURL(file));
                setSelectedFile(file);
              }
            }}
          />
          <div className="w-[80vw] md:w-[40vw] aspect-video rounded flex items-center justify-center border-2 border-dashed border-black cursor-pointer">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <span>Select Image</span>
            )}
          </div>
        </label>
        <div className="flex flex-col gap-y-6 w-5/6 md:w-1/3 md:mx-auto">
          <div className="flex flex-col gap-y-1">
            <label className="">Select Model:</label>
            <select
              onChange={({ target }) => setSelectedModel(target.value)}
              className="w-full px-2 py-3 border border-black"
            >
              <option value="none">Select Model</option>
              {models.map((model, index) => {
                return (
                  <option key={index} value={model}>
                    {model}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <label className="">Select Method:</label>
            <select
              onChange={({ target }) => setSelectedMethod(target.value)}
              className="px-2 py-3 border border-black"
            >
              <option value="none">Select Method</option>
              {methods.map((method, index) => {
                return (
                  <option key={index} value={method}>
                    {method}
                  </option>
                );
              })}
            </select>
          </div>
          <button
          onClick={handleUpload}
          disabled={uploading}
          style={{ opacity: uploading ? ".5" : "1" }}
          className="rounded-3xl flex items-center hover:bg-white justify-center gap-x-1 text-white bg-black p-3 w-full border border-black text-center hover:text-black"
        >
          <MdFileUpload /> {uploading ? "Uploading.." : "Upload"}
        </button>
        </div>

        
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default Upload;
