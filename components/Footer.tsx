import React from "react";
import { links } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="py-20 bg-[#000]">
      <div className="center_div ">
        <div className=" ml-4 lg:ml-0 flex flex-col gap-8 text-gray-500 text-sm ">
          <p>
            Questions? Phone{" "}
            <span className="inline-block underline"> 1 800 404 982</span>
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-4 ">
            {links.map((link) => (
              <Link key={link.title} href={link.link} className="underline">
                {link.title}
              </Link>
            ))}
          </div>
          <p>Netflix Australia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
