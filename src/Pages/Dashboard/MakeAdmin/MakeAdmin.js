import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Loading from '../../Shared/Loading/Loading';
import useAuth from '../../../Hooks/useAuth';

function MakeAdmin() {
    const { token } = useAuth();
    const [makeAdminStatus, setMakeAdminStatus] = useState({ success: false, failed: false });
    const [admin, setAdmin] = useState({});

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleOnBlur = e => {
        const newAdmin = {};
        newAdmin['email'] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = e => {
        handleOpen();
        
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(response => response.json())
            .then(data => {
                if (data?.modifiedCount === 1) {
                    //upsert successful
                    handleClose();
                    setMakeAdminStatus({ success: true, failed: false });
                }
                else {
                    //already esist/no user found with that email
                    handleClose();
                    setMakeAdminStatus({ success: false, failed: true });
                }
            })

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
                    makeAdminStatus.success
                        ?
                        <Alert sx={{ width: { xs: "60%", sm: "80%", md: "40%" } }} severity="success">Admin assigned successfully.</Alert>
                        :
                        <Box></Box>
                }

                {
                    makeAdminStatus.failed
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

export default MakeAdmin
