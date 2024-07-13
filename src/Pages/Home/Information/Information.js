import { Box, Container, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';

function Information() {
    return (
        <div style={{}}>
            <Container sx={{ flexGrow: 1, color: "white" }}>
                <Grid container spacing={3} sx={{ my: { xs: 5, md: 0, sm: 0 }}}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ borderRadius: '12px', backgroundColor: "#19d3ae", px: '20px', py: "18px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AccessTimeIcon sx={{ fontSize: "70px", color: 'white', mr: "8px" }} />
                            <Box>
                                <Typography sx={{ fontWeight: '500' }}>Opening Hours</Typography>
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}>Saturday to Thursday from 9 AM to 4 PM. (24/7 service available online)</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{  borderRadius: '12px', backgroundColor: "#3a4256", px: '20px', py: "18px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LocationOnIcon sx={{ fontSize: "70px", color: 'white', mr: "8px" }} />
                            <Box>
                                <Typography sx={{ fontWeight: '500' }}>Visit Our Location</Typography>
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}>Brooklyn, NY 10036, United States</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ borderRadius: '12px', backgroundColor: "#19d3ae", px: '20px', py: "18px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CallIcon sx={{ fontSize: "70px", color: 'white', mr: "8px" }} />
                            <Box>
                                <Typography sx={{ fontWeight: '500' }}>Contact Us Now</Typography>
                                <Typography sx={{ fontWeight: '300', fontSize: '14px' }}>+880 123 456789</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Information