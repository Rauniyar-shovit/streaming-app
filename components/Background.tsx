import Image from "next/image";
import React, { FC } from "react";
import { CustomContent, GetStarted } from ".";
import { heroContent } from "@/constants";

interface props {
  children?: React.ReactNode;
  src: string;
  className?: string;
  overlayStyles?: string;
}
const Background = ({ children, src, className, overlayStyles }: props) => {
  return (
    <div className={`${className} relative `}>
      <Image
        src={src}
        alt="background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="-z-20 "
      />

      <div
        className={`w-full h-full absolute bg-[#000]  -z-10 ${overlayStyles}`}
      />
      {children}
    </div>
  );
};

export default Background;
