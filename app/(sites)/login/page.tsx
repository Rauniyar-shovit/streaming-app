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
        className="min-h-[100vh] flex flex-col gap-16"
      >
        <div className="absolute top-8 left-16  z-10">
          <Link href="/">
            <Image src="/logo.svg" width={175} height={80} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-center  ">
          <SignInForm />
        </div>

        <div className="mt-auto z-10 bg-primary-black-200 w-full flex flex-center text-primary-black-300 gap-8 py-10 my-11 ">
          <div>
            <p className="mb-8">Questions? Phone 1 800 404 982</p>
            <div className="grid grid-cols-4 gap-y-2 gap-x-20">
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
