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
import { login } from "@/utils/login";
import { useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const [responseMessage, setResponseMessage] = useState<undefined | string>();

  const ctx = useContext(EmailContext);

  const registerUser = useCallback(
    async (data: FormData) => {
      try {
        const customizedData = {
          email: data.email.toLowerCase().trim(),
          password: data.password,
          name: data.name?.trim(),
        };
        console.log("hherrere");
        const { status } = await axios.post("/api/register", {
          ...customizedData,
        });

        if (status === 200) {
          const res = await login({
            email: customizedData.email,
            password: customizedData.password,
          });

          if (res?.status === 200) {
            router.push(res?.url!);
          }
        }
      } catch (error: any) {
        const {
          response: { data },
        } = error;
        setResponseMessage(data.message);
        reset();
      }
    },
    [router]
  );

  return (
    <>
      <nav className="flex justify-between items-center py-3 px-6 border-b-[1px] border-gray-300 bg-[#000]">
        <Link href="/">
          <div className="relative sm:h-20 sm:w-40  h-7 w-20">
            <Image src="/logo.svg" layout="fill" alt="logo" />
          </div>
        </Link>

        <div className=" mb-[1px] border-b-[2px] border-primary-black hover:border-white ">
          <Link href="/login">
            <p className="text-base sm:text-xl">Signin</p>
          </Link>
        </div>
      </nav>

      <div className="min-h-[100vh] flex flex-col bg-[#000]">
        <div className="sm:max-w-[420px] sm:mx-auto sm:mt-28 sm:mb-20 mt-20 mb-16  ">
          <form
            onSubmit={handleSubmit((data) => registerUser(data))}
            className=" flex flex-col gap-10 "
          >
            <div className="px-5 flex gap-4 flex-col  justify-center">
              <h1 className="text-lg sm:text-xl font-bold">
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
                className="px-5 py-3 bg-gray-300 rounded focus:outline-none text-lg   w-full "
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
                className="px-5 py-3 bg-gray-300 rounded focus:outline-none text-lg   w-full "
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
                className="px-5 py-3 bg-gray-300 rounded focus:outline-none text-lg   w-full "
              />

              <Button
                isLoading={isSubmitting}
                type="submit"
                title="Sign up"
                className="text-lg sm:text-xl font-medimum  px-5 py-2.5 mt-7"
              />

              <p className="text-gray-400 text-base sm:text-lg mt-3">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-white border-b-[1px]  border-primary-black hover:border-white"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="mt-auto z-10 bg-primary-black-200 w-full flex flex-center text-primary-black-300 gap-8 py-10 my-11 px-3 border-t-[1px] border-gray-300 ">
          <div>
            <p className="mb-8">Questions? Phone 1 800 404 982</p>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-2 gap-x-20">
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

export default Signup;
