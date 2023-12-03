import { fetchData } from "@/utils/fetchData";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const res = await fetchData(url);

    return NextResponse.json({ movies: res.results }, { status: 200 });

    // return NextResponse.json({ myList }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
