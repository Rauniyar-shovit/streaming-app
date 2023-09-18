import React from "react";
import { BannerDetailProps } from "@/types";
const BannerDetail = ({ title, description }: BannerDetailProps) => {
  return (
    <div className="flex h-full z-20 mx-auto w-[90%] border-2 border-white ">
      <div className="w-[500px]  border-2 border-primary-red-100 ">
        <h1 className=" font-bold text-white text-4xl pb-6">{title}</h1>
        <p className=" text-white text-md">{description}</p>
      </div>
    </div>
  );
};

export default BannerDetail;
