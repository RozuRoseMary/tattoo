import React from "react";
import BlackContainer from "./ui/BlackContainer";

function Checkout() {
  return (
    <form>
      <div className="bg-black-gray mx-[7rem]">
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

        <div className="line-y"></div>

        {/* <div className="p-10 bottom calendar ">
          <div className="flex flex-column justify-center">
            <p> JAN 2022 </p>
          </div>
        </div> */}

        {/* <div className="line-y"></div> */}

        <div className="payment ">
          <div className="flex">
            <div className="left-payment p-10 w-[50%]">
              <p>Payment</p>
              <p className="text-price">iBanking</p>
            </div>

            <div className="w-[1.5px] h-[auto] mx-2 bg-light-gray"></div>

            <div className="right-payment p-10 w-[50%] ">
              <div className="">
                <span className="mr-5">Total:</span>
                <span className="text-price">THB 13,000</span>
              </div>
              <button className="btn ">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
