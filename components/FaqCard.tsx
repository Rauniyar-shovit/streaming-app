"use client";
import { FaqProps } from "@/types";
import React, { Fragment } from "react";
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
          <p className="faq_content_font">{question}</p>

          <button>
            {open ? (
              <HiXMark className="faq_open_close" />
            ) : (
              <HiPlus className="faq_open_close " />
            )}
          </button>
        </div>

        <Collapse isOpened={open}>
          <div className="bg-gray-200 p-6 faq_content_font tracking-tight">
            {answer.split("\n").map((text, i) => (
              <Fragment key={i}>
                <p>{text}</p> <br />
              </Fragment>
            ))}
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default FaqCard;
