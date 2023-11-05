"use client";
import { ProfileData } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";

const AddProfileForm = ({
  userEmail,
  profileChoices,
}: {
  userEmail: string | null | undefined;
  profileChoices: string[];
}) => {
  const randomProfileImg = useMemo(() => {
    return profileChoices[Math.floor(Math.random() * profileChoices.length)];
  }, []);

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

      if (status === 200) {
        reset();
        mutate("/api/fetchProfiles");
        router.push("/profiles");
      }

      if (status === 422) {
      }

      // if (status === 200) {
      //   router.push("/profiles");
      // }
    },
    []
  );

  const onSubmit = handleSubmit((data) =>
    registerProfile(
      data.profileName.trim(),
      userEmail as string,
      randomProfileImg
    )
  );
  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-4 lg:gap-6 3xl:gap-8 justify-center items-center py-4 border-y-[1px] border-gray-200 mb-6 sm:mb-7 2xl:mb-9 3xl:mb-12">
        <div className=" relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 2xl:h-32 2xl:w-32 3xl:h-40 3xl:w-40">
          <Image
            src={randomProfileImg}
            alt="profile"
            fill
            className="mb-3 border-[2px] border-primary-black-400 rounded-md"
          />
        </div>
        <div className="w-52 sm:w-64 lg:w-80 2xl:w-[22rem] 3xl:w-[32rem]">
          <input
            type="text"
            className="bg-gray-200 focus:outline-none w-full px-2 py-1 2xl:px-4 2xl:py-2  3xl:px-5 3xl:py-3 text-sm sm:text-base 2xl:text-lg 3xl:text-4xl"
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
          className={`text-primary-black-100 font-medium text-xs px-4 py-1.5 sm:px-5 sm:py-2 sm:text-sm  2xl:px-6 2xl:py-1.5 2xl:text-lg 3xl:px-12 3xl:py-4 3xl:text-2xl hover:bg-primary-red hover:text-white ${
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
          className="border-[1px] border-gray-400 text-gray-400 text-xs bg-primary-black-200 px-4 py-1.5  sm:px-5 sm:py-2 sm:text-sm  2xl:px-6 2xl:py-1.5 2xl:text-lg 3xl:px-12 3xl:py-4 3xl:text-2xl hover:border-white hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddProfileForm;
