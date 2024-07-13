import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        image: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        image: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        image: whitening
    }
]

function Services() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography
                        sx={{ textAlign: 'center', color:"#19d3ae", mb: 2, mt: 6}}
                        variant="h6"
                        component="div">Our Services</Typography>

                    <Typography
                        sx={{ textAlign: 'center', fontWeight:'light', mb: 6 }}
                        variant="h4"
                        component="div">Services We Provide</Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service service={service} key={service.name} />)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Services
