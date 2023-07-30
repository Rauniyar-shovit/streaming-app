import React from "react";
import { links } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="my-20">
      <div className="flex flex-col gap-8 w-[80%] mx-auto  text-gray-400 text-base">
        <p>
          Questions? Phone
          <span className="inline-block underline">1 800 404 982</span>
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 ">
          {links.map((link) => (
            <Link key={link.title} href={link.link} className="underline">
              {link.title}
            </Link>
          ))}
        </div>
        <p>Netflix Australia</p>
      </div>
    </footer>
  );
};

export default Footer;
