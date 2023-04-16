import React from "react";
import Expenseitems from "../expenseitems/Expenseitems";
import './ExpenseList.css'
import { useState } from "react";
const ExpenseList =(props)=>{
    const[query,Setquery]=useState("");
    const {expenses={}}=props;

    if(expenses.length ===0){
        return(<h2>No expense found</h2>)
    }
    return(
     
        
        <><input type="text" onChange={(e) => Setquery(e.target.value)} /><div>
            {expenses.filter(each_expenses => each_expenses.title.toLowerCase().includes(query)).map((each_expenses) => {
                return (<Expenseitems
                    title={each_expenses.title}
                    amount={each_expenses.amount}
                    date={each_expenses.date}
                    key={each_expenses.id} />
                );

            })}


        </div></>
    )     
    
}
export default ExpenseList;