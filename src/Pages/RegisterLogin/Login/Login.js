import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import login from '../../../images/login.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';
import Navigation from '../../Shared/Navigation/Navigation';

function Login() {
  const [open, setOpen] = React.useState(false);
  const { setUser, setError, signinWithGoogle, loginWithEmailAndPassword, setIsLoading, sendUserDataToDB } = useAuth();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[name] = value;
    setLoginData(newLoginData);
  }

  const handleSubmit = e => {
    handleOpen();

    loginWithEmailAndPassword(loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        // save all data to DATABASE MongoDB
        sendUserDataToDB(user, 'PUT');

        navigate(location?.state?.from?.pathname || '/home');
      })
      .catch((error) => {
        handleClose();
        setError(error.message);
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    e.preventDefault();
  }

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        // save all data to DATABASE MongoDB
        sendUserDataToDB(user, 'PUT');

        navigate(location?.state?.from?.pathname || '/home');
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
          <Grid container rowSpacing={{ xs: 8, sm: 8, md: 0 }}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box sx={{ width: "60%" }}>
                <Typography sx={{ textAlign: "center", mb: 3, fontSize: "26px", fontWeight: "600", color: "#19d3ae", textDecoration: "underline", textUnderlineOffset: "6px", textDecorationThickness: "3px" }}>Login</Typography>

                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{ width: "100%", marginBottom: '10px' }}
                    required id="standard-search"
                    label="Username or Email"
                    type="text"
                    size="small"
                    name="email"
                    onChange={handleOnChange}
                  /> <br />

                  <TextField
                    sx={{ width: "100%", marginBottom: '5px' }}
                    required id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    name="password"
                    onChange={handleOnChange}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href='https://www.facebook.com/' sx={{ textDecoration: "none", fontSize: "15px", color: "#19d3ae", fontWeight: "520", ":hover": { color: "red" } }}>Forgot password?</Link>
                  </Box>

                  <Button type="submit" variant='contained' sx={{ boxShadow: 3, color: "white", backgroundColor: "#19d3ae", width: "100%", my: 2 }}>Login</Button>
                </form>

                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontSize: "15px" }}>Don't have an account?</Typography>
                  <NavLink to='/register' style={{ paddingBottom: "3px", marginLeft: '8px', textDecoration: "none", fontSize: "15px", color: "#19d3ae", fontWeight: "520" }}>Register</NavLink>
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
                  <Typography>Login with Google</Typography>
                </Button>

                <Button variant='contained' sx={{ boxShadow: 5, display: 'flex', justifyContent: 'space-around', color: "black", backgroundColor: "white", width: "100%", my: 2, ":hover": { backgroundColor: "lightgray" } }}>
                  <FacebookIcon />
                  <Typography>Login with Facebook</Typography>
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <img style={{ width: '90%' }} src={login} alt='img' />
            </Grid>
          </Grid>
        </Box>

        <Loading open={open} handleOpen={handleOpen} handleClose={handleClose} />
      </Container>
    </>
  )
}

export default Login
