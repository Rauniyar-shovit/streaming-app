import React from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { fetchProfiles } from "@/utils/fetchProfiles";
import AddProfileForm from "@/components/AddProfileForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { chooseProfile } from "@/utils/filterProfile";

const AddProfile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const profiles = await fetchProfiles(session?.user?.email!);
  const profileChoices = chooseProfile(profiles);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-8 ">
      <div>
        <div className="text-left mb-3">
          <p className="text-5xl mb-5">Add Profile</p>
          <p className=" text-gray-300 ease-in">
            Add a profile for another person watching Netflix
          </p>
        </div>
        <AddProfileForm
          userEmail={session?.user?.email!}
          profileChoices={profileChoices}
        />
      </div>
    </div>
  );
};

export default AddProfile;
