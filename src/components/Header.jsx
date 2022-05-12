import React from "react";
import { Link } from "react-router-dom";

const pathname = window.location.pathname;
const textHover = "p-7 hover:text-pink cursor-pointer";

function Header() {
  return (
    <nav className="bg-blackGray text-white ">
      {/* text */}
      <div className="p-4 flex justify-between content-center">
        <div className="left flex">
          <div className="username flex ">
            <img
              src="./imgs/sugarGlider.jpg"
              className="fex flex-col content-center"
            />
            <p className={textHover}>Username</p>
          </div>

          <div className="pages flex content-center">
            <Link to="/home" className={textHover}>
              <i className="fa-solid fa-house"></i>
            </Link>
            <Link to="/chat" className={textHover}>
              <i className="fa-solid fa-comment-dots"></i>
            </Link>
          </div>
        </div>

        <div className="right flex ">
          <div className={textHover}>
            <i className="fa-solid fa-filter"></i>
          </div>
          <div className="flex">
            <input
              type="text"
              className="px-2.5 rounded-md bg-lightPink placeholder-white max-h-6 "
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
