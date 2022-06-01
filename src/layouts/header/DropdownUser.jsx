import React from "react";
import { Link } from "react-router-dom";

function DropdownUser(props) {
  const { textHover } = props;

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
            <span className={textHover}>Log out</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DropdownUser;
