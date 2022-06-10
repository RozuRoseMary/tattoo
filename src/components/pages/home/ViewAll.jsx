import React from "react";

function ViewAll(props) {
  return (
    <div>
      <div className="view-all flex justify-between mx-2">
        <span>{props.children}</span>
        <span>VIEW ALL</span>
      </div>
    </div>
  );
}

export default ViewAll;
