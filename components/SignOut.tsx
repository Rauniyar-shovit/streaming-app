"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="hover:underline underline-offset-2 
       flex w-full justify-center items-center mt-3 text-sm"
    >
      Sign out of Netflix
    </button>
  );
};

export default SignOut;
