import React from 'react';
import { Container, Card, Row, Col, Text, Button } from "@nextui-org/react";

const Information = () => {
    return (
        <Container responsive fluid showIn="md">
            <Row gap={1} css={{marginTop: "20px"}}>
                <Col >
                    <Card size="md">
                        <Card.Body>
                            <Row justify="center" align="center">
                                <Col>
                                    <Button style={{cursor: "auto"}} color="primary" auto>
                                    </Button>
                                </Col>
                                <Col>
                                    <Text b >Selected</Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <Card.Body>
                            <Row justify="center" align="center">
                                <Col>
                                    <Button style={{cursor: "auto"}} bordered color="primary" auto>
                                    </Button>
                                </Col>
                                <Col>
                                    <Text b>Available</Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Body>
                            <Row justify="center" align="center">
                                <Col>
                                    <Button style={{cursor: "auto"}} disabled auto>
                                    </Button>
                                </Col>
                                <Col>
                                    <Text b>Unavailable</Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>        
    );
};

export default Information;