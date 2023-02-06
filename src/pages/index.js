import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Layout } from '@/components/Layout'
import Information from '@/components/booking/Information'
import Seats from '@/components/booking/Seats'
import Form from '@/components/Form'
import { Container } from '@nextui-org/react'
import Ticket from '@/components/Ticket'
import { useState } from 'react'
import { useEffect } from 'react'
import { alertService } from '@/components/Alert/alert.service'
const inter = Inter({ subsets: ['latin'] })
import { bookSeat } from "@/services/SeatsService"

export default function Home() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(0);
  const getBookingConfirmation = (data) => {
    setBookingConfirmed(data.is_booked);
    setName(data.username);
    setSeats(data.seats);
    console.log("data: ", data);
  }

  return (
    <>
      <Head>
        <title>Ticket Booking App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form />
    </>
  )
}
