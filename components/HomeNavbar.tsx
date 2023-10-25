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
      <div className="w-[80%] absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" width={150} height={100} alt="logo" />
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
