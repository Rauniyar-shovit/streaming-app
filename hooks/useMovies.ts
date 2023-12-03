"use client";
import axios from "axios";
import useSWR from "swr";

const useMovies = (url: string) => {
  const { data, isLoading, error } = useSWR(
    url,
    (url: string) =>
      axios.post("/api/fetchMovies", { url }).then((res) => {
        return res.data.movies;
      }),
    { revalidateOnFocus: false }
  );

  return { data, isLoading };
};

export default useMovies;
