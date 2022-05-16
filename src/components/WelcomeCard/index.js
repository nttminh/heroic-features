import React from 'react'
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap'
import styles from './WelcomeCard.module.css'

function WelcomeCard() {
    return (
        <Row>
            <Col className='py-5'>
                <Card
                    body
                    className={`${styles.card} text-center my-2 border-0 bg-light rounded-3`}
                >
                    <CardTitle tag="h1" className='fw-bold pt-5'>
                        A warm welcome!
                    </CardTitle>
                    <CardText className='fs-4 px-5'>
                        Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                    </CardText>
                    <Button
                        color="primary"
                        size='lg'
                        className='d-inline-block mx-auto'
                    >
                        Call to action
                    </Button>
                </Card>
            </Col>
        </Row>
    )
}

export default WelcomeCard