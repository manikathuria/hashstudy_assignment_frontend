import { Text, Card } from '@nextui-org/react';
import React from 'react';

const About = () => {
    return (
        <Card css = {{marginTop: "20px"}}>
            <Card.Body css = {{padding:"0 20px"}}>
            <Text h2 b>
                About 
            </Text>   
            <Text h4 b>
                Tech Stack
            </Text>
            <Text>
                Frontend : Next.js 
                Backend : Node.js / Express.js
                Database : MongoDB
            </Text>
            <Text h4 b>
                Assumptions: 
            </Text>         
            <Text>
                1. No login functionality so only name is getting saved along with ticket booking otherwise as per the auth, user id should have been saved
                2. Database structure : Seats Schema with 3 parameters - booked_by, is_booked, seat_id (other than mongo's default id)
            </Text>
            <Text h4 b>
                Improvements: 
            </Text>
            <Text>
                1. Better error handling in frontend, but for now I kept it pretty simple.
                2. Unit test cases in backend
            </Text>
            </Card.Body>
        </Card>
    );
};

export default About;