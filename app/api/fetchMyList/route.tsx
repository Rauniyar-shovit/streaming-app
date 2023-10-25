import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { profileId } = await req.json();
    console.log("profile ID api ============", profileId);

    const myList = await prismadb.movie.findMany({
      where: { profileId },
    });

    return NextResponse.json({ myList }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
