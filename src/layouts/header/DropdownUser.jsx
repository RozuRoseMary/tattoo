import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DropdownUser() {
  const { user, logout } = useAuth();

  return (
    <div className="w-[200px] absolute left-[35px] top-[105px] bg-black-gray border-solid border-2 border-light-gray rounded ">
      <div className="flex flex-col">
        <Link to={"/profile/" + user.id + "/products"}>
          <div className="my-5 ">
            {/* // TODO user.displayname || firstName */}
            <span className="icon-header ">Profile</span>
          </div>
        </Link>
        <div className="border-[1px] border-light-gray "></div>
        <Link to="/login">
          <div className="my-5">
            <span className="icon-header " onClick={logout}>
              Log out
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DropdownUser;
