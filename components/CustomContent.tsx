import { CustomContentProps } from "@/types";
import React from "react";
import GetStarted from "./GetStarted";

const CustomContent = ({
  title,
  description,
  containerStyles,
}: CustomContentProps) => {
  return (
    <>
      <div className={` text-white ${containerStyles}`}>
        <h1 className="text-[48px] font-bold tracking-tight">{title}</h1>
        <p className="text-[24px] text-semibold mt-4">{description}</p>
      </div>
    </>
  );
};

export default CustomContent;
