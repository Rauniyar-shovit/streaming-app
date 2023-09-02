import Image from "next/image";
import React from "react";

const AddProfile = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-8 ">
      <div>
        <p className="text-5xl mb-5">Add Profile</p>
        <p className="text-center text-gray-300 ease-in">
          Add a profile for another person watching Netflix
        </p>
      </div>

      <form className="flex gap-4 justify-center items-center py-4 border-y-[1px] border-gray-200">
        <Image
          src={"/default-blue.png"}
          alt="profile"
          width={110}
          height={110}
          className="mb-3 border-[2px] border-primary-black-400 rounded-md"
        />
        <div>
          <input type="text" />
        </div>
      </form>

      <div className=" flex gap-6"></div>
    </div>
  );
};

export default AddProfile;
