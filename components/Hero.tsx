import React from "react";
import { Background, CustomContent, GetStarted } from ".";
import { heroContent } from "@/constants";
const Hero = () => {
  return (
    <div>
      <Background
        src="/hero.jpg"
        className=" h-[100vh] flex justify-center items-center  flex-col"
        overlayStyles="opacity-60"
      >
        <div className="w-full h-full flex justify-center items-center flex-col px-6">
          <CustomContent
            title={heroContent.title}
            description={heroContent.description}
            containerStyles="flex flex-col justify-center items-center text-center"
          />
          <GetStarted />
        </div>
      </Background>
    </div>
  );
};

export default Hero;
