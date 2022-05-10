import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <div
        className="
      "
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
