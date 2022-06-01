import React from "react";

function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.children}
      className="w-[100%] my-[1.5rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2"
    />
  );
}

export default Input;
