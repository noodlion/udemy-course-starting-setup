import React, { useState } from "react";

import "./ExpenseForm.css";

//no closing tags in the input because there will be no element between the opening and closing tag
const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredAmount, setEnteredAmount] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  //functions for the onChange events on the inputs, the argument name event is one selected by me
  const titleChangeHandler = (title) => {
    //setEnteredTitle(title.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: title.target.value
    })
  };

  const amountChangeHandler = (amount) => {
    //setEnteredAmount(amount.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: amount.target.value
    })
  };

  const dateChangeHandler = (date) => {
    //setEnteredDate(date.target.value);
    setUserInput({
      ...userInput,
      enteredDate: date.target.value
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          {/* -----------TITLE----------- */}
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          {/* -----------AMOUNT----------- */}
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        {/* -----------DATE----------- */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="02019-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
