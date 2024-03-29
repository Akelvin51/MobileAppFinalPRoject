// FinanceContext.js
import React, { createContext, useContext, useState } from 'react';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]); // New state for transactions

  const addExpense = (amount, description) => {
    setExpenses(currentExpenses => currentExpenses + parseFloat(amount));
    setTransactions(prevTransactions => [...prevTransactions, { type: 'expense', amount, description }]);
  };

  const addIncome = (amount, description) => {
    setIncome(currentIncome => currentIncome + parseFloat(amount));
    setTransactions(prevTransactions => [...prevTransactions, { type: 'income', amount, description }]);
  };

  return (
    <FinanceContext.Provider value={{ expenses, addExpense, income, addIncome, transactions }}>
      {children}
    </FinanceContext.Provider>
  );
};
