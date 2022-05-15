import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownUser from "./ui/DropdownUser";
import userImg from "./imgs/sugarGlider.jpg";

function Header() {
  const textHover = "p-7 hover:text-pink cursor-pointer";

  const [dropdown, setDropdownUser] = useState(false);
  const [picProfile, setPicProfile] = useState(false);

  const showDropdownUser = () => setDropdownUser(!dropdown);

  return (
    <nav className="bg-black-gray text-white text-md relative">
      {/* text */}
      <div className="p-4 flex justify-between ">
        <div className="left flex">
          <div className="user-profile flex">
            <div className="bg-mint w-10 h-10 rounded-full mt-5 overflow-hidden">
              <img src={userImg} className="fex flex-col content-center" />
            </div>
            <div className="username flex" onClick={showDropdownUser}>
              <div className="p-7 flex hover:text-pink cursor-pointer  ">
                <p className="">Username</p>
                <div className="ml-5 ">
                  <i className="fa-solid fa-sort-down"></i>
                </div>
              </div>
              {dropdown && <DropdownUser textHover={textHover} />}
            </div>
          </div>

          {/* LINE */}
          <div className="mx-5 h-[100%] w-0.5 bg-light-gray"></div>

          {/* HOME & CHAT */}
          <div className="pages flex content-center">
            <Link to="/home" className={textHover}>
              <i className="fa-solid fa-house"></i>
            </Link>
            <Link to="/chat" className={textHover}>
              <i className="fa-solid fa-comment-dots"></i>
            </Link>
          </div>
        </div>

        {/* RIGHT : FILTER & SEARCH */}
        <div className="right flex ">
          <div className={textHover}>
            <i className="fa-solid fa-filter"></i>
          </div>
          <div className="flex h-5 ">
            <input
              type="text"
              className="px-2.5 py-5 mt-5 rounded-md bg-pink placeholder-white"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
