"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import { SignOut } from ".";
import { FaRegCopy } from "react-icons/fa";
interface ProfileMenuProps {
  isLoading: boolean;
  profileImage: string;
}

const ProfileMenu = ({ isLoading, profileImage }: ProfileMenuProps) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left  ">
        <div>
          <Menu.Button className="inline-flex w-full items-center  justify-center rounded-md bg-black/20  py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <div className="relative w-8 h-8 group">
              <Image
                src={isLoading ? "/spinner.svg" : profileImage}
                alt="profile"
                fill
                className="rounded-md cursor-pointer"
              />
            </div>
            {!isLoading && (
              <HiChevronDown className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100  sm:bg-primary-black-200 bg-primary-black-100  ring-1 ring-gray-100 shadow-lg focus:outline-none px-2 py-3 opacity-90 sm:opacity-100">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="text-gray-900
                  group flex w-full items-center rounded-md px-1.5 py-1.5 text-[14px] gap-3"
                  >
                    <FaRegEdit className="mr-2 h-7 w-7  text-primary-black-300" />
                    <p
                      className={`${
                        active ? "underline underline-offset-2" : ""
                      }`}
                    >
                      Manage Profiles
                    </p>
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className="text-gray-900
             group flex w-full items-center rounded-md px-1.5 py-1.5 text-[14px] gap-3"
                  >
                    <FaRegCopy className="mr-2 h-7 w-7  text-primary-black-300" />
                    <p
                      className={`${
                        active ? "underline underline-offset-2" : ""
                      }`}
                    >
                      Transfer Profile
                    </p>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="text-gray-900
               group flex w-full items-center rounded-md px-1.5 py-1.5 text-[14px] gap-3"
                  >
                    <IoPersonOutline className="mr-2 h-7 w-7  text-primary-black-300" />
                    <p
                      className={`${
                        active ? "underline underline-offset-2" : ""
                      }`}
                    >
                      Account
                    </p>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="text-gray-900
               group flex w-full items-center rounded-md px-1.5 py-1.5 text-[14px] gap-3"
                  >
                    <RiQuestionLine className="mr-2 h-7 w-7  text-primary-black-300" />
                    <p
                      className={`${
                        active ? "underline underline-offset-2" : ""
                      }`}
                    >
                      Help Center
                    </p>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                <div>
                  <SignOut />
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
