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
                className={`pr-5 text-lg ${type == "text" ? " hidden" : " "}`}
              >
                {name}
              </label>
              <input
                placeholder={nameShow}
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                className="input"
              />
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
