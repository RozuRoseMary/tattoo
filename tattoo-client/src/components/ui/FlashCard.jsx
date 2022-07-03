import React, { useState } from "react";
import { Link } from "react-router-dom";
import productImg from "../imgs/phoenix.jpg";

function FlashCard({ image, tattName, price, tattooistName }) {
  const [show, setShow] = useState(false);

  const showProductDetail = () => {
    setShow(!show);
  };
  return (
    <Link to="/product">
      <div
        // onClick={showProductDetail}
        className="bg-black text-white rounded-md w-56 h-52 m-4 "
      >
        <div className="picture bg-mint w-56 h-36 rounded-t-md overflow-hidden">
          <img src={image} className="" />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <span>{tattName}</span>
          <span>THB {price}</span>
        </div>
        <span>@{tattooistName}</span>
        {/* {show && <Product />} */}
      </div>
    </Link>
  );
}

export default FlashCard;
