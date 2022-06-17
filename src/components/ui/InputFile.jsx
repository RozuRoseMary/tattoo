import React from "react";
import defaultImage from "../../assets/imgs/default-image.jpg";

function InputFile({ id, removeImg, onChange, src = "", alt = "img" }) {
  return (
    <div>
      <div className="flex justify-between align-middle items-center">
        <input
          type="file"
          id={id || "file"}
          name={id || "file"}
          className="hidden"
          onChange={onChange}
        />
        <label
          htmlFor={id || "file"}
          className=" cursor-pointer text-center w-60 my-5 px-[2rem] py-1 bg-pink rounded hover:shadow-md hover:shadow-pink/50"
        >
          <i
            className="fa-solid fa-arrow-up-from-bracket"
            onClick={removeImg}
          ></i>
          Choose File
        </label>

        {removeImg && <i className="fa-solid fa-xmark "></i>}
      </div>

      {src ? (
        <img
          src={typeof src === "string" ? src : URL.createObjectURL(src)}
          alt={alt}
          className="w-54 "
        />
      ) : (
        <img src={defaultImage} alt="" />
      )}
    </div>
  );
}

export default InputFile;
