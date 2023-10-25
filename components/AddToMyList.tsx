"use client";
import { Tooltip } from "@mui/material";
import React from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

const AddToMyList = ({
  addToMyList,
  movieAdded,
}: {
  addToMyList: () => void;
  movieAdded: boolean;
}) => {
  return (
    <Tooltip
      title="Add to My List"
      placement="top"
      arrow
      sx={{
        border: "2px solid white",
        backgroundColor: "#000000",
        fontSize: "10rem",
      }}
    >
      <button onClick={addToMyList} className="modal_btn" disabled={movieAdded}>
        {movieAdded && <AiOutlineCheck className="modal_btn_icon" />}
        {!movieAdded && <AiOutlinePlus className="modal_btn_icon" />}
      </button>
    </Tooltip>
  );
};

export default AddToMyList;
