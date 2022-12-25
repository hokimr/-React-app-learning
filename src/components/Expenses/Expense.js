import React, { useState } from "react";
import "./Exprense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList"
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [seleteYear, setYear] = useState("2022");

  function getYearValue(data) {
    setYear(data);
    console.log(data);
  }

  const result = props.items.filter(
    (x) => x.date.getFullYear().toString() === seleteYear
  );



  return (
    <div className="expenses">
      <ExpensesFilter seleted={seleteYear} getYearValue={getYearValue} />
      <ExpensesChart expense = {result}/>
      <ExpenseList items={result}/>
    </div>
  );
}

export default Expense;
