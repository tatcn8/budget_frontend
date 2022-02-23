import React from "react";
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

const ExpenseCards = (props) =>{
    let { Month, Housing, Groceries, Water, Trash, Natural_Gas, Electric, Sewer, Fuel, Entertainment,
    Allowance, Retirement, Savings, Phone, Internet, Charitable_Giving, College_Savings } = props
    return(
        <>
             <Col xs ='3'>
           <Card>
             <CardBody>
                <CardTitle tag = "h5">
                Expenses for the month: {Month}
                 </CardTitle>
                 <CardText>
                Housing: {Housing}
                </CardText>
                <CardText>
                Groceries: {Groceries}
                </CardText>
                <CardText>
                Water: {Water}
                </CardText>
                <CardText>
                Trash: {Trash}
                </CardText>
                <CardText>
                Natural Gas: {Natural_Gas} 
                </CardText>
                <CardText>
                Electric: {Electric}
                </CardText>
                <CardText>
                Sewer: {Sewer}
                </CardText>
                <CardText>
                Fuel: {Fuel}
                </CardText>
                <CardText>
                Entertainment: {Entertainment}
                </CardText>
                <CardText>
                Allowance: {Allowance} 
                </CardText>
                <CardText>
                Retirement: {Retirement}
                </CardText>
                <CardText>
                Savings: {Savings}
                </CardText>
                <CardText>
                College Savings: {College_Savings}
                </CardText>
                <CardText>
                Phone: {Phone}
                </CardText>
                <CardText>
                Internet: {Internet}
                </CardText>
                <CardText>
                Charitable Giving: {Charitable_Giving} 
                </CardText>
                <CardText>
                Total Expenses: NEED TO ADD THIS
                </CardText>
             </CardBody>
            </Card>
            </Col>
        </>
    )
}

export default ExpenseCards