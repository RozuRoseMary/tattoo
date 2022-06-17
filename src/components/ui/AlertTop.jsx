import React from "react";

function AlertTop({ color, title, detail, link }) {
  const colorType = {
    danger_title: "bg-red-500",
    danger_detail: "bg-red-500",
  };

  return (
    <div role="alert">
      <div class={`bg-red text-white font-bold px-4 py-2`}>{title}</div>
      <div
        class={`border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700`}
      >
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default AlertTop;
