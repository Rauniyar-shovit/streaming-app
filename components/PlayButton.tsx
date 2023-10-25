"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
const PlayButton = ({
  iconClassName,
  btnTextClassName,
  btnClassName,
}: {
  iconClassName?: string;
  btnTextClassName?: string;
  btnClassName?: string;
}) => {
  return (
    <button
      className={`rounded-sm bg-white hover:bg-white-200  pointer-events-auto flex justify-center items-center gap-2   text-primary-black-100 ${btnClassName}  `}
      onClick={() => {}}
    >
      <FaPlay className={`${iconClassName}`} />
      <p className={`${btnTextClassName}`}>Play</p>
    </button>
  );
};

export default PlayButton;
