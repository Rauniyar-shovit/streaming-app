import Image from "next/image";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";

const Download = () => {
  return (
    <div className="border-[2px] w-[60%] border-gray-400 z-20 rounded-[10px] absolute  left-1/2  bottom-[52px] -translate-x-1/2  bg-primary-black">
      <div className="flex justify-between items-center gap-4 p-2">
        <div className="flex gap-4 flex-center">
          <Image
            src="/featuredDownload.png"
            width={50}
            height={50}
            alt="download"
          />

          <div className="font-semibold">
            <p>Stranger Things</p>
            <p className="text-blue-100 font-normal text-sm">Downloading...</p>
          </div>
        </div>

        <HiArrowDown className="text-[20px] ml-2" />
      </div>
    </div>
  );
};

export default Download;
