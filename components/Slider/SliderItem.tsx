"use client";
import React from "react";

const SliderItem = ({ movie, width }: { movie: any; width: any }) => {
  if (!movie?.backdrop_path) {
    return;
  }

  return (
    <div
      className="px-[4px] inline-block first-of-type:pl-0 last-of-type:pr-0 hover:scale-[1.55] hover:z-[999] transition duration-200"
      style={{ width: `${width}%` }}
    >
      <img
        className="w-full max-w-full rounded"
        src={`http://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default SliderItem;
