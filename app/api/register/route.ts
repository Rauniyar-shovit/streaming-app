import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    const existingUser = await prismadb.user.findUnique({ where: { email } });

    if (existingUser) {
      return new Response("Email Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return new Response("User created");
  } catch (error) {
    console.log(error);
    return new Response("Error");
  }
}
