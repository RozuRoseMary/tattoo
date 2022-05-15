import React from "react";

function BlackContainer(props) {
  return (
    <div className="flex justify-center">
      <div className=" my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
        {props.children}
      </div>
    </div>
  );
}

export default BlackContainer;
