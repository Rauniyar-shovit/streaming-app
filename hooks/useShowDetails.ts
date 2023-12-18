import axios from "axios";
import useSWR from "swr";

const useShowDetails = (showId: string, mediaType: string) => {
  const { data, isLoading, error } = useSWR(
    "/api/fetchShowDetails",
    (url: string) =>
      axios.post(url, { showId, mediaType }).then((res) => {
        return res.data;
      }),
    { revalidateOnMount: true }
  );

  return { data, isLoading };
};

export default useShowDetails;
