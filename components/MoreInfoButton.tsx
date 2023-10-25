"use client";
import { MovieModalContext } from "@/context/MovieModalContext";
import React, { useContext } from "react";
import { LuInfo } from "react-icons/lu";
const MoreInfoButton = ({ setMovieHandler }: { setMovieHandler: any }) => {
  const { isOpen, setIsOpen } = useContext(MovieModalContext);
  return (
    <button
      className="rounded-sm bg-gray-600 hover:bg-gray-700 pointer-events-auto "
      onClick={() => {
        setIsOpen(true);
        setMovieHandler();
      }}
    >
      <div className=" flex justify-center items-center gap-2 px-5 py-1.5 3xl:px-9 3xl:py-3 text-white">
        <div className="">
          <LuInfo className="text-xl 3xl:text-3xl" />
        </div>
        <p className="text-sm 3xl:text-2xl font-medium">More info</p>
      </div>
    </button>
  );
};

export default MoreInfoButton;
