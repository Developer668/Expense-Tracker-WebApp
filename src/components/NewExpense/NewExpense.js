import React, { useState } from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    const [isButton, setIsButton] = useState(true);
    //let displayElement = <button onClick={addExpenseHandler}>Add New Expense</button>;
    let displayElement;

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const addExpenseHandler = () => {
        setIsButton(false);
    }

    const changeToButtonHandler = (event) => {
        setIsButton(event);
    }

    if (isButton === true) {
        displayElement = <button onClick={addExpenseHandler}>Add New Expense</button>;
    } else {
        displayElement =  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onItsClicked={changeToButtonHandler}></ExpenseForm>;
    }

    return (
        <div className="new-expense">
            {displayElement}
            {/* <button onClick={addExpenseHandler}>Add New Expense</button>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onItsClicked={changeToButtonHandler}></ExpenseForm> */}
        </div>
    );
}

export default NewExpense;