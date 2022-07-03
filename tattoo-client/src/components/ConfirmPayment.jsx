import React from "react";
import BlackContainer from "./ui/BlackContainer";

function ConfirmPayment() {
  return (
    <div className="flex justify-center">
      <div className="top black-center-container my-[160px]">
        <div className="flex justify-center items-center px-[30px] ">
          {/* <span className=""></span>
           */}
          <i class="fa-solid fa-star"></i>
          <span className="ml-3 ">Success</span>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>

        <div className="line-x my-6"></div>

        <div className="bottom mx-[30px] ">
          <div className="paid">
            <span>Amount Paid:</span>
            <span className="text-price">THB 13,000</span>
          </div>
          <div className="booking">
            <span>Booking:</span>
            <span className="text-price">26 Jan 2020</span>
            <span className="text-username">4:00 PM - 7:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPayment;
