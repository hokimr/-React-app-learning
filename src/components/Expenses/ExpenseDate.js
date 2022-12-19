import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.getUTCMonth();
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}월</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
