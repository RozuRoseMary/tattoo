import React from "react";
import { Link } from "react-router-dom";
import BlackContainer from "../ui/BlackContainer";
import productImg from "../imgs/phoenix.jpg";

function Product() {
  return (
    <BlackContainer>
      <div className="top flex">
        <img src={productImg} alt="" className="w-[20rem] mr-10" />

        <div className="product-detail">
          <p className="">Phoenix Ink</p>
          <p className="text-price">THB 13,000</p>
          <p className="text-username">@ArtistName</p>
          <Link to="/checkout">
            <i className="my-2 fa-solid fa-cart-plus text-light-pink"></i>
          </Link>
          <p className="mmy-2 text-gray">Body Part</p>
        </div>
      </div>

      <div className="w-[auto] h-[0.08rem] my-5 bg-light-gray"></div>

      <div className="description">
        <p className="text-gray">More detail</p>
      </div>
    </BlackContainer>
  );
}

export default Product;
