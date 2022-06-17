import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ isUser, title, to, icon, active }) {
  return (
    <div
      className={` ${
        active
          ? "p-5 bg-gradient-to-b from-deep-blue to-pink text-white"
          : "btn-as-text text-gray"
      }`}
    >
      <Link to={to}>
        <i className={icon}></i>
        {title}
      </Link>
    </div>
  );
}

export default MenuItem;
