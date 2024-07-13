import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import login from '../../../images/login.png'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';
import { getAuth, updateProfile } from 'firebase/auth';
import Navigation from '../../Shared/Navigation/Navigation';

function Register() {
    const [open, setOpen] = React.useState(false);

    const { setUser, setError, signupWithEmailAndPassword, setIsLoading, signinWithGoogle, sendUserDataToDB } = useAuth();
    const [registerInfo, setRegisterInfo] = useState({});
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newRegisterInfo = { ...registerInfo };
        newRegisterInfo[name] = value;
        setRegisterInfo(newRegisterInfo);
    }

    const handleSubmit = e => {
        /* Firebase Auth for update profile part only*/
        const auth = getAuth();

        //Open loading Modal
        handleOpen();

        if (registerInfo.password1 === registerInfo.password2) {
            signupWithEmailAndPassword(registerInfo.email, registerInfo.password1)
                .then((userCredential) => {
                    //registered successfully
                    const user = userCredential.user;
                    user.displayName = registerInfo.first_name + " " + registerInfo.last_name;
                    setUser(user);

                    // save all data to DATABASE MongoDB
                    sendUserDataToDB(user, 'POST');

                    //update user name/photourl/phonenumber to firebase
                    updateProfile(auth.currentUser, {
                        displayName: user.displayName, photoURL: user.photoURL, phoneNumber: user.phoneNumber
                    }).then(() => {
                        //updated
                    }).catch((error) => {
                        setError(error.message);
                    });

                    navigate('/');
                })
                .catch((error) => {
                    handleClose();
                    setError(error.message);
                    alert(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        else {
            alert("Password didn't match");
        }
        e.preventDefault();
    }

    const handleSigninWithGoogle = () => {
        signinWithGoogle()
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

                // save all data to DATABASE MongoDB
                sendUserDataToDB(user, 'PUT');

                navigate('/');
            })
            .catch((error) => {
                handleClose();
                setError(error.message);
                alert(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });

            
    }

    return (
        <>
            <Navigation />
            <Container sx={{ my: 5 }} >
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={{ xs: 8, sm: 0, md: 0 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ width: "60%" }}>
                                <Typography sx={{ textAlign: "center", mb: 3, fontSize: "26px", fontWeight: "600", color: "#19d3ae", textDecoration: "underline", textUnderlineOffset: "6px", textDecorationThickness: "3px" }}>Register</Typography>

                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        sx={{ width: "100%", marginBottom: '10px' }}
                                        required id="standard-search1"
                                        label="First Name"
                                        type="text"
                                        size="small"
                                        name="first_name"
                                        onBlur={handleOnChange}
                                    /> <br />

                                    <TextField
                                        sx={{ width: "100%", marginBottom: '10px' }}
                                        required id="standard-search2"
                                        label="Last Name"
                                        type="text"
                                        size="small"
                                        name="last_name"
                                        onBlur={handleOnChange}
                                    /> <br />

                                    <TextField
                                        sx={{ width: "100%", marginBottom: '10px' }}
                                        required id="standard-search3"
                                        label="Email"
                                        type="email"
                                        size="small"
                                        name="email"
                                        onBlur={handleOnChange}
                                    /> <br />

                                    <TextField
                                        sx={{ width: "100%", marginBottom: '5px' }}
                                        required id="standard-password-input1"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        name="password1"
                                        onBlur={handleOnChange}
                                    /> <br />

                                    <TextField
                                        sx={{ width: "100%", marginBottom: '5px' }}
                                        required id="standard-password-input2"
                                        label="Retype Password"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        name="password2"
                                        onBlur={handleOnChange}
                                    />

                                    <Button type="submit" variant='contained' sx={{ color: "white", backgroundColor: "#19d3ae", width: "100%", my: 2 }}>Register</Button>
                                </form>

                                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: "15px" }}>Already have an account?</Typography>
                                    <NavLink to='/login' style={{ paddingBottom: "3px", marginLeft: '8px', textDecoration: "none", fontSize: "15px", color: "#19d3ae", fontWeight: "520" }}>Login</NavLink>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ border: "1px solid darkgray", width: { xs: "100px", sm: "140px", md: "150px" } }}></Box>
                                        <Typography sx={{ mx: 2 }}>or</Typography>
                                        <Box sx={{ border: "1px solid darkgray", width: { xs: "100px", sm: "140px", md: "150px" } }}></Box>
                                    </Box>
                                </Box>


                                <Button onClick={handleSigninWithGoogle} variant='contained' sx={{ boxShadow: 3, display: 'flex', justifyContent: 'space-around', color: "white", backgroundColor: "#19d3ae", width: "100%", my: 2 }}>
                                    <GoogleIcon />
                                    <Typography>Register with Google</Typography>
                                </Button>

                                <Button variant='contained' sx={{ boxShadow: 5, display: 'flex', justifyContent: 'space-around', color: "black", backgroundColor: "white", width: "100%", my: 2, ":hover": { backgroundColor: "lightgray" } }}>
                                    <FacebookIcon />
                                    <Typography>Register with Facebook</Typography>
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                            <img style={{ width: '90%' }} src={login} alt='img' />
                        </Grid>
                    </Grid>
                </Box>

                <Loading open={open} handleOpen={handleOpen} handleClose={handleClose} />
            </Container>
        </>
    )
}

export default Register
