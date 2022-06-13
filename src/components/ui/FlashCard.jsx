import React, { useState } from "react";
import { Link } from "react-router-dom";
import productImg from "../../assets/imgs/phoenix.jpg";

function FlashCard({
  id,
  title,
  image,
  price,
  tattooist,
  tattooer,
  tattooistId,
}) {
  const [show, setShow] = useState(false);
  const [seller, setSeller] = useState(null);

  const showProductDetail = () => {
    setShow(!show);
  };

  return (
    <div
      // onClick={showProductDetail}
      className="bg-black text-white rounded-md w-56 h-64 m-14 shadow-md
        "
    >
      <Link to={"/product/" + id}>
        <div className="picture bg-white w-56 h-[140px] rounded-t-md overflow-hidden">
          <img src={image} className="" />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <span>
            {title.length > 12 ? title.substring(0, 12) + "..." : title}
          </span>
          <span>THB {price}</span>
        </div>

        <div className="mx-2 text-username">
          <span>
            @
            {tattooistId
              ? tattooist?.displayName ||
                tattooist?.firstName + " " + tattooist?.lastName
              : tattooer?.displayName ||
                tattooer?.firstName + " " + tattooer?.lastName}
          </span>
        </div>
        {/* {show && <Product />} */}
      </Link>
    </div>
  );
}

export default FlashCard;
