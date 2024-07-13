import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import Calender from '../../Shared/Calender/Calender'
import Appoinments from '../Appointments/Appoinments'

function DashboardHome({ appointmentDate, setAppointmentDate }) {
  
  return (
    <Box>
      <Grid container spacing={{ xs: 3, sm: 3, md: 0 }}>
        <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper sx={{ height: "336px" }}>
            <Calender date={appointmentDate} setDate={setAppointmentDate} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper sx={{ p: 3 }}>
            <Appoinments appointmentDate={appointmentDate} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardHome
