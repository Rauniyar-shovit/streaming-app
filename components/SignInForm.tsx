import React, { useState } from "react";
import { Button, Form } from ".";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  return (
    <>
      <div className="absolute top-[120px] sm:left-1/2 sm:-translate-x-1/2 bg-primary-black-200 rounded z-10 ">
        <div className="sm:px-16 sm:pt-16 sm:pb-32 px-4 pt-8 pb-24 flex flex-col gap-8   sm:max-w-[430px] w-screen">
          <h1 className="text-4xl font-[600] tracking-tight ">Sign in</h1>

          <Form />
          <p className="text-[20px]  text-primary-black-300">
            New to Netflix?{" "}
            <Link href="/" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
