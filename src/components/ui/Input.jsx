import React from "react";

function Input({ children, onChange }) {
  return (
    <>
      <label />
      <input
        type="text"
        placeholder={children}
        className="w-[100%] my-[1.5rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2"
        onChange={onChange}
      />
    </>
  );
}

export default Input;
