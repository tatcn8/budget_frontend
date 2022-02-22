import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'
import axios from "axios";

const Budget_Form = () =>{
    const initialState = ('')
    const [ itemState, setItemState ] = useState(initialState)

  
    const handleChange = (e) =>{
        setItemState({...itemState, [e.target.id]: e.target.value})
        console.log(typeof(itemState))
    }
    const handleSubmit = () =>{
        axios({
            method: 'post',
            url: 'http://localhost:8000/budgets',
            data: itemState
        })
        window.location.reload()
    }

    return(
    <>  
        <Col xs = '4'>
        <Form inline>
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
            >
              Housing
          </Label>
          <Input
            id="Housing"
            placeholder="Mortgage/Rent..."
            type="Housing"
            onChange={handleChange}
          />
          </FormGroup>
         <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Groceries
        </Label>
        <Input
          id="Groceries"
          name="password"
          placeholder="Groceries..."
          type="Groceries"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Water
        </Label>
        <Input
          id="Water"
          name="password"
          placeholder="Water..."
          type="Water"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Trash
        </Label>
        <Input
          id="Trash"
          name="password"
          placeholder="Trash..."
          type="Trash"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Natural_Gas
        </Label>
        <Input
          id="Natural_Gas"
          name="password"
          placeholder="Natural Gas..."
          type="Natural_Gas"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Electric
        </Label>
        <Input
          id="Electric"
          name="password"
          placeholder="Boogie Woogie..."
          type="Electric"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Sewer
        </Label>
        <Input
          id="Sewer"
          name="password"
          placeholder="Sewer Bill..."
          type="Sewer"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Fuel
        </Label>
        <Input
          id="Fuel"
          name="password"
          placeholder="Fuel (gas/diesel)..."
          type="Fuel"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Entertainment 
        </Label>
        <Input
          id="Entertainment"
          name="password"
          placeholder="Entertainment..."
          type="Entertainment"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Allowance 
        </Label>
        <Input
          id="Allowance"
          name="password"
          placeholder="Allowance (clothes, fun, etc)..."
          type="Allowance"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Retirement
        </Label>
        <Input
          id="Retirement"
          name="password"
          placeholder="Retirement Savings..."
          type="Retirement"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
         Savings
        </Label>
        <Input
          id="Savings"
          name="password"
          placeholder="Short Term Savings (vacation fund, boat fund, etc)..."
          type="Savings"
          onChange={handleChange}
        />
        </FormGroup>
        <Button color = 'danger'
        onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </Col>
    </>
    )
}

export default Budget_Form