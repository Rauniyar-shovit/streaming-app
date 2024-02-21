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
import { login } from "@/utils/login";

const Form = () => {
  const [signInError, setSignInError] = useState<string | undefined>();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>();

  const loginHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log("hhhhhhhhhhhhhherrrrrrrrrre");
    const res = await login({ email, password });
    console.log(res);
    if (res?.error !== null) {
      setSignInError(res?.error);
    }

    if (res?.status === 200 && !res?.error) {
      router.push(res?.url!);
    }
  };

  const onSubmit = handleSubmit((data) => loginHandler({ ...data }));

  return (
    <form onSubmit={onSubmit} className=" flex flex-col gap-14">
      <div className="flex flex-col gap-4 ">
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
          className="px-5 py-3 bg-gray-300 rounded focus:outline-none text-lg   w-full "
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
          className="px-5 py-3 bg-gray-300 rounded focus:outline-none text-lg   w-full "
        />
      </div>
      <Button
        isLoading={isSubmitting}
        type="submit"
        title="Login"
        className="py-3 text-base font-medium"
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
