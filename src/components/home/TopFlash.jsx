import React from "react";
import FlashCard from "../ui/FlashCard";

function TopFlash() {
  return (
    <div>
      <div className="text ">
        <span>Top Flash Tattoo likes</span>
        <span>VIEW ALL</span>
      </div>
      <div className="cards-cont flex flex-row justify-around flex-wrap">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
    </div>
  );
}

export default TopFlash;
