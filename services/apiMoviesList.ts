import axios from "axios";

export const apiMoviesList = async () => {
  try {
    const {
      data: { results: movies },
    } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjhhZjNlMDA2MDU4ZTZmYzdhY2M4NjU5ZTkxNWUwMCIsInN1YiI6IjY0ZWZjZmQ0NGIwYzYzMDExYjIwNTg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.481uHQqO6KdaFmEwDjqG_uWgQdjkZbD2k0G9yN42U7o",
        },
      }
    );
    return movies;
  } catch (err) {
    console.log(err);
  }
};
