import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function HeaderLayout() {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default HeaderLayout;
