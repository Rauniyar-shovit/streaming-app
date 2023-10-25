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
    <div className="relative xl:-top-64 md:-top-40 -top-20 -z-60 w-full   overflow-hidden aspect-video  pointer-events-none">
      <iframe
        className="w-[300%]  h-[130%]   -ml-[100%] object-cover brightness-75 "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&playlist=${videoKey}&loop=1&mute=1&color=white&controls=0&modestbranding=1&rel=0`}
      />
      <div
        className="absolute flex z-20 mx-auto w-[90%]  bottom-[10%] 2xl:bottom-[13%] 3xl:bottom-[25%] left-1/2 -translate-x-1/2
      "
      >
        <div className="w-[500px] ">
          <h1 className=" font-bold text-white text-4xl pb-6">{title}</h1>
          <p className="hidden xl:block text-white text-md mb-6">
            {shortOverview}
          </p>
          <div className="flex gap-4">
            <PlayButton
              btnClassName="3xl:px-9 3xl:py-3 px-5 py-1.5"
              iconClassName="text-sm 3xl:text-3xl"
              btnTextClassName="text-sm 3xl:text-2xl font-medium"
            />
            <MoreInfoButton setMovieHandler={setCurrentMovieHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
