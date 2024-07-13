import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Loading from '../../Shared/Loading/Loading';

function AddDoctor() {
    const [addDoctorStatus, setAddDoctorStatus] = useState({ success: false, failed: false });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOnBlur = e => {

    }

    const handleSubmit = e => {
        setAddDoctorStatus(false);
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 6, mb: 1 }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <TextField onBlur={handleOnBlur} required id="outlined-size-small" defaultValue="" type="email" placeholder='Email' size="small" name="email" sx={{ mr: 1, width: { xs: "60%", sm: "60%", md: "40%" } }} />
                    <Button type='submit' variant='contained' sx={{ color: "white", backgroundColor: "#19d3ae" }} >Submit</Button>
                </form>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
                {
                    addDoctorStatus.success
                        ?
                        <Alert sx={{ width: { xs: "60%", sm: "80%", md: "40%" } }} severity="success">Admin assigned successfully.</Alert>
                        :
                        <Box></Box>
                }

                {
                    addDoctorStatus.failed
                        ?
                        <Alert sx={{ width: { xs: "70%", sm: "90%", md: "50%" } }} severity="error">Unrecognized or invalid email address.</Alert>
                        :
                        <Box></Box>
                }
            </Box>
            <Loading open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </>
    )
}

export default AddDoctor
