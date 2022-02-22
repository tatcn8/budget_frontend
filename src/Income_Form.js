import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'
import axios from "axios";


const Income_Form = () =>{
    const initialState = ('')
    const [ incomeState, setIncomeState ] = useState(initialState)

  
    const handleChange = (e) =>{
        setIncomeState({...incomeState, [e.target.id]: e.target.value})
        console.log(incomeState)
    }

    const handleSubmit = () =>{
        axios({
            method: 'post',
            url: 'http://localhost:8000/incomes',
            data: incomeState
        })
        window.location.reload()
    }

    return(
        <>
        <Col xs='6'>
        <Form>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label
             className="me-sm-2"
            >
            Month
          </Label>
          <Input
            id="Month"
            type="month"
            placeholder="Enter Desired Month..."
            onChange={handleChange}
          />
        </FormGroup>
         <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Income 
        </Label>
        <Input
          id="Income"
          placeholder="Income..."
          type="Income"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Income_2
        </Label>
        <Input
          id="Income_2"
          type = "Income_2"
          placeholder="Other Income..."
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Side_Hustle 
        </Label>
        <Input
          id="Side_Hustle"
          type='Side_Hustle'
          name="password"
          placeholder="Other Income.."
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
         Side_Hustle_2
        </Label>
        <Input
          id="Side_Hustle_2"
          type="Side_Hustle_2"
          placeholder="Any Other Income..."
          onChange={handleChange}
        />
        </FormGroup>
        <Button color = 'success'
        onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </Col>
        </>
    )
}

export default Income_Form