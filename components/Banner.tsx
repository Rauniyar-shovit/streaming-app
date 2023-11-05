"use client";
import { BannerProps } from "@/types";
import React, { useContext } from "react";
import { MoreInfoButton, PlayButton } from ".";
import { MovieModalContext } from "@/context/MovieModalContext";

const Banner = ({ show, videoKey }: BannerProps) => {
  const { setCurrentMovie } = useContext(MovieModalContext);
  const { title, overview } = show;
  const shortOverview = overview.split(".").slice(0, 2).join(".");

  const setCurrentMovieHandler = () => {
    setCurrentMovie({ show, videoKey });
  };

  return (
    <div className="relative 2xl:top-0 xl:-top-64 md:-top-40 -top-0 -z-60 w-full  h-full overflow-hidden aspect-video  pointer-events-none">
      <iframe
        className="w-[300%]  h-[100%] md:h-[130%] 2xl:[h-100vh] -ml-[100%] scale-y-[1.55] md:scale-y-[1] 2xl:scale-[1.5] scale-x-[1.2] sm:scale-x-[1.4]  md:scale-x-[1] object-cover  brightness-75 "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&playlist=${videoKey}&loop=1&mute=1&color=white&controls=0&modestbranding=1&rel=0`}
      />
      <div
        className="absolute  flex z-20 mx-auto w-[90%]  bottom-[10%] 2xl:bottom-[13%] 3xl:bottom-[25%] left-1/2 -translate-x-1/2
      "
      >
        <div className="w-[500px] ">
          <h1 className=" font-bold text-white text-base sm:text-xl lg:text-3xl xl:text-4xl pb-3 sm:pb-6 ">
            {title}
          </h1>
          <p className="hidden xl:block text-white text-md mb-6">
            {shortOverview}
          </p>
          <div className="flex gap-4">
            <PlayButton
              btnClassName="px-4 py-1  lg:px-6 lg:py-2 3xl:px-9 3xl:py-3"
              iconClassName="text-xs md:text-lg lg:text-xl   3xl:text-3xl "
              btnTextClassName="text-xs md:text-lg lg:text-xl   3xl:text-3xl font-medium"
            />
            <MoreInfoButton setMovieHandler={setCurrentMovieHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
