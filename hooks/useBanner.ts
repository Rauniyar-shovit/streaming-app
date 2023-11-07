import axios from "axios";
import React from "react";
import useSWR from "swr";

const useBanner = () => {
  const { data, isLoading, error } = useSWR(
    "/api/banner",
    (url: string) =>
      axios.get(url).then((res) => {
        return res.data;
      }),
    { revalidateOnFocus: false }
  );

  return { data, isLoading };
};

export default useBanner;
