"use client";
import { MyListContext } from "@/context/MyListContext";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const useMyList = () => {
  const { myList, setMyList } = useContext(MyListContext);
  const searchParams = useSearchParams();
  const profileId = searchParams.get("id");

  useEffect(() => {
    axios
      .post("/api/fetchMyList", { profileId })
      .then((res) => setMyList(res.data.myList));
  }, []);
  console.log(myList);

  return "gello ";
};

export default useMyList;
