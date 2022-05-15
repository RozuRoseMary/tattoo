import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  const [pathNoNav, setPathNoNav] = useState(false);

  const path = window.location.pathname;

  const checkPath = () => {
    if (path != "/login") {
      return !pathNoNav;
    }
  };
  return (
    <div className="*">
      <div className="header">
        {/* {checkPath() && <Header />} */}
        <Header />
      </div>
      <div
        className="bg-gradient-to-b from-light-pink to-blue text-white
      "
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
