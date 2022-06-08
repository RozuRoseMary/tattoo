import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productImg from "../imgs/phoenix.jpg";

function FlashCard({ title, image, price, tattooist, tattooer }) {
  const [show, setShow] = useState(false);
  const [seller, setSeller] = useState(null);

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
          <span>{title}</span>
          <span>THB {price}</span>
        </div>

        <span>
          @
          {tattooist?.displayName ||
            tattooist?.firstName + " " + tattooist?.lastName ||
            tattooer?.displayName ||
            tattooer?.firstName + " " + tattooer?.lastName}
        </span>
        {/* {show && <Product />} */}
      </div>
    </Link>
  );
}

export default FlashCard;
