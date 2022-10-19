import React, { useState } from 'react';

import "./ExpenseItem.css";
import Card from '../UI/Card'; 
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {  
  //acá está usando array destructuring, el 1er elem de use state es el current value
  //y el 2do valor que devuelve useState es una función para updatear el valor del 1er elem
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem being evaluated by React N times per component created");
  
  const clickHandler = () => {
    setTitle('Updated title!');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;