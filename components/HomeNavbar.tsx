"use client";
import Image from "next/image";
import React from "react";
import { Button } from ".";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomeNavbar = () => {
  const router = useRouter();
  return (
    <header>
      <div className="center_div absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="relative lg:h-20 lg:w-40  h-8 w-24">
              <Image src="/logo.svg" fill alt="logo" />
            </div>
          </Link>
          <Button
            title="Sign in"
            handleClick={() => {
              router.push("/login");
            }}
            className="px-3 py-1  text-[16px] "
          />
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
