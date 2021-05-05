import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Transaction = ({ transaction }) => {
  const { amount, text, id } = transaction;
  const sign = amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
