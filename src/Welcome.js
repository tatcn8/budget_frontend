import React from "react";
import BudgetModal from "./BudgetModal";
import IncomeModal from "./IncomeModal";

const Welcome = () =>{
    return(
        <>
            <h1>
                Welcome to the budget app. 
            </h1>
            <h1>
                Get ready to start WINNING with MONEY.
            </h1>
            <BudgetModal/>
            {' '}
            <IncomeModal/>
        </>
    )
}

export default Welcome