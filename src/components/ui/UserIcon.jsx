import React from "react";
import { useAuth } from "../../context/AuthContext";

function UserIcon({ src, containerSize, getUser }) {
  const { user } = useAuth();

  return (
    <div
      className={`bg-mint rounded-full mt-5 overflow-hidden ${
        containerSize ? containerSize : " w-10 h-10"
      }`}
    >
      {user ? (
        <img
          src={src}
          className={`"flex-col content-center" ${user ? "fex" : "hidden"}`}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default UserIcon;
