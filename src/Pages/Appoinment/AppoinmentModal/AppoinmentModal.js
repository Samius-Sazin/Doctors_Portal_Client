import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../../Hooks/useAuth';
import Loading from '../../Shared/Loading/Loading'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 30,
    p: 4,
};


function AppoinmentModal({ open, booking, handleBookAppoinmentButtonClose, date, setAppointmentStatus }) {
    const { name, time } = booking;
    const { user } = useAuth();

    const [openLoading, setOpenLoading] = React.useState(false);
    const handleOpen = () => {
        setOpenLoading(true);
    };
    const handleClose = () => {
        setOpenLoading(false);
    };

    const initialAppointmentInfo = {
        patientName: user.displayName,
        patientEmail: user.email,
        patientPhone: "",
    }
    const [appoinmentInfo, setAppoinmentInfo] = useState(initialAppointmentInfo);

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newAppoinmentInfo = { ...appoinmentInfo };
        newAppoinmentInfo[name] = value;
        setAppoinmentInfo(newAppoinmentInfo);
    }

    const handleSubmit = e => {
        handleOpen();

        //Collect Data From Form...
        const finalAppointmentInfo = {
            ...appoinmentInfo,
            serviceName: name,
            slot: time,
            date: date?.toLocaleDateString(),
        }

        fetch('http://localhost:5000/appointments', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finalAppointmentInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setAppointmentStatus({ success: true, failed: false });
                    handleClose();
                }
                else {
                    setAppointmentStatus({ success: false, failed: true });
                    handleClose();
                }
            })

        handleBookAppoinmentButtonClose();
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleBookAppoinmentButtonClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "#19d3ae", fontWeight: "600" }}> {name} </Typography>
                        <CloseIcon onClick={handleBookAppoinmentButtonClose} sx={{ cursor: "pointer", backgroundColor: "#e6e6e6", p: 1, borderRadius: "100%", ":hover": { backgroundColor: "gray" } }} />
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <TextField disabled id="outlined-size-small" defaultValue={date?.toDateString()} size="small" sx={{ mt: 3, mb: 2, width: "100%", backgroundColor: '#e6e6e6' }} />

                        <TextField disabled id="outlined-size-small" defaultValue={time} size="small" sx={{ mb: 2, width: "100%", backgroundColor: '#e6e6e6' }} />

                        <TextField disabled id="outlined-size-small" defaultValue={user.email} size="small" sx={{ mb: 2, width: "100%", backgroundColor: '#e6e6e6' }} />

                        <TextField onBlur={handleOnBlur} type='text' id="outlined-size-small" defaultValue={user.displayName} size="small" name='patientName' sx={{ mb: 2, width: "100%", backgroundColor: '#e6e6e6' }} />

                        <TextField onBlur={handleOnBlur} type='number' id="outlined-size-small" placeholder="Phone Number" size="small" name='patientPhone' sx={{ mb: 2, width: "100%" }} />

                        <Button type='submit' variant='contained' sx={{ backgroundColor: "#19d3ae", color: "white", width: "100%" }}>Submit</Button>
                    </form>
                </Box>
            </Modal>
            <Loading open={openLoading} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
    )
}

export default AppoinmentModal
