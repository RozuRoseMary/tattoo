import React from "react";
import { useLocation } from "react-router-dom";
import MenuList from "./MenuList";
import { useAuth } from "../../context/AuthContext";
import AddItem from "./AddItem";

function SubHeader() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const isProduct = pathname.split("/")[3] === "products";

  return (
    <div className="flex justify-between ">
      <MenuList />
      {user && isProduct && <AddItem />}
    </div>
  );
}

export default SubHeader;
