import { redirect } from "next/navigation";
import React from "react";
import { AddProfile, ProfileCard } from "@/components";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { fetchProfiles } from "@/utils/fetchProfiles";
const Profiles = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const profiles = await fetchProfiles(session?.user?.email!);

  if (!profiles || profiles?.length === 0) {
    redirect("/addProfile");
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <p className="text-5xl mb-8">Who&apos;s Watching?</p>
      <div className=" flex gap-6">
        {profiles.map((profile: any) => (
          <ProfileCard
            profileId={profile.id}
            key={profile.id}
            source={profile.image}
            profileName={profile.name}
          />
        ))}

        {profiles.length < 5 && <AddProfile />}
      </div>
    </div>
  );
};

export default Profiles;
