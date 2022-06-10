import React from "react";
import MenuList from "./MenuList";
import Modal from "../../components/ui/Modal";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

function SubHeader() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const isUserLogin = user.id === +pathname.split("/")[2];

  const handleAddItem = () => {};

  return (
    <div className="flex justify-between ">
      <MenuList />

      <div className="flex justify-center align-middle ">
        {isUserLogin && (
          <Modal
            id="btn-modal"
            btnStyle={" btn-as-text "}
            btnSize="text-1rem"
            icon="fa-solid fa-circle-plus"
            title="Add Picture"
            onSave={handleAddItem}
          ></Modal>
        )}
      </div>
    </div>
  );
}

export default SubHeader;
