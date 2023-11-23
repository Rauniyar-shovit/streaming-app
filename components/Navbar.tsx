"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { ProfileMenu, Search } from ".";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import useMyProfile from "@/hooks/useMyProfile";

const Navbar = () => {
  const searchParams = useSearchParams();

  const { data: profile, isLoading } = useMyProfile(searchParams.get("id")!);

  return (
    <nav className="navbar fixed left-1/2 -translate-x-1/2 flex w-[92%] mx-auto my-0 justify-between items-center z-30">
      <div className=" flex xl:gap-12 gap-6 items-center">
        <Link href={"/"}>
          <div className="cursor-pointer relative w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="hidden xl:block">
          <div className="flex  gap-4 text-sm">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 justify-center">
        <Search />
        <div>
          <IoNotificationsOutline className="text-xl sm:text-2xl cursor-pointer " />
        </div>
        <ProfileMenu profileImage={profile?.image} isLoading={isLoading} />
      </div>
    </nav>
  );
};

export default Navbar;
