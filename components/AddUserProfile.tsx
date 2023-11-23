"use client";
import React, { useContext } from "react";
import AddProfileForm from "./AddProfileForm";
import { MyProfileContext } from "@/context/ProfileContext";
import { chooseProfile } from "@/utils/filterProfile";

const AddUserProfile = ({
  userEmail,
}: {
  userEmail: string | null | undefined;
}) => {
  const { myProfiles } = useContext(MyProfileContext);

  console.log("My Profiles from add ", myProfiles);

  const profileChoices = chooseProfile(myProfiles);
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-8 ">
      <div className="mx-4">
        <div className="text-left mb-3">
          <p className="text-4xl sm:text-5xl 2xl:text-6xl   3xl:text-8xl mb-5">
            Add Profile
          </p>
          <p className=" text-gray-300 ease-in text-sm sm:text-base lg:text-xl 3xl:text-2xl ">
            Add a profile for another person watching Netflix
          </p>
        </div>
        <AddProfileForm userEmail={userEmail} profileChoices={profileChoices} />
      </div>
    </div>
  );
};

export default AddUserProfile;
