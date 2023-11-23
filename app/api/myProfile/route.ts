import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { profileId } = await req.json();

    const profile = await prismadb.profile.findUnique({
      where: { id: profileId },
    });
    return NextResponse.json({ profile });
  } catch (error) {
    console.log(error);
  }
}
