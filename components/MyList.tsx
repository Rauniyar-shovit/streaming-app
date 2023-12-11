"use client";
import { MyListContext } from "@/context/MyListContext";
import useMyList from "@/hooks/useMyList";
import React, { useContext, useEffect } from "react";
import MoviesSection from "./MoviesSection";

export const MyList = () => {
  const { myList, setMyList } = useContext(MyListContext);
  const data = useMyList();
  useEffect(() => {
    setMyList(data);
  }, [data]);

  console.log("myList ", myList);

  return <MoviesSection title="My List" movieDetails={myList} />;
};
