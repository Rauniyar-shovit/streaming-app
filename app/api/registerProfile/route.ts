import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
export async function POST(req: Request) {
  try {
    const { profileName, userEmail, image } = await req.json();

    const user = await prismadb.user.findUnique({
      where: { email: userEmail },
    });

    const existingProfile = await prismadb.profile.findFirst({
      where: { name: profileName, userId: user?.id },
    });

    if (existingProfile) {
      return NextResponse.json(
        {
          message: "Profile already exists with this name",
        },
        { status: 422 }
      );
    }

    const profile = await prismadb.profile.create({
      data: {
        name: profileName,
        image,
        userId: user?.id as string,
      },
    });

    return NextResponse.json(
      {
        message: "Profile Created",
      },
      { status: 200 }
    );
  } catch (error) {}
}
