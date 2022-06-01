import React from "react";

function Button(props) {
  return (
    <button className="w-[100%] my-5 px-[2rem] py-1 bg-pink rounded hover:shadow-md hover:shadow-pink/50">
      {props.children}
    </button>
  );
}

export default Button;
