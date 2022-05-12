import React from "react";

function FlashCard() {
  return (
    <div className="bg-black text-white rounded-md w-44 h-44 m-4 overflow-hidden ">
      {/* <img src="1500.jpg" alt="" /> */}
      <div className="picture bg-mint w-44 h-28 "></div>
      <span>Name</span>
      <span>THB</span>
      <span>@ArtistName</span>
    </div>
  );
}

export default FlashCard;
