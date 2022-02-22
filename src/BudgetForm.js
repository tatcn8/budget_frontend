import React from "react";
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'

const Budget_Form = () =>{
    return(
    <>  
        <Col xs = '4'>
        <Form inline>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label
             className="me-sm-2"
             for="exampleEmail"
            >
              Housing
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Mortgage/Rent..."
            type="email"
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
          id="examplePassword"
          name="password"
          placeholder="Groceries..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Water..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Trash..."
          type="password"
        />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label
          className="me-sm-2"
          for="examplePassword"
          >
          Natural Gas
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Natural Gas..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Boogie Woogie..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Sewer Bill..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Fuel (gas/diesel)..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Entertainment..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Allowance (clothes, fun, etc)..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Retirement Savings..."
          type="password"
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
          id="examplePassword"
          name="password"
          placeholder="Short Term Savings (vacation fund, boat fund, etc)..."
          type="password"
        />
        </FormGroup>
        <Button color = 'danger'>
          Submit
        </Button>
      </Form>
      </Col>
    </>
    )
}

export default Budget_Form