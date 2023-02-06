import axios from "axios";

const bookSeat = async (request) => {
    try {   
        const response = await axios.post(`/api/seats/bookSeats`, request);
        return response;
    } catch (err) {
        console.error("error in booking seat: ", err);
        throw err;
    }
};

const getBookedSeats = async (request) => {
    try {
        const response = await axios.post(`/api/seats/getSeats`, request);
        return response;
    } catch (err) {
        console.error("error in get booked seats: ", err);
        throw err;
    }
};

module.exports = {
    bookSeat,
    getBookedSeats
}