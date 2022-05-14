import React from "react";

function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.children}
      className="bg-black text-white border-solid "
    />
  );
}

export default Input;
