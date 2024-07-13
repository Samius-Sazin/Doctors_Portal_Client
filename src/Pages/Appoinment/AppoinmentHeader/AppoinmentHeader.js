import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Calender from '../../Shared/Calender/Calender';

function AppoinmentHeader({ date, setDate }) {

  return (
    <Container sx={{ background: `url(${bg})`, height: {xs:"800px", sm:"800px", md:"500px"}, flexGrow: 1, mb:10 }}>
      <Grid container rowSpacing={4} sx={{ margin: "0px", height: "500px" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
          <Box>
            <Typography variant='h4' sx={{ fontWeight: "600" }}>Appointment</Typography>
            <Calender date={date} setDate={setDate} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} sx={{ margin: "0px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
          <img
            style={{ width: "90%" }}
            src={chair}
            alt="chair" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppoinmentHeader
