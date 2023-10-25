import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const user = await prismadb.user.findUnique({
      where: { email },
    });

    const profiles = await prismadb.profile.findMany({
      where: { userId: user?.id },
    });

    return NextResponse.json({ profiles: profiles });
  } catch (error) {
    console.log(error);
  }
}
