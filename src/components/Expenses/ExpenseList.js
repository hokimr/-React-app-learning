import React from "react";
import "./ExpenseList.css";
import Expenselitem from "./Expenselitem";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">지출 내역을 찾을수 없습니다.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {
        (props.items.map((item) => (
          <Expenselitem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        )))
      }
    </ul>
  );
}

export default ExpenseList;
