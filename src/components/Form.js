import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Container, Row, Col, Text, Card, Button, Input, Modal } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { Alert } from "reactstrap";
import Ticket from './Ticket';
import { bookSeat, getBookedSeats } from '@/services/SeatsService';
import { alertService } from './Alert/alert.service';
import Seats from './booking/Seats';

const Form = (props) => {
    const [seatsAlert, setSeatsAlert] = useState("");
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("");
    const [seats, setSeats] = useState("");
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const bookTicketConfirmationHandler = async () => {
        let bookSeatReponse = await bookSeat({
            username: name,
            seats_required: seats
        })
        if (bookSeatReponse.data.success) {
            // alertService.info(bookSeatReponse.message, {
            //     autoClose: true,
            //     keepAfterRouteChange: false
            // })
            props.get
            console.log("succes part")
            setBookingConfirmed(true);
            setVisible(false);
            
        } else {
            console.log("error part")

            setVisible(false);
        }
    }
    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const onSeatsChange = (e) => {
        setSeats(e.target.value);
    }
    const handler = () => {
        setVisible(true);
    };

    const closeHandler = () => {
        setVisible(false);
    };
        return (
            <Container
                display="flex"
                justify="center"
                css={{ marginTop: "50px" }}
            >
                {/* <Seats username={name} seats={seats} /> */}
                {
                    bookingConfirmed 
                    ?
                    <Ticket username={name} seats={seats} />
                    :
                    <Card css={{ mw: '800px', p: '20px' }}>
                    <Card.Body>
                        <Text b h2 justify='center' align='center'>Enter Details</Text>
                        <Row justify='center' align='center' css={{ marginTop: "20px" }}>
                            <Col>
                                <Input
                                    underlined
                                    labelPlaceholder="Name"
                                    color="default"
                                    size='sm'
                                    fullWidth
                                    type="text"
                                    onChange={onNameChange}
                                    value={name}
                                />
                            </Col>
                        </Row>
                        <Row justify='center' align='center' css={{ marginTop: "40px" }}>
                            <Col>
                                <Input
                                    underlined
                                    labelPlaceholder="Seats"
                                    color="default"
                                    size='sm'
                                    fullWidth
                                    type="text"
                                    helperText={seatsAlert}
                                    onChange={onSeatsChange}
                                    value={seats}
                                    onKeyPress={(event) => {
                                        if (!/[1-7]/.test(event.key)) {
                                            event.preventDefault();
                                            setSeatsAlert(seatsAlert => "Only 7 seats per user is allowed")
                                        } else {
                                            setSeatsAlert(seatsAlert => "")
                                        }
                                    }}
                                    min="1"
                                    max="7"
                                    minLength="1"
                                    maxLength="1"
                                />
                            </Col>
                        </Row>
                        <Row justify='center' align='center' css={{ marginTop: '20px' }}>
                            <Button color="primary" size="lg" auto shadow onPress={handler}>Confirm</Button>
                        </Row>
                    </Card.Body>

                </Card>
                }
                <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            <Text b size={18}>
                                Ticket Booking App
                            </Text>
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row justify="center" align="center">
                                <Text size={14}>Please confirm your following details</Text>
                            </Row>
                            <Row>
                                <Col>Name: </Col>
                                <Col><Text>{name}</Text></Col>
                            </Row>
                            <Row>
                                <Col>Seats: </Col>
                                <Col><Text>{seats}</Text></Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={closeHandler}>
                            <RxCross1 />
                        </Button>
                        <Button auto onPress={bookTicketConfirmationHandler}>
                            <TiTick />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    
};

export default Form;