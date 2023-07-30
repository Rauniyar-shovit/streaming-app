"use client";
import React, { FC, ReactNode } from "react";
import { HiChevronRight } from "react-icons/hi2";

interface BtnProps {
  className?: string;
  title: string;
  handleClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<BtnProps> = ({ className, title, handleClick, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      className={` border-none bg-primary-red text-white   rounded  hover:bg-primary-red-100 transition-all duration-300 flex flex-center gap-1 ${className}`}
    >
      <p>{title}</p>
      {title === "Get Started" ? <HiChevronRight /> : null}
    </button>
  );
};

export default Button;
