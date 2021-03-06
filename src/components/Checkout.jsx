import React from "react";
import { Link } from "react-router-dom";
import BlackContainer from "./ui/BlackContainer";
import Button from "./ui/Button";

function Checkout() {
  return (
    <>
      <div className="black-container">
        <div className="p-10">
          <div className="top">
            <div className="top_left">
              <span className="fa-solid fa-cart-plus"></span>
              <span>Confirm Your Purchase</span>
              <div className="flex">
                <img src="" alt="" />
                <div className="my-5 bg-mint w-64 h-56"></div>
                <div className="mx-10">
                  <p className="text-price">THB 13,000</p>
                  <p className="text-username">@ArtistName</p>
                </div>
              </div>
            </div>
            <div className="top_right"></div>
          </div>
        </div>

        <div className="w-[auto] h-[0.08rem] my-2 bg-light-gray"></div>

        <>
          <div className="p-10 bottom calendar ">
            <div className="flex flex-column justify-center">
              <p> JAN 2022 </p>
            </div>
          </div>
        </>

        <div className="w-[auto] h-[0.08rem] mt-2 bg-light-gray"></div>

        <div className="payment ">
          <div className="flex">
            <div className="left-payment p-10 w-[50%]">
              <p>Payment</p>
              <p className="text-price">iBanking</p>
            </div>

            <div className="w-[0.08rem] h-[auto] mx-2 bg-light-gray"></div>

            <div className="right-payment p-10 w-[50%] ">
              <div className="">
                <span className="mr-5">Total:</span>
                <span className="text-price">THB 13,000</span>
              </div>
              <Link to="/confirm_payment">
                <button className="btn ">Confirm</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
