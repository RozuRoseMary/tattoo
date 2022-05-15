import React from "react";
import BlackContainer from "./BlackContainer";
import productImg from "../imgs/phoenix.jpg";

function Product() {
  return (
    <BlackContainer>
      <div className="top flex">
        <img src={productImg} alt="" className="w-[20rem] mr-10" />

        <div className="product-detail">
          <p className="">Phoenix Ink</p>
          <p className="my-2 text-pink">THB 13,000</p>
          <p className="my-2 text-light-pink">@ArtistName</p>
          <i class="my-2 fa-solid fa-cart-plus text-light-pink"></i>
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
