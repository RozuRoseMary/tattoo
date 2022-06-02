import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DropdownUser(props) {
  const { textHover } = props;
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-[200px] absolute left-[35px] top-[105px] bg-black-gray border-solid border-2 border-light-gray rounded ">
      <div className="flex flex-col">
        <Link to="/profile">
          <div className="my-5 ">
            <span className={textHover}>Profile</span>
          </div>
        </Link>
        <div className="border-[1px] border-light-gray "></div>
        <Link to="/login">
          <div className="my-5">
            <span className={textHover} onClick={handleLogout}>
              Log out
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DropdownUser;
