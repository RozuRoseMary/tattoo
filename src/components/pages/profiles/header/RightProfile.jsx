import React from "react";

function RightProfile({ edit, getUser, setAboutMe }) {
  return (
    <>
      <div className="text-header">About Me:</div>
      {edit || (
        <div className="text-detail">
          {getUser.aboutMe || "This user does not have contain yet."}
        </div>
      )}
      {edit && (
        <textarea
          className="input-textarea"
          placeholder={
            getUser.aboutMe || "This user does not have contain yet."
          }
          onChange={(e) => setAboutMe(e.target.value)}
        ></textarea>
      )}
    </>
  );
}

export default RightProfile;
