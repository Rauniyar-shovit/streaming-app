import { NextResponse } from "next/server";
import { showDetails } from "@/utils/showDetails";
export async function POST(req: Request) {
  try {
    const { showId, mediaType } = await req.json();

    const { showData, showTrailerKey } = await showDetails(showId, mediaType);

    return NextResponse.json({ showData, showTrailerKey }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
