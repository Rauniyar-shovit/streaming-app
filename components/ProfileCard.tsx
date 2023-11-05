"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProfileCardProps } from "@/types";
const ProfileCard = ({ source, profileName, profileId }: ProfileCardProps) => {
  const router = useRouter();
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  return (
    <div
      onClick={() =>
        router.push(`/browse?${createQueryString("id", profileId)}`)
      }
      className="flex flex-col  justify-center items-center ease-in profile_container cursor-pointer "
    >
      <div className="relative profile_icon">
        <Image
          src={source}
          alt="profile"
          fill
          className="mb-3 border-[2px] border-primary-black-400 rounded-md"
        />
      </div>
      <p className="mt-1.5 text-sm sm:text-base text-center text-gray-400 ease-in">
        {profileName}
      </p>
    </div>
  );
};

export default ProfileCard;
