import axios from "axios";
import { NextResponse } from "next/server";
import { randomNumber } from "@/utils/login";
import { apiMoviesList } from "@/services/apiMoviesList";
import { apiMovieVideo } from "@/services/apiMovieVideo";
import { errorMonitor } from "stream";
export async function GET() {
  try {
    const movies = await apiMoviesList();
    const randomMovie = movies[randomNumber(movies?.length)];
    const selectedMovieVideo = await apiMovieVideo(randomMovie.id);

    return NextResponse.json({ randomMovie, selectedMovieVideo });
  } catch (err) {
    console.log(errorMonitor);
  }
}
