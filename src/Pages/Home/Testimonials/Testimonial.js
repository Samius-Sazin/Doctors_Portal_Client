import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

function Testimonial(props) {
    const { name, location, image, details } = props.review;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, mt: 2 }} gutterBottom> {details} </Typography>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <img src={image} alt='img' style={{width:"60px", border:"3.5px solid #19d3ae", borderRadius:"100px", margin:"12px 16px"}}/>
                        <Box>
                            <Typography variant="h6" component="div"> {name} </Typography>
                            <Typography sx={{ fontSize: "14px" }} gutterBottom> {location} </Typography>
                        </Box>
                    </Box>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default Testimonial
