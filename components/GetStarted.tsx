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
      <p className="text-[18px] text-center  text-normal mt-4 ">
        {getStartedContet.title}
      </p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row mt-4 gap-3 justify-center items-center w-full"
      >
        <div className="sm:w-[60%]  w-[90%] max-w-[500px] ">
          <FormInput
            type="text"
            placeHolder="Email address"
            className="p-3 w-full rounded bg-primary-black-100  border-[1px] border-white text-white  placeholder:opacity-100 bg-opacity-40 "
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
        </div>
        <div>
          <Button
            type="submit"
            htmlFor="email"
            title="Get Started"
            className=" text-xl sm:text-2xl sm:font-bold font-md px-5 py-2.5"
          />
        </div>
      </form>
    </div>
  );
};

export default GetStarted;
