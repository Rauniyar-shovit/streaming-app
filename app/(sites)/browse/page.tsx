import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Banner, MovieRow, Navbar } from "@/components";
import LogoutButton from "@/components/SignOut";
import MovieModal from "@/components/MovieModal";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Browse = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      {/* <MyList /> */}
      <Navbar />
      <Banner />
      {/* <Banner show={showData} videoKey={showTrailerKey} /> */}
      <div>
        <MovieRow />
      </div>
      <MovieModal />
    </>
  );
};

export default Browse;
