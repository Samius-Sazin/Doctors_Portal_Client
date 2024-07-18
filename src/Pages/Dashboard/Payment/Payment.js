import { Box, Typography } from '@mui/material'
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PcXO42NhzexdETyIiGMgwwjLyINjNy2lrPZybqgNCa48jgQ0f7bvJhLzlNNO6it6EJNLyphKp4jxb6I0YDypcw300Y2DEHBJD');

function Payment() {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    const { patientName, patientEmail, serviceName, slot, date, cost } = appointment;

    useEffect(() => {
        fetch(`https://doctors-portal-server-wg85.onrender.com/appointments/${appointmentId}`)
            .then(response => response.json())
            .then(data => {
                setAppointment(data);
            })
    }, [appointmentId])


    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant='h6'>Name: {patientName}</Typography>
            <Typography variant='h6'>Email: {patientEmail}</Typography>
            <Typography variant='h6'>Service Name: {serviceName}</Typography>
            <Typography variant='h6'>Date: {date}</Typography>
            <Typography variant='h6'>Slot: {slot}</Typography>
            <Typography variant='h6'>Cost: ${cost}</Typography>

            {
                appointment?.cost &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
            }
        </Box>
    )
}

export default Payment
