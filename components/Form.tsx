"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from ".";
type FormData = {
  email: string;
  password: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className=" flex flex-col gap-14">
      <div className="flex flex-col gap-4 ">
        <div>
          <input
            type="text"
            placeholder="Email"
            className={`px-5 py-3 bg-gray-300 rounded-md focus:outline-none text-lg   w-full
        ${errors.email?.message ? "border-b-orange-100 border-[2px] " : ""}`}
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />

          {errors.email?.message && (
            <p className="mt-[4px] text-orange-100 text-[13px]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className={`px-5 py-3 bg-gray-300 rounded-md focus:outline-none  text-lg   w-full ${
              errors.password?.message
                ? "border-b-orange-100 border-[2px] "
                : ""
            }`}
            {...register("password", {
              required: true,
              validate: (value) =>
                (value.length >= 4 && value.length <= 60) ||
                "Your password must contain between 4 and 60 characters.",
            })}
          />
          {errors.password?.message && (
            <p className="mt-[4px] text-orange-100 text-[13px]">
              {errors.password?.message}
            </p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        title="Sign in"
        handleClick={() => {}}
        className="py-3 text-lg"
      />
    </form>
  );
};

export default Form;
