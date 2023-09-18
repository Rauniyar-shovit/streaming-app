import { randomNumber } from "@/utils/login";
import axios from "axios";

export const apiMovieVideo = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjhhZjNlMDA2MDU4ZTZmYzdhY2M4NjU5ZTkxNWUwMCIsInN1YiI6IjY0ZWZjZmQ0NGIwYzYzMDExYjIwNTg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.481uHQqO6KdaFmEwDjqG_uWgQdjkZbD2k0G9yN42U7o",
        },
      }
    );
    const videos = data.results.filter(
      (video: any) =>
        (video.type === "Trailer" || video.type === "Teaser") &&
        video.size >= 720
    );

    const selectedVideo = videos[randomNumber(videos.length)];

    return selectedVideo;
  } catch (err) {
    console.log(err);
  }
};
