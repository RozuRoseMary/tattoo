import React from "react";
import defaultImage from "../../assets/imgs/default-image.jpg";

function InputFile({ onChange, src }) {
  return (
    <div>
      <div className="flex justify-between align-middle items-center">
        <input type="file" id="file" className="hidden" onChange={onChange} />
        <label
          htmlFor="file"
          className=" cursor-pointer text-center w-60 my-5 px-[2rem] py-1 bg-pink rounded hover:shadow-md hover:shadow-pink/50"
        >
          <i className="fa-solid fa-arrow-up-from-bracket m-3"></i>
          Choose File
        </label>
        <i class="fa-solid fa-xmark "></i>
      </div>

      {src ? (
        <img src={URL.createObjectURL(src)} className="w-54 " />
      ) : (
        <img src={defaultImage} alt="" />
      )}
    </div>
  );
}

export default InputFile;
