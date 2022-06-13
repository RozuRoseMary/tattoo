import React, { useState } from "react";
import UserIcon from "../../../ui/UserIcon";

function ProfilePic({ edit, getUser, image, setImage }) {
  const handlePicture = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      {edit || (
        <UserIcon
          containerSize=" w-[10rem] h-[10rem]"
          src={getUser?.profilePicture}
        />
      )}

      {edit && (
        <div className="flex flex-col">
          <UserIcon
            containerSize=" w-[10rem] h-[10rem]"
            src={image && URL.createObjectURL(image)}
          />

          <input
            type="file"
            // className="bg-black border-1 border-gray rounded-full w-[10rem] h-[10rem] mt-5 p-14 pr-5 "
            id="file"
            className="hidden"
            onChange={(e) => handlePicture(e)}
          />
          <label htmlFor="file" className="btn cursor-pointer">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            Choose File
          </label>
        </div>
      )}
    </>
  );
}

export default ProfilePic;
