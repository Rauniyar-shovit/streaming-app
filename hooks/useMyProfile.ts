"use client";
import axios from "axios";
import useSWR from "swr";

const useMyProfile = (profileId: string) => {
  const { data, error, isLoading } = useSWR(
    "/api/myProfile",
    (url: string) =>
      axios.post(url, { profileId }).then((res) => {
        return res.data.profile;
      }),
    { revalidateOnFocus: false }
  );

  return { data, error, isLoading };
};

export default useMyProfile;
