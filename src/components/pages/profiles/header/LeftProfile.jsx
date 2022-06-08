import React, { useState } from "react";
import Input from "../../../ui/Input";

function LeftProfile({ edit, getUser, editProfile }) {
  const [displayName, setDisplayName] = useState("");

  return (
    <div className="right-profile-header ml-10 w-[200px] flex flex-col ">
      {edit || (
        <p className={`text-username-lg`}>
          @{getUser.displayName || getUser.firstName + " " + getUser.lastName}
        </p>
      )}

      {edit && (
        <Input
          type="text"
          label="Update Display Name"
          onChange={(e) => setDisplayName(e.target.event)}
        >
          {getUser.displayName || getUser.firstName + " " + getUser.lastName}
        </Input>
      )}

      <p>{getUser.role}</p>

      <button className="btn" onClick={editProfile}>
        {edit ? "Save" : "Your Account"}
      </button>
    </div>
  );
}

export default LeftProfile;
