import { Alert, Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import ShowBookings from '../ShowBookins/ShowBookings';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';

function AvailableAppoinments({ date }) {
    const bookings = [
        {
            name: "Teeth Orthodontics",
            time: "8:00 AM - 9:00 AM",
            availableSpace: "10 spaces available",
            cost: 99,
        },
        {
            name: "Cosmetic Dentistry",
            time: "8:00 AM - 9:00 AM",
            availableSpace: "10 spaces available",
            cost: 199,
        },
        {
            name: "Teeth Cleaning",
            time: "8:00 AM - 9:00 AM",
            availableSpace: "10 spaces available",
            cost: 499,
        },
        {
            name: "Teeth Orthodonticss",
            time: "8:00 AM - 9:00 AM",
            availableSpace: "10 spaces available",
            cost: 399,
        },
        {
            name: "Teeth Orthodontic",
            time: "8:00 AM - 9:00 AM",
            availableSpace: "10 spaces available",
            cost: 299,
        },
        {
            name: "Teeth Orthodonticsx",
            time: "8:00 AM - 9:00 AM",
            availableSpace: "10 spaces available",
            cost: 199,
        }
    ]

    const [appointmentStatus, setAppointmentStatus] = useState({ success: false, failed: false });
    const [booking, setBooking] = useState({});
    const [open, setOpen] = React.useState(false);

    const handleBookAppoinmentButtonOpen = booking => {
        setBooking(booking);
        setOpen(true);
    }
    const handleBookAppoinmentButtonClose = () => {
        setOpen(false);
    }

    return (
        <Container sx={{ textAlign: "center", my: 10 }}>
            <Typography variant='h5' sx={{ color: "#19d3ae", fontWeight: "600", mb: 3 }}>Available Service on {date?.toDateString()}</Typography>

            <Box sx={{display:'flex', justifyContent:'center', mb: 3}}>
                {
                    appointmentStatus.success
                        ?
                        <Alert sx={{ width: {xs:"60%", sm:"50%", md:"30%"} }} severity="success">Appointment booked successfully.</Alert>
                        :
                        <Box></Box>
                }

                {
                    appointmentStatus.failed
                        ?
                        <Alert severity="error">Appointment booking unsuccessful.</Alert>
                        :
                        <Box></Box>
                }
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {
                        bookings.map(booking => <ShowBookings booking={booking} handleBookAppoinmentButtonOpen={handleBookAppoinmentButtonOpen} key={booking?.name} />)
                    }
                </Grid>
            </Box>

            <AppoinmentModal open={open} booking={booking} setAppointmentStatus={setAppointmentStatus} handleBookAppoinmentButtonClose={handleBookAppoinmentButtonClose} date={date} />
        </Container>
    )
}

export default AvailableAppoinments
