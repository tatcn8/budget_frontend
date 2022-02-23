import React, { useState, useEffect } from "react";
import axios from "axios";
import IncomeCards from "./IncomeCards";


const IncomeData = () =>{
    const [ incomeData, setIncomeData ] = useState()

    useEffect(() => {
        const url = `http://localhost:8000/incomes`;

        axios.get(url)
        .then(res => {
            setIncomeData(res.data)
            console.log(res.data)
        })

    }, [])

    return(
        <>
            {incomeData ? incomeData.map((income) =>{
                    return(
                        <IncomeCards key={income.id} {...income}/>
                     )
                }):console.log("NO DATA")
            }
          
        </>
    )
}

export default IncomeData