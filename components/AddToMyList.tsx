"use client";
import { Tooltip } from "@mui/material";
import React from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

const AddToMyList = ({
  existsOnList,
  addToMyList,
  movieAdded,
  deleteFromMyList,
}: {
  existsOnList: boolean;
  addToMyList: () => void;
  deleteFromMyList: () => void;
  movieAdded: boolean;
}) => {
  console.log("exisssut on list add to ", existsOnList);

  const addDeleteListHandler = () => {
    if (!existsOnList) {
      addToMyList();
    } else {
      deleteFromMyList();
    }
  };

  return (
    <Tooltip title="Add to My List" placement="top" arrow>
      <button onClick={addDeleteListHandler} className="modal_btn">
        {(existsOnList || movieAdded) && (
          <AiOutlineCheck className="modal_btn_icon" />
        )}
        {!existsOnList && !movieAdded && (
          <AiOutlinePlus className="modal_btn_icon" />
        )}
      </button>
    </Tooltip>
  );
};

export default AddToMyList;
