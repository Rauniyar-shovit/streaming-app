"use client";
import { MyListContext } from "@/context/MyListContext";
import useMyList from "@/hooks/useMyList";
import React, { useContext, useEffect } from "react";

export const MyList = () => {
  const { myList, setMyList } = useContext(MyListContext);
  const data = useMyList();
  useEffect(() => {
    setMyList(data);
  }, [data]);

  return <></>;
};
