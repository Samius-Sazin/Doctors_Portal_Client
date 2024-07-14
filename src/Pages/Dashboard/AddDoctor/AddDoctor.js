import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Loading from '../../Shared/Loading/Loading';
import PhotoIcon from '@mui/icons-material/Photo';


function AddDoctor() {
    const [addDoctorStatus, setAddDoctorStatus] = useState({ success: false, failed: false });
    const [imageStatus, setImageStatus] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = e => {
        if (!image) {
            setImageStatus(false);
            e.preventDefault();
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('image', image);

        fetch('https://doctors-portal-server-wg85.onrender.com/doctors', {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setAddDoctorStatus({ success: true, failed: false });
                }
                else {
                    setAddDoctorStatus({ success: false, failed: true });
                }
            })

        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 6, mb: 1 }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "30%" }}>
                    <TextField onBlur={e => setName(e.target.value)} required id="outlined-size-small" defaultValue="" type="text" placeholder='Name' size="small" name="name" sx={{ m: 1 }} />
                    <TextField onBlur={e => setEmail(e.target.value)} required id="outlined-size-small" defaultValue="" type="email" placeholder='Email' size="small" name="email" sx={{ m: 1 }} />
                    <TextField onBlur={e => setPhone(e.target.value)} required id="outlined-size-small" defaultValue="" type="number" placeholder='Phone Number' size="small" name="phone" sx={{ m: 1 }} />
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ color: "white", backgroundColor: "#19d3ae", m: 1 }}
                    > <PhotoIcon /> Upload File <input onChange={e => setImage(e.target.files[0])} accept='image/*' type="file" hidden /> </Button>
                    <Button type='submit' variant='contained' sx={{ color: "white", backgroundColor: "#19d3ae", m: 1 }}>Submit</Button>
                </form>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
                {
                    !imageStatus &&
                    <Alert sx={{ width: { xs: "70%", sm: "90%", md: "50%" } }} severity="error">Please select an image.</Alert>
                }

                {
                    addDoctorStatus.success &&
                    <Alert sx={{ width: { xs: "60%", sm: "80%", md: "40%" } }} severity="success">Doctor added successfully.</Alert>
                }

                {
                    addDoctorStatus.failed &&
                    <Alert sx={{ width: { xs: "70%", sm: "90%", md: "50%" } }} severity="error">Something went wrong.</Alert>
                }
            </Box>
            <Loading open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </>
    )
}

export default AddDoctor
