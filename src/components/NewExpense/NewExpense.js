import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {

  function importExpensDate(enteredExpenDate){
    const expenDate = {
      ...enteredExpenDate,
      id: Math.random().toString()
    };
    props.importExpenData(expenDate);
  }

  return <div className="new-expense">
  <ExpenseForm onNewExpenseDataImport={importExpensDate} />
  </div>;
}

export default NewExpense;
