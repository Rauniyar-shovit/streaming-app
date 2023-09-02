"use client";
import React, { FC, ReactNode } from "react";
import { HiChevronRight } from "react-icons/hi2";
import Image from "next/image";
interface BtnProps {
  className?: string;
  title: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  htmlFor?: string;
  isLoading?: boolean;
}

const Button: FC<BtnProps> = ({
  className,
  title,
  handleClick,
  type,
  htmlFor,
  isLoading,
}) => {
  return (
    <button
      disabled={isLoading}
      type={type || "button"}
      onClick={handleClick}
      className={` border-none bg-primary-red text-white   rounded  hover:bg-primary-red-100 transition-all duration-300 flex flex-center gap-1 ${className}`}
    >
      {!isLoading && (
        <label htmlFor={htmlFor} className="cursor-pointer">
          <p>{title}</p>
        </label>
      )}
      {isLoading && (
        <Image src="/spinner.svg" width={30} height={30} alt="spinner" />
      )}

      {title === "Get Started" ? <HiChevronRight /> : null}
    </button>
  );
};

export default Button;
