"use client";
import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import useMovies from "@/hooks/useMovies";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const getMovies = (url: string) => {
  const { data, isLoading } = useMovies(url);
  return { data, isLoading };
};

const MoviesSection = ({
  title,
  url,
  movieDetails,
}: {
  title?: string;
  url?: string;
  movieDetails?: any;
}) => {
  let movies: any;

  if (url) {
    const { data, isLoading } = getMovies(url);
    movies = data;
  } else {
    movies = movieDetails;
    console.log(movies);
  }

  return (
    <div className="2xl:first-of-type:-mt-28 md:first-of-type:-mt-32  xl:first-of-type:-mt-52   first-of-type:mt-6 ">
      <div className=" group flex relative w-[92%] mx-auto items-center gap-3 cursor-pointer">
        <h2 className=" font-semibold text-sm md:text-xl  2xl:text-2xl 3xl:text-4xl tracking-normal mb-3 2xl:mb-6">
          {title}
        </h2>

        <p className="text-sm tracking-normal mb-3 2xl:mb-6 text-blue-200 font-bold  opacity-0 transition-all duration-300 group-hover:opacity-100 ">
          Explore all
          <MdOutlineKeyboardArrowRight className="inline-block text-xl font-bold" />
        </p>
      </div>

      <div>
        <Slider movies={movies} />
      </div>
    </div>
  );
};

export default MoviesSection;
