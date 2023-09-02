"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";
const ProfileCard = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/browse")}
      className="flex flex-col  justify-center items-center ease-in profile_container cursor-pointer "
    >
      <Image
        src={"/default-blue.png"}
        alt="profile"
        width={130}
        height={130}
        className="mb-3 border-[2px] border-primary-black-400 rounded-md"
      />
      <p className="text-center text-gray-400 ease-in">Hello</p>
    </div>
  );
};

export default ProfileCard;
