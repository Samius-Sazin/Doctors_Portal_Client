import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

function Banner() {
    const background_image = {
        background: `url(${bg})`,
        height: '600px',
    }

    const handleGetAppointNow = () => {
        
    }

    return (
        <div>
            <Container style={background_image} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} sx={{ margin: "0px", height: "600px" }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: "left" }}>
                        <Box>
                            <Typography variant='h4' sx={{ fontWeight: "500" }}>Your New Smile Starts</Typography>
                            <Typography variant='h4' sx={{ fontWeight: "500", mb: 2 }}>Here</Typography>
                            <Typography sx={{ mb: 3, fontWeight: '400' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Typography>
                            <Button onClick={handleGetAppointNow} variant='contained' sx={{ backgroundColor: "#19d3ae", px: '17px', py: "7px" }}>Get Appoinment Now</Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ margin: "0px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <img
                            style={{width:"100%"}}
                            src={chair}
                            alt="chair" />
                        {/* <div style={{ height: '600px', width: '300px', backgroundColor: '#000000' }} /> */}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner
