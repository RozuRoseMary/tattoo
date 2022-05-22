import React from "react";
import { Link } from "react-router-dom";
import FlashCard from "../../ui/FlashCard";

function BuyerProfile() {
  return (
    <div className="black-container">
      BuyerProfile
      <img src="" alt="" />
      <div className="">
        <p>@DisplayName</p>
        <p>role:</p>
        {/* <p>@DisplayName</p> */}
        <button className="btn">Edit your account</button>
      </div>
      {/* center */}
      <div className="center">
        <div className="line-x"></div>
        <div className="flex">
          <div className="">
            <i class="fa-solid fa-star"></i>
            <span>Liked flash</span>
          </div>
          <div className="">
            <i class="fa-solid fa-heart"></i>
            <span>Liked posts</span>
          </div>
        </div>
        <div className="line-x"></div>
      </div>
      {/* bottom */}
      <div className="show-liked-tatt">
        <FlashCard />
      </div>
    </div>
  );
}

export default BuyerProfile;
