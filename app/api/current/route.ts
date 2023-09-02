import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return NextResponse.json({ status: 405 });
  }

  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json({ currentUser }, { status: 200 });
  } catch (error) {}
}

export { handler as GET, handler as POST };
