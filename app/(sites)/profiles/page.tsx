import { redirect, useRouter } from "next/navigation";
import React from "react";
import { AddProfile, ProfileCard } from "@/components";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Profiles = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <p className="text-5xl mb-8">Who&apos;s Watching?</p>
      <div className=" flex gap-6">
        <ProfileCard />

        <AddProfile />
      </div>
    </div>
  );
};

export default Profiles;
