import React from 'react';
import Information from './booking/Information';
import Seats from './booking/Seats';
import { Modal, useModal, Button, Text } from "@nextui-org/react";

const Ticket = (props) => {
    return (
        <>  
            <Text b h5>User : {props.username}</Text>
            <Seats username={props.username} seats={props.seats} key = { props.username }/>
        </>
    );
};

export default Ticket;