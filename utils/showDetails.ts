import { apiShowDetail } from "@/services/apiShowDetail";
import { apiShowVideo } from "@/services/apiShowVideo";

export const showDetails = async (showId: string, showMediaType: string) => {
  const res = await apiShowDetail(showId, showMediaType);
  let data;

  const { id, genres, overview } = res;

  if (showMediaType === "tv") {
    const {
      last_air_date,
      number_of_episodes,
      number_of_seasons,
      backdrop_path,
      name,
    } = res;
    data = {
      last_air_date,
      number_of_episodes,
      number_of_seasons,
      backdrop_path,
      title: name,
    };
  } else {
    const { backdrop_path, release_date, runtime, title } = res;
    data = {
      backdrop_path,
      release_date,
      runtime,
      title,
    };
  }

  const showData = {
    ...data,
    mediaType: showMediaType,
    genres: genres.map((genres: any) => genres.name),
    id,

    overview,
  };
  const showTrailerKey = await apiShowVideo(showData?.id, showMediaType);

  return { showData, showTrailerKey };
};
