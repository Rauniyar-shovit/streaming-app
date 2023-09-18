import Image from "next/image";
import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Search } from ".";
import { IoNotificationsOutline } from "react-icons/io5";
const BrowseNavbar = () => {
  return (
    <nav className="flex w-[90%] mx-auto my-5 justify-between items-center">
      <div className=" flex gap-12 items-center">
        <div className="cursor-pointer">
          <Image src="/logo.svg" width={90} height={100} alt="logo" />
        </div>
        <div className="flex gap-4 text-sm">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6 justify-center">
        <Search />
        <div>
          <IoNotificationsOutline className="text-[24px] cursor-pointer" />
        </div>
        <div>
          <Image
            src={"/default-green.png"}
            alt="profile"
            width={35}
            height={35}
            className="rounded-md cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default BrowseNavbar;
