import Image from "next/image";
import React, { FC } from "react";
import { CustomContent, GetStarted } from ".";
import { heroContent } from "@/constants";

interface props {
  children?: React.ReactNode;
  src: string;
  className?: string;
}
const Background = ({ children, src, className }: props) => {
  return (
    <div className={`${className} relative `}>
      <Image
        src={src}
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-20 "
      />

      <div className="w-full h-full absolute bg-primary-black  -z-10 opacity-60" />
      {children}
    </div>
  );
};

export default Background;
