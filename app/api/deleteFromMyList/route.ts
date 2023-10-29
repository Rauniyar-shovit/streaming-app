import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { showId, profileId } = await req.json();
    console.log(typeof showId);
    const existingShow = await prismadb.movie.findFirst({
      where: { showId, profileId },
    });

    if (!existingShow) {
      return NextResponse.json(
        {
          message: "Show Doesnt Exist",
        },
        { status: 422 }
      );
    }

    const show = await prismadb.movie.delete({
      where: { profileId_showId: { profileId, showId } },
    });

    return NextResponse.json(
      {
        message: "Removed from My List",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
}
