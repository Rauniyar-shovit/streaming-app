import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const {
      show: { show: showData, videoKey },
      profileId,
    } = await req.json();

    console.log("APPPPPPPPPIIIIIII --------", showData.id, profileId, videoKey);
    const existingShow = await prismadb.movie.findFirst({
      where: { showId: showData.id, profileId },
    });

    if (existingShow) {
      return NextResponse.json(
        {
          message: "Show already added to My List",
        },
        { status: 422 }
      );
    }

    let movieData;

    if (showData.mediaType === "tv") {
      movieData = {
        showId: showData.id,
        genres: showData.genres,
        overview: showData.overview,
        last_air_date: showData.last_air_date,
        number_of_episodes: showData.number_of_episodes,
        number_of_seasons: showData.number_of_seasons,
        poster_path: showData.poster_path,
        title: showData.title,
      };
    } else {
      movieData = {
        showId: showData.id,
        genres: showData.genres,
        overview: showData.overview,
        poster_path: showData.poster_path,
        release_date: showData.release_date,
        runtime: showData.runtime,
        title: showData.title,
      };
    }
    console.log("MMMMOOOVIE DATA --------------", movieData);
    const show = await prismadb.movie.create({
      data: {
        ...movieData,
        videoKey,
        profileId,
        mediaType: showData.mediaType,
      },
    });

    return NextResponse.json(
      {
        message: "Show Added To My List ",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
}
