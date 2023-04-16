import React from "react";
import NewExpenseform from "./new_expense_form/NewExpenseform";
import './NewExpense.css';
import {nanoid} from "nanoid";

const NewExpense =(props) =>{
    const {submitAction}=props;
    const onAddNewExpense =(expense)=>{
        const modified_expense ={
            ...expense,
            id: nanoid(),
        }
        submitAction(modified_expense);
    }
    return(
        <div className="new-expense">
            <NewExpenseform save={onAddNewExpense} />

        </div>
    )
}
export default NewExpense;