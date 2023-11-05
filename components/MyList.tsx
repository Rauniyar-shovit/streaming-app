"use client";
import { MyListContext } from "@/context/MyListContext";
import useMyList from "@/hooks/useMyList";
import React, { useContext } from "react";

export const MyList = () => {
  const { myList, setMyList } = useContext(MyListContext);
  const data = useMyList();
  setMyList(data);
  return <></>;
};
