"use client";

import axios from "axios";
import useSWR from "swr";

const useProfiles = (email: string | null | undefined) => {
  const { data, error, isLoading } = useSWR(
    "/api/fetchProfiles",
    (url: string) =>
      axios.post(url, { email }).then((res) => {
        return res.data.profiles;
      }),
    { revalidateOnFocus: false, revalidateOnMount: true }
  );

  return { data, error, isLoading };
};

export default useProfiles;
