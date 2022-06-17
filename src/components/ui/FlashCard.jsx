import React from "react";
import { Link } from "react-router-dom";

function FlashCard({
  id,
  title,
  image,
  price,
  tattooist,
  tattooer,
  tattooistId,
}) {
  return (
    <div
      className="bg-black text-white rounded-md w-56 h-64 m-[1rem] shadow-md
        "
    >
      <Link to={"/product/" + id}>
        {/* invert blur-sm */}
        <div className="picture bg-white w-56 h-[12rem] rounded-t-md overflow-hidden ">
          <img src={image} className="" />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <span>
            {title.length > 12 ? title.substring(0, 12) + "..." : title}
          </span>
          <span>THB {price}</span>
        </div>

        <div className="mx-2 text-light-pink">
          <span>
            @
            {tattooistId
              ? tattooist?.displayName ||
                tattooist?.firstName + " " + tattooist?.lastName
              : tattooer?.displayName ||
                tattooer?.firstName + " " + tattooer?.lastName}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default FlashCard;
