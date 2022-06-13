import React from "react";

function Input({ children, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder={children}
        className="w-[100%] my-[1.5rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2"
        onChange={onChange}
      />
      <label />
    </>
  );
}

export default Input;
