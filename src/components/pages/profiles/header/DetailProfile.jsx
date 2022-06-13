import React from "react";
import InputFile from "../../../ui/InputFile";
import Modal from "../../../ui/Modal";

function DetailProfile() {
  return (
    <div>
      <Modal
        id={"profileDetail"}
        btnToggle="detail"
        btnStyle={"btn ml-10"}
        btnSize={"w-[120px]"}
        title={"Profile Detail"}
      >
        <InputFile />
      </Modal>
    </div>
  );
}

export default DetailProfile;
