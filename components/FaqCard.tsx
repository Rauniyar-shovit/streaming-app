"use client";
import { FaqProps } from "@/types";

import React from "react";
import { HiPlus, HiXMark } from "react-icons/hi2";
import { Collapse } from "react-collapse";
const FaqCard = ({ question, answer, open, onClick }: FaqProps) => {
  return (
    <>
      <div className="flex flex-col gap-[2px]">
        <div
          onClick={onClick}
          className=" bg-gray-200 cursor-pointer hover:bg-gray-300 flex  p-6 transition-all duration-300  justify-between items-center"
        >
          <p className=" text-[24px]">{question}</p>

          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              return setIsOpen((prev) => !prev);
            }}
          > */}

          <button>
            {open ? (
              <HiXMark className="text-[35px] " />
            ) : (
              <HiPlus className="text-[35px] " />
            )}
          </button>
        </div>

        <Collapse isOpened={open}>
          <div className="bg-gray-200 p-6 text-[22px] font-light">
            {answer.split("\n").map((text, i) => (
              <>
                <p key={i}>{text}</p> <br />
              </>
            ))}
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default FaqCard;
