"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SliderControl = ({
  arrowDirection,
  onClick,
}: {
  arrowDirection: any;
  onClick: any;
}) => {
  return (
    <div
      className={`group/control ${
        arrowDirection === "right" ? "right-0" : "left-0"
      }  absolute top-0 h-[100%] w-[4%] flex items-center justify-center text-[1.5rem] sm:text-[2rem] lg:text-[3rem] cursor-pointer text-white z-[10]
        group-hover:bg-[#141414b3] group-active:bg-[#141414b3] 
      `}
    >
      <div
        className="group-hover:block group-active:block  group-hover/control:scale-125 group-active/control:scale-125 transition duration-300 hidden"
        onClick={onClick}
      >
        {arrowDirection === "right" ? <FaChevronRight /> : <FaChevronLeft />}
      </div>
    </div>
  );
};

export default SliderControl;
