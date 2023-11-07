import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Banner, MovieList, MovieLists, Navbar } from "@/components";
import LogoutButton from "@/components/LogoutButton";
import MovieModal from "@/components/MovieModal";
import { MyList } from "@/components/MyList";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
const Browse = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const {
    data: { showData, showTrailerKey },
  } = await axios.get("http://localhost:3000/api/banner");

  return (
    <>
      {/* <MyList /> */}
      <Navbar />

      <Banner />

      {/* <Banner show={showData} videoKey={showTrailerKey} /> */}

      <MovieLists />
      <MovieModal />
      <LogoutButton />
    </>
  );
};

export default Browse;
