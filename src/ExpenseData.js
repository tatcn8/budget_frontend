import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseCards from "./ExpenseCards";


const ExpenseData = () =>{
    const [ expenseData, setExpenseData ] = useState()

    useEffect(() => {
        const url = `http://localhost:8000/budgets`;

        axios.get(url)
        .then(res => {
            setExpenseData(res.data)
            console.log(res.data)
        })

    }, [])
    return(
        <>
             {expenseData ? expenseData.map((expense) =>{
                    return(
                        <ExpenseCards key={expense.id} {...expense}/>
                     )
                }):console.log("NO DATA")
            }
        </>
    )
}

export default ExpenseData