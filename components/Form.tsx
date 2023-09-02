"use client";

import { signIn } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from ".";
import FormInput from "./FormInput";
import { FormData } from "@/types";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Form = () => {
  const [signInError, setSignInError] = useState<string | undefined | null>(
    undefined
  );
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>();

  const login = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
          callbackUrl: "/profiles",
        });
        setSignInError(() => res?.error);

        if (res?.error === null) {
          router.push("/profiles");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [router]
  );

  const onSubmit = handleSubmit((data) => login({ ...data }));

  return (
    <form onSubmit={onSubmit} className=" flex flex-col gap-14">
      <div className="flex flex-col gap-8 ">
        {signInError && (
          <div className="bg-orange-100 px-4 py-2 rounded-md text-sm">
            {signInError}
          </div>
        )}
        <FormInput
          type="text"
          placeHolder="Email"
          errors={errors}
          id="email"
          register={register}
          required={true}
          validation={{
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          }}
        />

        <FormInput
          type="password"
          placeHolder="Password"
          errors={errors}
          id="password"
          register={register}
          required={true}
          validation={{
            validate: (value: string) =>
              (value.length >= 4 && value.length <= 60) ||
              "Your password must contain between 4 and 60 characters.",
          }}
        />
      </div>
      <Button
        isLoading={isSubmitting}
        type="submit"
        title="Login"
        className="py-3 text-lg"
      />

      <div className="flex flex-row items-center gap-4 mt-2 justify-center">
        <div
          onClick={() => signIn("google", { callbackUrl: "/profiles" })}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
        >
          <FcGoogle size={30} />
        </div>
        <div
          onClick={() => signIn("github", { callbackUrl: "/profiles" })}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
        >
          <FaGithub size={30} className="text-gray-100" />
        </div>
      </div>
    </form>
  );
};

export default Form;
