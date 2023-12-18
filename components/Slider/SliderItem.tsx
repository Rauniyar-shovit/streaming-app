"use client";
import { MovieModalContext } from "@/context/MovieModalContext";
import useShowDetails from "@/hooks/useShowDetails";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const SliderItem = ({
  movie,
  width,
  mediaType,
}: {
  movie: any;
  width: any;
  mediaType: string;
}) => {
  const [showData, setShowData] = useState(null);
  const [fetchData, setFetchData] = useState(false);
  const { setIsOpen, setCurrentMovie } = useContext(MovieModalContext);

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const res = await axios.post("/api/fetchShowDetails", {
          showId: movie.id,
          mediaType,
        });
        setShowData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShowData();
  }, [fetchData]);

  if (!movie?.backdrop_path) {
    return;
  }

  const showModalHandler = () => {
    setFetchData(true);
    setCurrentMovie({
      show: showData?.showData,
      videoKey: showData?.showTrailerKey,
    });
    setIsOpen(true);
  };

  return (
    <div
      onClick={showModalHandler}
      className="px-[4px] inline-block first-of-type:pl-0 last-of-type:pr-0 transition duration-200 overflow-visible"
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
