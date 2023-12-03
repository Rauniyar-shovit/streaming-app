"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
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
