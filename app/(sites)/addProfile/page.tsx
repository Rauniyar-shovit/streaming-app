import React from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
// import { fetchProfiles } from "@/utils/fetchProfiles";
import AddProfileForm from "@/components/AddProfileForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { chooseProfile } from "@/utils/filterProfile";
import { AddUserProfile } from "@/components";

const AddProfile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <AddUserProfile userEmail={session.user?.email} />;
};

export default AddProfile;
