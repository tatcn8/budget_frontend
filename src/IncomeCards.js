import React from "react";
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'



const IncomeCards = (props) =>{
    let { Month, Income, Income_2, Side_Hustle, Side_Hustle_2 } = props
    
    return(
        <>
        <Col xs ='3'>
           <Card>
             <CardBody>
                <CardTitle tag = "h5">
                Income for the month: {Month}
                 </CardTitle>
                 <CardText>
                Primary Income: {Income}
                </CardText>
                <CardText>
                Secondary income: {Income_2}
                </CardText>
                <CardText>
                Side income: {Side_Hustle}
                </CardText>
                <CardText>
                Other Side income: {Side_Hustle_2}
                </CardText>
                <CardText>
                Total Income: NEED TO MAKE THIS WORK 
                </CardText>
             </CardBody>
            </Card>
            </Col>
        </>
    )
}

export default IncomeCards