"use client";
import React, { useContext } from "react";
import { getStartedContet } from "@/constants";
import Button from "./Button";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { FormData } from "@/types";
import { EmailContext } from "@/context/EmailConext";

interface GetStartedProps {
  className?: string;
}

const GetStarted = ({ className }: GetStartedProps) => {
  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>();

  const ctx = useContext(EmailContext);

  const onSubmit = handleSubmit((data) => {
    if (!errors?.email) {
      ctx.setEmail(data.email);
      router.push(`/signup`);
    }
  });
  return (
    <div className={`flex flex-col flex-center ${className}`}>
      <p className="text-[18px]  text-normal mt-4 ">{getStartedContet.title}</p>

      <form onSubmit={onSubmit} className="flex  mt-4 gap-3">
        {/* <input
          type="text"
          id="email"
          placeholder="Email address"
          className="p-3 w-80 rounded bg-primary-black-100  border-[1px] border-white text-white  placeholder:opacity-100 bg-opacity-40 focus focus:border-primary-red-100"
        /> */}

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

        <Button
          type="submit"
          htmlFor="email"
          title="Get Started"
          className=" text-2xl font-medimum  px-5 py-2.5"
        />
      </form>
    </div>
  );
};

export default GetStarted;
