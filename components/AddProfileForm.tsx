"use client";
import { ProfileData } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddProfileForm = ({
  userEmail,
  profileChoices,
}: {
  userEmail: string;
  profileChoices: string[];
}) => {
  const randomProfileImg =
    profileChoices[Math.floor(Math.random() * profileChoices.length)];

  const router = useRouter();
  const {
    reset,
    register,
    formState: { isSubmitted, errors, isSubmitting },
    handleSubmit,
  } = useForm<ProfileData>({
    defaultValues: {
      profileName: "",
    },
  });

  const registerProfile = useCallback(
    async (profileName: string, userEmail: string, image: string) => {
      const profileData = {
        profileName,
        userEmail,
        image,
      };

      const { status } = await axios.post("/api/registerProfile", {
        ...profileData,
      });

      reset();

      // if (status === 200) {
      //   router.push("/profiles");
      // }
    },
    [axios]
  );

  const onSubmit = handleSubmit((data) =>
    registerProfile(
      data.profileName.trim(),
      userEmail as string,
      randomProfileImg
    )
  );
  console.log("=========== referesg");
  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-4 justify-center items-center py-4 border-y-[1px] border-gray-200 mb-4">
        <Image
          src={randomProfileImg}
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
            {...register("profileName", { required: true })}
          />
        </div>

        <div className="flex gap-1 justify-center items-center ">
          <input type="checkbox" size={30} id="kid" className="" />
          <label htmlFor="kid">Kid?</label>
        </div>
      </div>
      <div className="flex gap-4 ">
        <button
          type="submit"
          className={`text-primary-black-100 font-medium text-sm px-6 py-2 hover:bg-primary-red hover:text-white ${
            isSubmitting ? "bg-primary-red" : "bg-white "
          }`}
        >
          {isSubmitting ? (
            <Image src="/spinner.svg" width={30} height={30} alt="spinner" />
          ) : (
            "Continue"
          )}
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
  );
};

export default AddProfileForm;
