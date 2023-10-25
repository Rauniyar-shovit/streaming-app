import { apiCast } from "@/services/apiCast";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, mediaType } = await req.json();
    const res = await apiCast(id, mediaType);

    const casts: string[] = [];
    for (let i = 0; i < 3; i++) {
      casts[i] = res.cast[i].name;
    }

    return NextResponse.json({ casts }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
