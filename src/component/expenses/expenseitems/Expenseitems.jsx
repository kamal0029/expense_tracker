import React, { useState } from "react";
import './Expenseitems.css'
import ExpenseDate from "../expense_date/ExpenseDate";

const Expenseitems =(props)=>{
    console.log('ExpenseItem',props);
    const{title,amount,date}=props;
    let [ksr,setKsr]=useState(title)
    const kagsr=()=>
    {
        setKsr('update')
    }
return(
    <ul className="expenses-list">
      <li>
    
  <div className="expense-item">
    <ExpenseDate date={date}/>
   
   <div className="expense-item__description">
    <h2>{ksr}</h2>
    <div className="expense-item__price">${amount}</div>
    
  </div>
  </div>
  </li>
</ul>




)
}

export default Expenseitems;