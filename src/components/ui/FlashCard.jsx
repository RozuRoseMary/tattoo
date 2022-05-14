import React from "react";

function FlashCard() {
  return (
    <div className="bg-black text-white rounded-md w-56 h-52 m-4 overflow-hidden ">
      {/* <img src="1500.jpg" alt="" /> */}
      <div className="picture bg-mint w-56 h-36 "></div>
      <div className="flex justify-between mx-2 my-1">
        <span>Name</span>
        <span>THB 13,000</span>
      </div>
      <span>@ArtistName</span>
    </div>
  );
}

export default FlashCard;
