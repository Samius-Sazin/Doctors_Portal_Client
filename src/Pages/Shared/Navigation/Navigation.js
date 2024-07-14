import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

function Navigation() {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        sx={{ mr: 2 }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    > <MenuIcon />
                    </IconButton>

                    <Typography
                        sx={{ flexGrow: 1 }}
                        variant="h6"
                        component="div"
                    >Doctors Portal</Typography>

                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/home">
                        <Button color="inherit">Home</Button>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/appoinment">
                        <Button color="inherit">Appoinment</Button>
                    </NavLink>


                    {/*                     
                    {
                        user?.email
                            ?
                            <>
                                <NavLink style={{ textDecoration: "none", color: "white" }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Typography>{user.email}</Typography>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </>
                            :
                            <NavLink style={{ textDecoration: "none", color: "white" }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    } 
                    */}
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation
