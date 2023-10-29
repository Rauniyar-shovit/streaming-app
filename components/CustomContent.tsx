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
      <div className={` text-white   mb-4 ${containerStyles}`}>
        <h1 className={`lg:text-5xl text-4xl font-bold tracking-tight mb-3 `}>
          {title}
        </h1>
        <p className="lg:text-2xl text-xl  text-semibold mt-4">{description}</p>
      </div>
    </>
  );
};

export default CustomContent;
