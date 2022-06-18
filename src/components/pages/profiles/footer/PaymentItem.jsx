import React from "react";
import { deletePaymentApi } from "../../../../api/user";
import { useError } from "../../../../context/ErrorContext";
import { useLoading } from "../../../../context/LoadingContext";

function PaymentItem({ el }) {
  const { setError } = useError();
  const { setLoading } = useLoading();

  const removePayment = async (id) => {
    try {
      setLoading(true);
      await deletePaymentApi(id);

      if (id) {
        window.location.reload();
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between w-20">
        <p className="text-pink ">{el.paymentData}</p>

        <span
          className="fa-solid fa-circle-xmark cursor-pointer flex items-center text-pink hover:text-dark-pink"
          onClick={() => removePayment(el.id)}
        ></span>
      </div>

      <img src={el.paymentPicture} className="w-20" />
    </div>
  );
}

export default PaymentItem;
