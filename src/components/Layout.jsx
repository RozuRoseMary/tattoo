import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="*">
      <div className="header">
        <Header />
      </div>
      <div
        className="bg-gradient-to-b from-lightPink to-blue
      "
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
