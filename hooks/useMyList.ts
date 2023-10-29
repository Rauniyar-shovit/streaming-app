"use client";
import { MyListContext } from "@/context/MyListContext";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";

const useMyList = () => {
  const searchParams = useSearchParams();
  const profileId = searchParams.get("id");
  const { data, error, isLoading } = useSWR(
    "/api/fetchMyList",
    (url: string) =>
      axios.post(url, { profileId }).then((res) => {
        return res.data.myList;
      }),
    { revalidateOnFocus: false }
  );

  return data;
};

export default useMyList;
