"use client";

import { signIn } from "next-auth/react";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/profiles",
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
