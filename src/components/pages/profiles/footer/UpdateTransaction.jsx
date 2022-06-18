import React, { useState } from "react";
import { deletePaymentApi } from "../../../../api/user";
import { useError } from "../../../../context/ErrorContext";
import { useLoading } from "../../../../context/LoadingContext";
import { useTransaction } from "../../../../context/TransactionContext";
import Modal from "../../../ui/Modal";

function UpdateTransaction({ el }) {
  const { setError } = useError();
  const { setLoading } = useLoading();
  const { updateTransaction } = useTransaction();

  const [transactionStatus, setTransactionStatus] = useState(el.status);

  console.log(el);

  const handleUpdate = async () => {
    try {
      await updateTransaction({
        status: transactionStatus,
        productId: el.Product.id,
        transactionId: el.id,
      });

      if (transactionStatus !== el.status) {
        setLoading(true);
        window.location.reload();
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        id={el.id}
        icon="fa-solid fa-marker"
        btnToggle={"transaction" + el.id}
        btnStyle={"w-[3rem] "}
        btnSize={"text-[1rem]"}
        onSave={handleUpdate}
        onClick={() => el.id}
      >
        <div>
          <div className="">{el.id}</div>
          <div className="">{el.Product.id}</div>
          <div className="">{el.Product.title}</div>
          <select
            name="paidReceive"
            className="w-[10rem] h-[3rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2  my-3"
            onChange={(e) => setTransactionStatus(e.target.value)}
          >
            <option
              value="PENDING"
              selected={transactionStatus === "PENDING" && "selected"}
            >
              PENDING
            </option>
            <option
              value="PAID"
              selected={transactionStatus === "PAID" && "selected"}
            >
              PAID
            </option>
            <option
              value="CANCEL"
              selected={transactionStatus === "CANCEL" && "selected"}
            >
              CANCEL
            </option>
          </select>
          <img src={el.payment} alt="" />
        </div>
      </Modal>
    </>
  );
}

export default UpdateTransaction;
