import React from "react";
import MenuList from "../../../layouts/subheader/MenuList";
import FlashCard from "../../ui/FlashCard";

function BuyerProfile() {
  return (
    <div className="profile-container h-[100vh]">
      <div className="flex p-11">
        <img
          src="https://images.unsplash.com/photo-1607408315636-9bbf355e7ff4"
          alt=""
          className="profile-pic"
        />

        <div className="right-profile-header">
          <p className="text-username-lg ">@DisplayName</p>
          <p>Tattooist</p>
          <button className="btn">Your Account</button>
        </div>

        <div className="line-x"></div>

        <div className="">
          <div className="text-header">About Me:</div>
          <div className="text-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, non
            cumque minus, facilis tempore, cum ex veritatis saepe veniam
            doloremque in enim atque sit reprehenderit accusantium animi illo
            magnam eius.
          </div>
        </div>
      </div>

      <div className="w-[auto] h-[1.5px] mt-2 bg-light-gray"></div>

      <MenuList />

      <div className="w-[auto] h-[1.5px] mb-2 bg-light-gray"></div>

      <div className="footer-like-container flex justify-around">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
    </div>
  );
}

export default BuyerProfile;
