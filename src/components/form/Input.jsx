import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function Input({ name, type, nameShow }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        defaultValue={""}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="">
              <label
                htmlFor={name}
                className={`pr-5 text-sm text-gray ${
                  type == "text" || type == "password" ? " hidden" : " "
                }`}
              >
                {name} :
              </label>
              <div className="flex ">
                <input
                  placeholder={nameShow}
                  type={type}
                  name={name}
                  onChange={onChange}
                  value={value}
                  className="relative w-[100%] my-[1rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2"
                />
              </div>
            </div>
          );
        }}
        name={name}
      />
      {errors[name] && (
        <span className="text-error">{errors[name].message}</span>
      )}
    </>
  );
}

export default Input;
