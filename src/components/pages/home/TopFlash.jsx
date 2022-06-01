import React from "react";
import FlashCard from "../../ui/FlashCard";
import ViewAll from "./ViewAll";

function TopFlash() {
  return (
    <div className="py-6">
      <ViewAll>Top Flash Tattoo likes</ViewAll>

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
