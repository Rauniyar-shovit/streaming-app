import { BannerVideoProps } from "@/types";
import React from "react";

const BannerVideo = ({ videoKey, children }: BannerVideoProps) => {
  return (
    <div className="absolute xl:-top-64 md:-top-40 -top-20 -z-10 w-full  overflow-hidden aspect-video pointer-events-none ">
      <iframe
        className="w-[300%]  h-[130%]   -ml-[100%] object-cover brightness-75 "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&playlist=${videoKey}&loop=1&mute=1&color=white&controls=0&modestbranding=1&rel=0`}
      />
    </div>
  );
};

export default BannerVideo;
