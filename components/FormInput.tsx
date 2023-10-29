import { FormInputProps } from "@/types";
import React from "react";
import { FormData } from "@/types";
const FormInput = ({
  type,
  placeHolder,
  errors,
  id,
  register,
  required,
  validation,
  value,
  onChange,
  className,
}: FormInputProps) => {
  const errorMessage = errors[id as keyof FormData]?.message;
  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        placeholder={placeHolder}
        className={`${className} ${
          errorMessage ? "border-b-orange-100 border-b-2" : ""
        }`}
        // className={`px-5 py-3 bg-gray-300 rounded-md focus:outline-none text-lg   w-full border-b-[2px] border-primary-black-100
        // `}
        {...register(`${id}` as any, {
          required: required,
          ...validation,
        })}
        onChange={onChange}
      />

      {errorMessage && (
        <p className=" mt-[5px]   text-orange-100 text-[13px]">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormInput;
