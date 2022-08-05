import React from "react";

function SearchItem() {
  return (
    <div className="right flex ">
      <div className="flex h-5 ">
        <input
          type="text"
          className="px-2.5 py-5 mt-5 rounded-md bg-pink placeholder-white"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default SearchItem;
