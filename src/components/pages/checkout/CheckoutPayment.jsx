import React from "react";
import { useParams } from "react-router-dom";
import { useTransaction } from "../../../context/TransactionContext";
import { UserContext } from "../../../context/UserContext";
import InputFile from "../../ui/InputFile";
import Modal from "../../ui/Modal";

function CheckoutPayment({ submitTransaction }) {
  const { payment, setPayment } = useTransaction();
  const { getPaymentSellerId } = UserContext();
  const { productId } = useParams();

  const handlePaymentBill = (e) => {
    if (e.target.files[0]) {
      setPayment(e.target.files[0]);
    }
  };

  return (
    <div className="payment ">
      <div className="flex">
        <div className="left-payment p-10 w-[50%]">
          <p>Payment</p>
          <Modal
            btnTitle="Payment Slip"
            title="Payment Slip"
            btnStyle="w-[15rem] my-5 px-[2rem] py-1 bg-deep-blue rounded hover:shadow-md hover:shadow-deeper-blue/50"
            btnSize={"text-1rem"}
          >
            <div className="">Bank Account : </div>
            <img src="" />
            <InputFile
              id="payment"
              onChange={(e) => handlePaymentBill(e)}
              src={payment}
            />
          </Modal>
        </div>

        <div className="w-[1.5px] h-[auto] mx-2 bg-light-gray"></div>

        <div className="right-payment p-10 w-[50%] ">
          <div className="">
            <span className="mr-5">Total:</span>
            <span className="text-price">THB 13,000</span>
          </div>
          <button
            onClick={() => submitTransaction(productId, payment)}
            className="w-[15rem] my-5 px-[2rem] py-1 bg-pink rounded hover:shadow-md hover:shadow-pink/50"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayment;
