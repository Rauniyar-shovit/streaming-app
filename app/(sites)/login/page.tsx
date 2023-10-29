import { Background, SignInForm } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { loginFooterLinks as links } from "@/constants";

const Login = () => {
  return (
    <>
      <Background
        src="/hero.jpg"
        className="min-h-[100vh] flex flex-col gap-16 "
        overlayStyles="opacity-100 sm:opacity-60"
      >
        <div className="absolute top-6 sm:top-4  left-4 sm:left-6  2xl:left-16 z-10">
          <Link href="/">
            <div className="relative sm:h-20 sm:w-40  h-7 w-20">
              <Image src="/logo.svg" layout="fill" alt="logo" />
            </div>
          </Link>
        </div>

        <div className="sm:flex items-center justify-center  ">
          <SignInForm />
        </div>

        <div className="mt-auto z-10 bg-primary-black-200 w-full flex flex-center text-primary-black-300 gap-8 py-10 my-11  border-t-[1px] sm:border-none border-gray-500">
          <div>
            <p className="mb-8">Questions? Phone 1 800 404 982</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-20">
              {links.map((link) => (
                <Link key={link.title} href={link.link} className="text-[13px]">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default Login;
