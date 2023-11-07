import Image from "next/image";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";

const Download = () => {
  return (
    <div className="border-[2px] sm:w-[60%] w-[50%] border-gray-400 z-50 rounded-[10px] absolute  left-1/2  3xl:bottom-[60px] lg:bottom-[13%] sm:-bottom-[5%] bottom-[152px] -translate-x-1/2  bg-[#000]">
      <div className="flex justify-between items-center gap-4 p-2">
        <div className="flex gap-4 flex-center">
          <div className="relative w-[37px] h-[45px]">
            <Image src="/featuredDownload.png" fill alt="download" />
          </div>

          <div className="font-semibold text-sm">
            <p>Stranger Things</p>
            <p className="text-blue-100 font-normal ">Downloading...</p>
          </div>
        </div>

        <HiArrowDown className="text-[20px] ml-2" />
      </div>
    </div>
  );
};

export default Download;
