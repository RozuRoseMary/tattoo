import React from "react";

function ViewAll(props) {
  return (
    <div>
      <div className="view-all flex justify-between">
        <span>{props.children}</span>
        <span>VIEW ALL</span>
      </div>
    </div>
  );
}

export default ViewAll;
