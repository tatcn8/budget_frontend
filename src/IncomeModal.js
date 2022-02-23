import React, { useState } from "react";
import {Form, FormGroup, Label, Input, Button, Modal, ModalBody, ModalHeader} from 'reactstrap'
import axios from "axios";

const IncomeModal = () => {
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
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)
    return(
        <>
        <Button
color="success"
onClick={() => setModal(!modal)}
>
Click to Input Income
</Button>
<Modal
isOpen={modal}>
<ModalHeader toggle={toggle} >
  Input numbers only (no dollars signs or letters)
</ModalHeader>
<ModalBody className='text-center'>
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
</ModalBody>
</Modal>
        </>
    )
}

export default IncomeModal