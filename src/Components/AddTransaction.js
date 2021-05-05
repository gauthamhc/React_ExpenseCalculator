import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form type="submit" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter the text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Amount (negative - expense, positive - income)</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddTransaction;
