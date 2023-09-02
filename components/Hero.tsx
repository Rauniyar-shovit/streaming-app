import React from "react";
import { Background, CustomContent, GetStarted } from ".";
import { heroContent } from "@/constants";
const Hero = () => {
  return (
    <div>
      <Background
        src="/hero.jpg"
        className=" h-[100vh] flex justify-center items-center  flex-col"
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
