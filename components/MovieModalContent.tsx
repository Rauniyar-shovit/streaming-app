"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieModalContent = ({ show }: { show: any }) => {
  const [casts, setCasts] = useState<string[] | null>(null);
  const {
    id,
    genres,
    overview,
    last_air_date,
    number_of_episodes,
    number_of_seasons,
    title,
    poster_path,
    release_date,
    runtime,
    mediaType,
  } = show;

  useEffect(() => {
    axios
      .post("/api/cast", { id, mediaType })
      .then((res) => setCasts(res.data.casts));
  }, [id, mediaType]);

  return (
    <div className="w-full pb-8  ">
      <div className="flex gap-2 w-[85%] mx-auto mt-8  text-gray-400 text-sm">
        <p className="text-green-100 font-bold">95% match</p>
        <div>
          {(mediaType === "tv" ? last_air_date : release_date).slice(0, 4)}
        </div>
        <div>
          {mediaType === "tv"
            ? number_of_seasons === 1
              ? `${number_of_episodes} episodes`
              : `${number_of_seasons} seasons`
            : `${Math.floor(runtime / 60)}h ${runtime % 60}m`}
        </div>
      </div>
      <div className="flex  items-start  gap-6 w-[85%] mx-auto text-sm my-8">
        <div className="text-md basis-[50%] ">
          <div>{overview}</div>
        </div>
        <div className="basis-[50%] flex flex-col">
          <span className="text-gray-400">Casts: </span>
          {casts && casts?.join(", ")} and more{" "}
          <span className="text-gray-400">Genre: </span>
          {genres.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default MovieModalContent;
