import React from "react";
import { Form } from ".";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  return (
    <>
      <div className="mt-28 bg-primary-black-200 rounded z-10 ">
        <div className="px-16 pt-16 pb-32  flex flex-col gap-8   sm:w-[460px]">
          <h1 className="text-4xl font-[600] tracking-tight ">Sign in</h1>

          <Form />
          <p className="text-[15px]  text-primary-black-300 mt-8">
            New to Netflix?{" "}
            <Link href="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
