import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { useError } from "../../context/ErrorContext";
import { useTransaction } from "../../context/TransactionContext";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutProduct from "./CheckoutProduct";
import Spinner from "../../components/ui/Spinner";

function Checkout() {
  const { setError } = useError();
  const { user } = useAuth();
  const { createTransaction } = useTransaction();
  const { loading, setLoading } = useLoading();
  const { productId } = useParams();
  const navigate = useNavigate();

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
      if (payment) {
        setLoading(true);
      }

      const formData = new FormData();
      formData.append("paymentPicture", payment);
      await createTransaction(productId, formData);

      if (payment) {
        window.location.reload();
        navigate("/profile/" + user.id + "/statement");
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
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
