import React from "react";
import FlashCard from "../ui/FlashCard";
import ViewAll from "./ViewAll";

function NewFlash() {
  return (
    <div className="bg-black-gray py-6">
      <ViewAll>New Flash Tattoo</ViewAll>

      <div className=" flex flex-wrap justify-around">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
    </div>
  );
}

export default NewFlash;
