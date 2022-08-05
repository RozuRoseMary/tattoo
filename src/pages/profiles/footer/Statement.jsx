import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  getMyPaidTransaction,
  getMyReceivedTransaction,
} from "../../../api/transaction";
import { useAuth } from "../../../context/AuthContext";
import { useError } from "../../../context/ErrorContext";
import { useLoading } from "../../../context/LoadingContext";
import { useTransaction } from "../../../context/TransactionContext";
import Spinner from "../../../components/ui/Spinner";
import Payments from "../footer/Payments";
import TableStatement from "./TableStatement";

function Statement() {
  const { setError } = useError();
  const { loading, setLoading } = useLoading();
  const { user } = useAuth();
  const { statements, setStatements } = useTransaction();
  const [paidReceived, setPaidReceived] = useState("PAID");

  const statementPaidTitle = [
    "#",
    "displayName",
    "First Name",
    "Last Name",
    "Product Title",
    "Payment Status",
    "Price",
  ];
  const statementReceivedTitle = [
    "#",
    "displayName",
    "First Name",
    "Last Name",
    "Product Title",
    "Payment Status",
    "Price",
    "Edit",
  ];

  const statusList = ["PENDING"];

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        if (paidReceived === "PAID") {
          const res = await getMyPaidTransaction(user.id);
          setStatements(res.data.transactions);
          setLoading(true);
        } else {
          const res = await getMyReceivedTransaction(user.id);
          setStatements(res.data.transactions);
          setLoading(true);
        }
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [paidReceived]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="m-3 flex justify-between align-middle">
        {user?.role !== "CLIENT" && (
          <>
            <Payments />
            <select
              name="paidReceive"
              className="w-[10rem] h-[3rem] block bg-black placeholder-gray border-solid border border-gray rounded p-2  my-3"
              onChange={(e) => setPaidReceived(e.target.value)}
            >
              <option value="PAID">EXPENSE</option>
              <option value="RECEIVED">INCOME</option>
            </select>
          </>
        )}
      </div>
      {statements?.length > 0 ? (
        <TableStatement
          header={
            paidReceived === "PAID"
              ? statementPaidTitle
              : statementReceivedTitle
          }
          body={statements}
          statusList={statusList}
          paidReceived={paidReceived}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Statement;
