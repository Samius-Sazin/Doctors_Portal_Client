import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function ShowBookings(props) {
    const { name, time, availableSpace, cost } = props?.booking;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24, fontWeight: "500", color: "#19d3ae", my: 0 }} gutterBottom>{name}</Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: "500", my: 1 }} gutterBottom>{time}</Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: "500", my: 1 }} gutterBottom>Cost: ${cost}</Typography>
                    <Typography sx={{ mb: 2 }} color="text.secondary">{availableSpace}</Typography>
                    <Button onClick={() => props?.handleBookAppoinmentButtonOpen(props?.booking)} variant='contained' sx={{ backgroundColor: "#19d3ae", color: "white" }}>Book Appointment</Button>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </Grid>
    )
}

export default ShowBookings