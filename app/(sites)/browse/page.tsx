import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BannerDetail, BannerVideo, BrowseNavbar } from "@/components";
import LogoutButton from "@/components/LogoutButton";
import axios from "axios";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Browse = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const { data } = await axios.get("http://127.0.0.1:3000/api/banner");

  return (
    <>
      <BrowseNavbar />
      <div className="relative">
        <BannerVideo videoKey={data.selectedMovieVideo.key} />
        <BannerDetail
          title={data.randomMovie.title}
          description={data.randomMovie.overview}
        />
      </div>
    </>
  );
};

export default Browse;
