import React from "react";
import MenuList from "./MenuList";
import { HiPlusCircle } from "react-icons/hi";

function SubHeader() {
  return (
    <div className="flex justify-between ">
      <MenuList />

      <div className="flex justify-center align-middle ">
        <div className="btn-as-text">
          <HiPlusCircle className="inline mr-4" />
          <span>Add Picture</span>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
