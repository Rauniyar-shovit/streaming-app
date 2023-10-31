"use client";

import useProfiles from "@/hooks/useProfiles";
import { AddProfile, ProfileCard } from ".";
import Image from "next/image";
import { useContext } from "react";
import { MyProfileContext } from "@/context/ProfileContext";
import { redirect } from "next/navigation";

const UserProfiles = ({ email }: { email: any }) => {
  const { data: profiles, isLoading } = useProfiles(email);

  if (!profiles) {
    redirect("/addProfile");
  }

  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-center mx-10">
        <p className="3xl:text-8xl sm:text-5xl text-3xl text-center mb-8 sm:mb-12">
          Who&apos;s Watching?
        </p>
        <div className=" flex flex-wrap gap-2 lg:gap-4 2xl:gap-6 3xl:gap-12  items-center justify-center">
          {isLoading && (
            <div className="relative h-8 w-8 sm:h-12 sm:w-12 2xl:h-16 2xl:w-16 3xl:h-20 3xl:w-20">
              <Image src="/spinner.svg" alt="spinner" fill />
            </div>
          )}
          {profiles?.map((profile: any) => (
            <ProfileCard
              profileId={profile.id}
              key={profile.id}
              source={profile.image}
              profileName={profile.name}
            />
          ))}

          {profiles?.length < 5 && <AddProfile />}
        </div>
      </div>
    </>
  );
};

export default UserProfiles;
