import React from "react";
import { useLoading } from "../../../context/LoadingContext";
import { useError } from "../../../context/ErrorContext";
import { useTransaction } from "../../../context/TransactionContext";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutProduct from "./CheckoutProduct";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Checkout() {
  const { setError } = useError();
  const { createTransaction } = useTransaction();
  const { loading, setLoading } = useLoading();
  const { productId } = useParams();

  useEffect(() => {
    try {
      setLoading(true);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  const submitTransaction = async (productId, payment) => {
    try {
      const formData = new FormData();
      formData.append("paymentPicture", payment);
      await createTransaction(productId, formData);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (loading) return <Spinner />;

  return (
    <>
      <div className="bg-black-gray mx-[7rem]">
        <CheckoutProduct />

        <div className="line-y"></div>

        <CheckoutPayment submitTransaction={submitTransaction} />
      </div>
    </>
  );
}

export default Checkout;
