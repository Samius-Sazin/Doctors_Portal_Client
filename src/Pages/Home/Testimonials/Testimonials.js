import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Testimonial from './Testimonial';

import people1 from '../../../images/people1.png';
import people2 from '../../../images/people2.png';
import people3 from '../../../images/people3.png';
import quote from '../../../images/quote.svg';

function Testimonials() {
    const reviews = [
        {
            name: "Winson Herry",
            location: "California",
            image: people1,
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            name: "Billi Eilish",
            location: "Dhaka",
            image: people2,
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            name: "Amanda Johnson",
            location: "New York",
            image: people3,
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]

    return (
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Container sx={{ flexGrow: 1, position: "relative" }}>
                <Typography sx={{ color: "#19d3ae", fontSize: "18px", fontWeight: "700", mb: 1 }}>Testimonial</Typography>

                <Typography variant='h4' sx={{ fontWeight: "500", mb: 3 }}>What Our Patients Says</Typography>

                <img style={{ width: "100px", position: "absolute", top: "0px", right: "20px" }} src={quote} alt='quote' />

                <Grid container spacing={{ xs: 2, md: 2 }}>
                    {
                        reviews.map(review => <Testimonial review={review} key={review.name} />)
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Testimonials
