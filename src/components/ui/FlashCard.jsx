import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import productImg from "../imgs/phoenix.jpg";

function FlashCard() {
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
        <div className="picture bg-mint w-56 h-36 overflow-hidden">
          <img src={productImg} className="" />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <span>Name</span>
          <span>THB 13,000</span>
        </div>
        <span>@ArtistName</span>
        {/* {show && <Product />} */}
      </div>
    </Link>
  );
}

export default FlashCard;
