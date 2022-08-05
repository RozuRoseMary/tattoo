import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPaymentSellerIdApi } from "../../api/user";
import { useError } from "../../context/ErrorContext";
import { useTransaction } from "../../context/TransactionContext";
import { useUser } from "../../context/UserContext";
import InputFile from "../../components/ui/InputFile";
import Modal from "../../components/ui/Modal";

function CheckoutPayment({ submitTransaction }) {
  const { setError } = useError();
  const { sellerPayments, setSellerPayments } = useUser();
  const { payment, setPayment } = useTransaction();
  const { productId } = useParams();

  const handlePaymentBill = (e) => {
    if (e.target.files[0]) {
      setPayment(e.target.files[0]);
    }
  };

  useEffect(() => {
    const getPaymentSellerId = async () => {
      try {
        const res = await getPaymentSellerIdApi(productId);
        setSellerPayments(res.data.payment);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    getPaymentSellerId();
  }, [productId]);

  return (
    <div className="payment ">
      <div className="flex">
        <div className="left-payment p-10 w-[50%]">
          <p>Payment</p>
          <Modal
            btnTitle="Payment Slip"
            btnTitleCancel="confirm"
            title="Payment Slip"
            btnStyle="w-[15rem] my-5 px-[2rem] py-1 bg-deep-blue rounded hover:shadow-md hover:shadow-deeper-blue/50"
            btnSize={"text-1rem"}
          >
            <div className=""></div>
            <div className="">Bank Account : </div>
            <div className="grid grid-cols-3 bg-black-gray p-2 mt-2 rounded-md">
              {sellerPayments?.map((el) => (
                <div>
                  <p className="text-pink">{el.paymentData}</p>
                  <img src={el.paymentPicture} className="w-40" />
                </div>
              ))}
            </div>
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
            className={`w-[15rem] my-5 px-[2rem] py-1 bg-pink rounded hover:shadow-md hover:shadow-pink/50`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayment;
