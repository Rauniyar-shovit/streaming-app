import { BASE_URL } from "./apiUrl";
import { fetchData } from "@/utils/fetchData";

export const apiShowVideo = async (id: string, mediaType: string) => {
  const url = `${BASE_URL}/${mediaType}/${id}/videos?language=en-US`;
  try {
    const { results: videos } = await fetchData(url);
    const videoIndex = videos.findIndex(
      (video: any) => video.type === "Trailer"
    );
    return videos[videoIndex].key;
  } catch (err) {
    console.log(err);
  }
};
