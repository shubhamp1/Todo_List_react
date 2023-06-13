import React, { useState } from "react";
import './ExpenseForm.css'
import ExpenseDate from "../Expenses/ExpenseDate";

const ExpenseForm = () => {
  const [title, setTitle] = useState(' ');
  const [amount, setAmount] = useState(' ');
  const [date, setDate] = useState(' ');

  const dateHandler = (e) => {
    setDate(e.target.value);
  }

  const amountHandler = (e) => {
    setAmount(e.target.value);
  }

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    console.log(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  } ;

  return(
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' onChange={titleHandler} value={title}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' onChange={amountHandler} value={amount} min='0.01' step='0.01'></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' value={date} onChange={dateHandler} min="2019-01-01" max='2022-12-31'></input>
        </div>
        <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
      </div>
    </form>
  );
} 

export default ExpenseForm