import React from "react";
import { Link, useLocation } from "react-router-dom";

function PageIcon() {
  const { pathname } = useLocation();

  return (
    <div className="pages flex content-center ">
      {/* HOME ICON */}
      <Link
        to="/"
        className={pathname === "/" ? "icon-header-active " : "icon-header "}
      >
        <i className="fa-solid fa-house "></i>
      </Link>

      {/* CHAT ICON */}
      {/* <Link to="/chat" className="icon-header ">
        <i className="fa-solid fa-comment-dots"></i>
      </Link> */}
    </div>
  );
}

export default PageIcon;
