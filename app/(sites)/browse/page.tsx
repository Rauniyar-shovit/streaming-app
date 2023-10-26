import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Banner, Navbar } from "@/components";
import LogoutButton from "@/components/LogoutButton";
import MovieModal from "@/components/MovieModal";
import { MyList } from "@/components/MyList";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Browse = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const {
    data: { showData, showTrailerKey },
  } = await axios.get("http://127.0.0.1:3000/api/banner");

  return (
    <>
      <Navbar />
      <Banner show={showData} videoKey={showTrailerKey} />
      <MyList />
      <MovieModal />

      <LogoutButton />
    </>
  );
};

export default Browse;
