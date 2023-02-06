import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Container, Card, Row, Col, Text, Button } from "@nextui-org/react";
import Seat from './Seat';
import { getBookedSeats } from '@/services/SeatsService'
import { useMemo } from 'react';
import { useEffect } from 'react';

const Seats = (props) => {
    const [totalSeats, setTotalSeats] = useState(props.totalSeats);
    // const totalSeats = [
    //     {
    //         seat_id: "1",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "2",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "3",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "4",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "5",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "6",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "7",
    //         is_booked: true,
    //         booked_by: "",
    //         is_available: false
    //     },
    //     {
    //         seat_id: "8",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    //     {
    //         seat_id: "9",
    //         is_booked: true,
    //         booked_by: "",
    //         is_available: false
    //     },
    //     {
    //         seat_id: "10",
    //         is_booked: false,
    //         booked_by: "",
    //         is_available: true
    //     },
    // ]
    const [seatRows, setSeatRows] = useState([]);
    const updateStates = async () => {
        let totalSeatsRes = await getBookedSeats({});
        await setTotalSeats(totalSeatsRes.data.data);
        console.log("total seats", totalSeats);
        let rows = [...Array(Math.ceil(totalSeatsRes.data.data.length / 7))]; 
        let arr = rows.map((row, idx) => totalSeatsRes.data.data.slice(idx * 7, idx * 7 + 7));
        await setSeatRows(arr);
        console.log("row ", rows, "seat rows", seatRows); 
    };
    useLayoutEffect(() => {
        updateStates();      
    }, [props.key]  )
    
    // (async () => {


    // })();

    return (
        <Container fluid css={{ marginTop: "20px", marginBottom:"20px", overflowX: "auto" }} >
            <Row>
                <Col>
                    <Text h2 b justify="center" align="center">Seats</Text>
                </Col>
            </Row>
            {
                seatRows.map((row, idx) => (
                    <Row justify='center' align='center' css={{ marginTop: "10px"}}>
                        {
                            row.map((seat, index) => {
                                if (seat.is_booked && seat.booked_by == props.username) {
                                    return (
                                        <Seat disabled="false" selected={true} id={seat.seat_id}></Seat>
                                    )
                                } else if (seat.is_booked && seat.booked_by !== props.username) {
                                    return (
                                        <Seat disabled="false" selected={false} id={seat.seat_id}></Seat>
                                    )
                                } else {
                                    return (
                                        <Seat disabled="true" id={seat.seat_id}></Seat>
                                    )
                                }
                            })
                        }
                    </Row>
                ))
            }
        </Container>
    );
};

export default Seats;