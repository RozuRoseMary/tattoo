import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePaymentApi } from "../../../../api/user";
import { useError } from "../../../../context/ErrorContext";
import { useLoading } from "../../../../context/LoadingContext";
import { useUser } from "../../../../context/UserContext";
import InputFile from "../../../ui/InputFile";
import Modal from "../../../ui/Modal";
import PaymentItem from "./PaymentItem";

function Payments() {
  const { setError } = useError();
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { myPayments, createPayment } = useUser();
  const [paymentData, setPaymentData] = useState("Other");
  const [paymentPic, setPaymentPic] = useState(null);

  const handlePic = (e) => {
    if (e.target.files[0]) {
      setPaymentPic(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      if (paymentPic) {
        setLoading(true);
      }

      const formData = new FormData();
      formData.append("paymentPicture", paymentPic);
      formData.append("paymentData", paymentData);

      await createPayment(formData);

      if (paymentPic) {
        window.location.reload();
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      onSave={handleSave}
      btnToggle={"Payment"}
      btnTitle="QR Payment"
      btnStyle={
        " my-5 px-[2rem] py-1 bg-pink rounded hover:shadow-md hover:shadow-pink/50 "
      }
      btnSize="test-[1rem]"
    >
      <div>
        <div className="">QR payment : </div>
        <div className="grid grid-cols-3 bg-black-gray p-2 mt-2 rounded-md">
          {myPayments?.map((el) => (
            <PaymentItem el={el} />
          ))}
        </div>
        <div className="flex flex-col my-[1.5rem]">
          <label for="banks">Choose a payment:</label>
          <select
            name="banks"
            id="banks"
            className="my-[1.5rem] input"
            onChange={(e) => setPaymentData(e.target.value)}
          >
            <option value="Other">Other</option>
            <option value="KBank">KBank</option>
            <option value="BBL">BBL</option>
            <option value="KTB">KTB</option>
            <option value="SCB">SCB</option>
            <option value="PromptPay">PromptPay</option>
          </select>
        </div>

        <InputFile
          id="detailProfile"
          src={paymentPic}
          alt="QRPayment"
          onChange={(e) => handlePic(e)}
        />
      </div>
    </Modal>
  );
}

export default Payments;