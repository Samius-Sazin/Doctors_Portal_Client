import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment.png';

function AppoinmentBanner() {
    const background_image = {
        // background: `url(${bg})`,
        backgroundImage: `url(${bg})`,
    }

    return (
        <div style={background_image}>
            <Container sx={{ flexGrow: 1, mt: 20 }}>
                <Grid container spacing={{ xs: 0, md: 2 }}>
                    <Grid item xs={12} md={6} sx={{ display:"flex", justifyContent:"center", }}>
                        <img
                            style={{ width: "600px", marginTop: "-150px" }}
                            src={doctor}
                            alt="doctor" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", textAlign:"left", px: '26px', py: '10px' }}>
                        <Box>
                            <Typography sx={{ mb: 2 }} variant="h6" color="#19d3ae">Appoinment</Typography>
                            <Typography sx={{ mb: 2, color: "white" }} variant="h4">Make an appoinment today</Typography>
                            <Typography sx={{ mb: 3, color: "white" }} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</Typography>
                            <Button sx={{ backgroundColor: "#19d3ae" }} variant="contained">Get Started</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AppoinmentBanner
