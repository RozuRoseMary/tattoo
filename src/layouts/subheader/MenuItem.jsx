import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ title, to, icon, active }) {
  return (
    <div className={` ${active ? "btn-as-text-active" : "btn-as-text"}`}>
      <Link to={to}>
        <i class={icon}></i>
        {title}
      </Link>
    </div>
  );
}

export default MenuItem;
