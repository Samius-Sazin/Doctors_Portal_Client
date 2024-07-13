import { Box, Button, Container, Grid, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';
import React from 'react'

function TreatmentBanner() {
    return (
        <div>
            <Container sx={{ width: '100%', my:8 }}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            style={{ height: "350px" }}
                            src={treatment}
                            alt='Treatment' />
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", textAlign: "left", px: 5 }}>
                        <Box>
                            <Typography variant='h4' sx={{fontWeight:"500", mb: 2}}>Exceptional Dental Care, on Your Terms</Typography>
                            <Typography sx={{fontSize:"16px", fontWeight: "400", mb: 3}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</Typography>
                            <Button sx={{ backgroundColor: "#19d3ae" }} variant="contained">Get Started</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default TreatmentBanner
