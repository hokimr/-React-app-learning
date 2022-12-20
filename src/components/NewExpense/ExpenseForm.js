import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // 이전에 데이터에 의존할 필요가 없을 경우 단일 State 사용도 괜찮은 방법
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  // 이전 데이터에 의존해야할 경우 prevState를 전달
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChageHandler(e) {
    // setEnteredTitle(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  }
  function AmountChageHandler(e) {
    // setEnteredAmount(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: e.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  }
  function DateChageHandler(e) {
    // setEnteredDate(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: e.target.value
    // })
    setUserInput((prevState) => {
        return { ...prevState, enteredDate: e.target.value };
      });
  }

  function submitHeandler(e){
    e.preventDefault();

    const newExpenseDate = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date : new Date(userInput.enteredDate)
    }
    
    props.onNewExpenseDataImport(newExpenseDate);
    
    setUserInput({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    })
  }

  return (
    <form onSubmit={submitHeandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChageHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChageHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            onChange={DateChageHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
