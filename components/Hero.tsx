import React from "react";
import Image from "next/image";
import { Background, CustomContent, GetStarted } from ".";
import { heroContent } from "@/constants";
import Button from "./Button";
const Hero = () => {
  return (
    <div>
      <Background
        src="/hero.jpg"
        className=" h-[60vh] flex justify-center items-center  flex-col"
      >
        <CustomContent
          title={heroContent.title}
          description={heroContent.description}
          containerStyles="flex flex-col justify-center items-center"
        />
        <GetStarted />
      </Background>
    </div>
  );
};

export default Hero;
