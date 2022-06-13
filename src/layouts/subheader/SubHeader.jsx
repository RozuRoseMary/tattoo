import React from "react";
import MenuList from "./MenuList";
import Modal from "../../components/ui/Modal";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import AddItem from "./AddItem";

function SubHeader() {
  const { user } = useAuth();
  return (
    <div className="flex justify-between ">
      <MenuList />
      {user && <AddItem />}
    </div>
  );
}

export default SubHeader;
