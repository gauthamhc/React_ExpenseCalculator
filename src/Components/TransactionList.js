import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalContext";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
