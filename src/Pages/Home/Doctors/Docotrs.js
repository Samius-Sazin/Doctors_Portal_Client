import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Doctor from '../Doctor/Doctor';

function Docotrs() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://doctors-portal-server-wg85.onrender.com/doctors')
            .then(response => response.json())
            .then(data => {
                setDoctors(data); console.log(data);
            })
    }, [])

    return (
        <Container sx={{ mt: 8, mb: 10 }}>
            <Typography
                sx={{ textAlign: 'center', color: "#19d3ae", mb: 2, mt: 6 }}
                variant="h6"
                component="div">Our Doctors</Typography>
            <Grid container rowSpacing={{ xs: 4, sm: 3, md: 4 }} columnSpacing={{ xs: 0, sm: 3, md: 4 }}>
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id} />)
                }
            </Grid>
        </Container>
    )
}

export default Docotrs
