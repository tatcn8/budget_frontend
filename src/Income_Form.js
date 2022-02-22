import React from "react";
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'


const Income_Form = () =>{
    return(
        <>
        <Col xs='6'>
        <Form>
         <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Income 
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Income..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Income 2..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Income 2..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Side Hustle 2..."
          type="password"
        />
        </FormGroup>
        <Button color = 'success'>
          Submit
        </Button>
      </Form>
      </Col>
        </>
    )
}

export default Income_Form