import { NextResponse } from "next/server";
import { randomNumber } from "@/utils/randomNumber";
import { apiShowVideo } from "@/services/apiShowVideo";
import { apiShowDetail } from "@/services/apiShowDetail";
import { apiShowsList } from "@/services/apiShowsList";
export async function GET() {
  try {
    const shows = await apiShowsList();
    const randomShow = shows[randomNumber(shows?.length)];

    const res = await apiShowDetail(randomShow.id, randomShow.media_type);
    let data;

    const { id, genres, overview } = res;
    if (randomShow.media_type === "tv") {
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
      mediaType: randomShow.media_type,
      genres: genres.map((genres: any) => genres.name),
      id,

      overview,
    };
    const showTrailerKey = await apiShowVideo(
      showData?.id,
      randomShow.media_type
    );

    return NextResponse.json({ showData, showTrailerKey }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
