import React from "react";

function Input({
  children,
  onChange,
  label,
  className,
  type,
  labelStyle,
  pattern,
}) {
  return (
    <>
      {label && (
        <label htmlFor={children} className={labelStyle || ""}>
          {label}
        </label>
      )}

      <input
        id={children}
        type={type || "text"}
        pattern={pattern}
        placeholder={children}
        className={`${
          className || " w-[100%] "
        } my-[1.5rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2`}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
