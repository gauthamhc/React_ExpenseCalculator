import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "income", amount: 500 },
    { id: 2, text: "salary", amount: 400 },
    { id: 3, text: "book", amount: -10 },
    { id: 4, text: "camera", amount: 150 },
  ],
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
