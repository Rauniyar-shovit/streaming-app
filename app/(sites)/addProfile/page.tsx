"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ProfileData } from "@/types";
import axios from "axios";

const AddProfile = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ProfileData>();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  const registerProfile = useCallback(
    async (name: string, userEmail: string, image: string) => {
      const data = {
        name,
        user: userEmail,
        image,
      };

      await axios.post("/api/registerProfile", { ...data });
    },
    []
  );

  const onSubmit = handleSubmit((data) =>
    registerProfile(
      data.name,
      session?.user?.email as string,
      "/default-blue.png"
    )
  );

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-8 ">
      <div>
        <div className="text-left mb-3">
          <p className="text-5xl mb-5">Add Profile</p>
          <p className=" text-gray-300 ease-in">
            Add a profile for another person watching Netflix
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex gap-4 justify-center items-center py-4 border-y-[1px] border-gray-200 mb-4">
            <Image
              src={"/default-blue.png"}
              alt="profile"
              width={110}
              height={110}
              className="mb-3 border-[2px] border-primary-black-400 rounded-md"
            />
            <div>
              <input
                type="text"
                className="bg-gray-200 focus:outline-none w-[300px] px-3 py-1"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>

            <div className="flex gap-1 justify-center items-center ">
              <input type="checkbox" size={30} id="kid" className="" />
              <label htmlFor="kid">Kid?</label>
            </div>
          </div>
          <div className="flex gap-4 ">
            <button className="text-primary-black-100 font-medium text-sm bg-white px-6 py-2 hover:bg-primary-red hover:text-white">
              Continue
            </button>

            <button
              type="button"
              onClick={() => router.push("/profiles")}
              className="border-[1px] border-gray-400 text-gray-400 text-sm bg-primary-black-200 px-5 py-2 hover:border-white hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default AddProfile;
