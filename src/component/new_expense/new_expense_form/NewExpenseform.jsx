import React, { useState } from "react";
import './NewExpenseform.css'

const NewExpenseform =(props)=>{
    const {save} =props;

    const [title , setTitle]=useState('');
    const [amount, setAmount]= useState('');
    let [date, setDate]=useState('');



    const onTitleChange = (event)=>{
        setTitle(event.target.value)
    } 
    const onAmountChange = (event)=>{
        setAmount(event.target.value)
    } 
    const onDateChange = (event)=>{
        setDate(event.target.value)
    } 

    const onSubmitHandler =(event)=>{
        event.preventDefault();
        const new_expense ={
            title,
            amount,
            date: new Date(date),
        }
        save(new_expense);

    }
    return(
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="new-expense__controls">

                <div className="new-expense__control">
                <label htmlFor="tut">Title</label>
                <input type="text" id="tut" name="tut" onChange={onTitleChange} value={title}/>
                </div>


                <div className="new-expense__control">
                     <label htmlFor="amt">Amount</label>
                <input type="number" id="amt" name="amt" min="0" max="1000" onChange={onAmountChange} value={amount}/>
                </div>


                <div className="new-expense__control"> 
                    <label htmlFor="dt">Date</label>
                 <input type="date" id="dt" name="dt"  onChange={onDateChange} value={date}/>
                 </div>


                 
                </div>
                <div className="new-expense__actions"> 
                 <button>Cancel</button>
                <button>AddExpense</button>
                </div>
            </form>

        </div>
    )
}
export default NewExpenseform;