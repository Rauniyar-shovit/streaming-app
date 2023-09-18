export async function POST(req: Request) {
  try {
    console.log(req.json());
    // const { email, name, image } = await req.json();
    // console.log(email, name, image);
  } catch (error) {}
}
