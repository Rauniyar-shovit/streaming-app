import { browseFooterLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const BrowseFooter = () => {
  return (
    <div className="mt-28">
      <div className="text-gray-400 w-[90%] xl:w-[65%]  3xl:w-[40%] mx-auto  ">
        <div className="flex gap-6  text-2xl text-white items-center justify-start  px-2 py-4 mb-2">
          <GrFacebookOption />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="grid-cols-2   md:grid-cols-4 grid gap-4 text-xs">
          {browseFooterLinks.map((link) => (
            <Link key={link.title} href={link.link} className="hover:underline">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="inline-block px-1 py-2 border-[1px] border-gray-400 my-4 text-xs text-gray-400 hover:border-white hover:text-white">
          Service Code
        </div>
        <div className="text-xs my-3">&copy; 1997-2023 Netflix,Inc.</div>
      </div>
    </div>
  );
};

export default BrowseFooter;
