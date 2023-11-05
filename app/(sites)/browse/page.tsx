import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Banner, MovieList, Navbar } from "@/components";
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
  } = await axios.get("/api/banner");

  return (
    <>
      <MyList />
      <Navbar />
      <Banner show={showData} videoKey={showTrailerKey} />
      <div className="pb-40">
        <MovieList />
      </div>
      <MovieModal />

      <LogoutButton />
    </>
  );
};

export default Browse;
