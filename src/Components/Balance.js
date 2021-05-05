import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item));

  return (
    <div className="label">
      <h3>Balance is ${total}</h3>
    </div>
  );
};

export default Balance;
