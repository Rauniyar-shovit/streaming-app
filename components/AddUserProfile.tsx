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
  const profileChoices = chooseProfile(myProfiles);
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-8 ">
      <div>
        <div className="text-left mb-3">
          <p className="text-5xl mb-5">Add Profile</p>
          <p className=" text-gray-300 ease-in">
            Add a profile for another person watching Netflix
          </p>
        </div>
        <AddProfileForm userEmail={userEmail} profileChoices={profileChoices} />
      </div>
    </div>
  );
};

export default AddUserProfile;
