import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AddUserProfile } from "@/components";

const AddProfile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <AddUserProfile userEmail={session.user?.email} />;
};

export default AddProfile;
