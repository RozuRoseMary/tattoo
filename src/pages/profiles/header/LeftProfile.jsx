import React from "react";
import Input from "../../../components//ui/Input";

function LeftProfile({ edit, getUser, setDisplayName }) {
  return (
    <div className="right-profile-header ml-10 max-w-[200px] flex flex-col grow">
      {edit || (
        <p className={`text-header text-username`}>
          @{getUser.displayName || getUser.firstName + " " + getUser.lastName}
        </p>
      )}

      {edit && (
        <Input
          type="text"
          label="Update Display Name"
          onChange={(e) => setDisplayName(e.target.value)}
        >
          {getUser.displayName || getUser.firstName + " " + getUser.lastName}
        </Input>
      )}

      <p>{getUser.role}</p>
    </div>
  );
}

export default LeftProfile;
