import { Box, Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../Hooks/useAuth'

function Appoinments({ appointmentDate }) {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`https://doctors-portal-server-wg85.onrender.com/appointments?patientEmail=${user.email}&date=${appointmentDate?.toLocaleDateString()}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setAppointments(data);
                }
            })
    }, [appointmentDate, user.email])

    return (
        <Box sx={{ minWidth: "387px" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb:3 }}>
                <Typography variant='h6' sx={{ color: "#19d3ae" }}>Appointments - {appointments.length > 10 ? appointments.length : "0"+appointments.length}</Typography>
                <Typography>{appointmentDate.toLocaleDateString()}</Typography>
            </Box>

            <Divider />

            <TableContainer>
                <Table aria-label="appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ color: "#19d3ae" }}>Patient Name</TableCell>
                            <TableCell align="center" sx={{ color: "#19d3ae" }}>Service Name</TableCell>
                            <TableCell align="center" sx={{ color: "#19d3ae" }}>Slot</TableCell>
                            <TableCell align="center" sx={{ color: "#19d3ae" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {appointments.map(appointment => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">{appointment.patientName}</TableCell>
                                <TableCell align="center">{appointment.serviceName}</TableCell>
                                <TableCell align="center">{appointment.slot}</TableCell>
                                <TableCell align="center"><Button variant='contained'>Not Visited</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Appoinments
