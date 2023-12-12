import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Banner, BrowseFooter, MovieRow, Navbar } from "@/components";
import LogoutButton from "@/components/SignOut";
import MovieModal from "@/components/MovieModal";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { MyList } from "@/components/MyList";
import { env } from "process";
import { fetchData } from "@/utils/fetchData";
import MoviesSection from "@/components/MoviesSection";

const Browse = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  // const res = await fetchData(
  //   "https://api.themoviedb.org/3/trending/all/day?language=en-US"
  // );

  return (
    <>
      <Navbar />
      <Banner />

      <div>
        <MoviesSection
          url="https://api.themoviedb.org/3/trending/all/day?language=en-US"
          title="Trending now"
        />
        <MoviesSection
          url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=ja"
          title="Japanese Series"
        />

        <MoviesSection
          url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=ko"
          title="Korean TV Dramedies"
        />
      </div>
      <MyList />

      <MovieModal />

      <BrowseFooter />
    </>
  );
};

export default Browse;
