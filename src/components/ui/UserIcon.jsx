import React from "react";
import { useAuth } from "../../context/AuthContext";
import Spinner from "./Spinner";

function UserIcon({ containerSize }) {
  const { user } = useAuth();

  return (
    <div
      className={`bg-mint rounded-full mt-5 overflow-hidden ${
        containerSize ? containerSize : " w-10 h-10"
      }`}
    >
      {user ? (
        <img
          src={user.profilePicture}
          className={`"flex-col content-center" ${user ? "fex" : "hidden"}`}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default UserIcon;
