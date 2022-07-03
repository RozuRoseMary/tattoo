import React from "react";

function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.children}
      className="my-[1.5rem] mx-5 block bg-black placeholder-gray border-solid border border-gray rounded p-2"
    />
  );
}

export default Input;
