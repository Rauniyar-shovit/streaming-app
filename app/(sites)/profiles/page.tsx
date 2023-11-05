import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { AddProfile, ProfileCard, UserProfiles } from "@/components";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import useProfiles from "@/hooks/useProfiles";

const Profiles = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <UserProfiles email={session.user?.email} />;
};

export default Profiles;
