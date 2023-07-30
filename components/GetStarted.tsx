"use client";
import React from "react";
import { getStartedContet } from "@/constants";
import Button from "./Button";

interface GetStartedProps {
  className?: string;
}
const GetStarted = ({ className }: GetStartedProps) => {
  const clickHandler = () => {};
  return (
    <div className={`flex flex-col flex-center ${className}`}>
      <p className="text-[18px]  text-normal mt-4 ">{getStartedContet.title}</p>

      <div className="flex  mt-4 gap-3">
        <input
          type="text"
          id="email"
          placeholder="Email address"
          className="p-3 w-80 rounded bg-primary-black-100  border-[1px] border-white text-white  placeholder:opacity-100 bg-opacity-40 focus"
        />
        <Button
          handleClick={clickHandler}
          title="Get Started"
          className=" text-2xl font-medimum  px-5 py-2.5"
        />
      </div>
    </div>
  );
};

export default GetStarted;
