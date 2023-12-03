"use client";
import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import useMovies from "@/hooks/useMovies";

const MoviesSection = ({ title, url }: { title: string; url: string }) => {
  const { data: movies, isLoading } = useMovies(url);

  return (
    <>
      <h2 className="w-[92%] mx-auto font-semibold text-sm md:text-xl  2xl:text-2xl 3xl:text-4xl tracking-normal mb-4">
        {title}
      </h2>
      <div>
        <Slider movies={movies} />
      </div>
    </>
  );
};

export default MoviesSection;
