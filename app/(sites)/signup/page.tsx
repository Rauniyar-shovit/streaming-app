"use client";
import { Button } from "@/components";
import FormInput from "@/components/FormInput";
import { links } from "@/constants";
import { EmailContext } from "@/context/EmailConext";
import { FormData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Page = () => {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<FormData>();

  const [responseMessage, setResponseMessage] = useState<null | string>(null);

  const ctx = useContext(EmailContext);

  const registerUser = useCallback(async (data: FormData) => {
    try {
      const customizedData = {
        email: data.email.trim(),
        password: data.password,
        name: data.name?.trim(),
      };

      const response = await axios.post("/api/register", { ...customizedData });

      setResponseMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center my-5 mx-20">
        <Link href="/">
          <Image src="/logo.svg" width={175} height={80} alt="logo" />
        </Link>

        <div className=" mb-[1px] border-b-[2px] border-primary-black hover:border-white ">
          <Link href="/login">
            <p className="text-xl">Signin</p>
          </Link>
        </div>
      </nav>

      <div className="min-h-[100vh] flex flex-col">
        <div className="max-w-[420px] mx-auto mt-28 mb-20 ">
          <form
            onSubmit={handleSubmit((data) => registerUser(data))}
            className=" flex flex-col gap-10 "
          >
            <h1 className="text-2xl">
              Create an Account to start your membership
            </h1>

            <p className=" text-orange-100 text-xl">{responseMessage}</p>

            <FormInput
              type="text"
              placeHolder={"Username"}
              errors={errors}
              id="name"
              register={register}
              required={true}
              validation={{
                validate: (value: string) =>
                  (value.length >= 4 && value.length <= 10) ||
                  "Your Username must contain between 4 and 10 characters.",
              }}
              className=""
            />

            <FormInput
              value={ctx.email || ""}
              onChange={(e) =>
                ctx.setEmail((e.target as HTMLInputElement).value)
              }
              type="text"
              placeHolder={"Email"}
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
              placeHolder={"Password"}
              errors={errors}
              id="password"
              register={register}
              required={true}
              validation={{
                validate: (value: string) => {
                  if (value.includes(" ")) {
                    return "Password cannot have space";
                  }

                  if (value.length >= 4 && value.length <= 60) {
                    return true;
                  } else {
                    return "Your password must contain between 4 and 60 characters.";
                  }
                },
              }}
            />

            <Button
              isLoading={isSubmitting}
              type="submit"
              title="Signup"
              className=" text-2xl font-medimum  px-5 py-2.5"
            />

            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-white border-b-[1px]  border-primary-black hover:border-white"
              >
                Login
              </Link>
            </p>
          </form>
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
      </div>
    </>
  );
};

export default Page;
