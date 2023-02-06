import React, { useState } from 'react';
import { Container, Card, Row, Col, Text, Button } from "@nextui-org/react";

const Seat = (props) => {

    if (props.disabled == "true") {
        return (
            <Button disabled color="primary"  size="xs" css={{margin: "0 10px"}}>{props.id}</Button>
        );
    } else {
        if (props.selected) {
            return (
                <Button color="primary"  size="xs" css={{margin: "0 10px"}} >{props.id}</Button>
            );
        } else {
            return (
                <Button color="primary" bordered  size="xs" css={{margin: "0 10px"}} >{props.id}</Button>
            );
        }
    }
};

export default Seat;