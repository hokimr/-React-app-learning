import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // 이전에 데이터에 의존할 필요가 없을 경우 단일 State 사용도 괜찮은 방법
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [changeForm, setchangeForm] = useState(false);

  // 이전 데이터에 의존해야할 경우 prevState를 전달
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChageHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  }
  function AmountChageHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  }
  function DateChageHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  }

  function submitHeandler(e) {
    e.preventDefault();

    const newExpenseDate = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onNewExpenseDataImport(newExpenseDate);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }


  function NewAddHeandler() {
    setchangeForm(true);
  }

  function closeNewAddHeandler() {
    setchangeForm(false);
  }

  return (
    <form onSubmit={submitHeandler}>
      <div>
        {changeForm === false ? (
          <button type="button" onClick={NewAddHeandler}>
            Add New Expense
          </button>
        ) : (
          <div>
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
              <button type="button" onClick={closeNewAddHeandler}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default ExpenseForm;
