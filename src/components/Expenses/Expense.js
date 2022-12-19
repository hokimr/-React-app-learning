import React from "react";
import './Exprense.css'
import Expenselitem from "./Expenselitem";


function Expense(props) {
  return (
    <div  className="expenses">
      <Expenselitem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <Expenselitem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <Expenselitem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <Expenselitem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
}

export default Expense;
