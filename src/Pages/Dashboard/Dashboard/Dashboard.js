import * as React from 'react';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AddDoctor from '../AddDoctor/AddDoctor';
import AuthMiddlewareDashboard from '../../../Middleware/AuthMiddleware/AuthMiddlewareDashboard';

const drawerWidth = 200;

function Dashboard(props) {

    const { isAdmin } = useAuth();
    const [appointmentDate, setAppointmentDate] = React.useState(new Date());
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pt: 0 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Divider sx={{ mb: 2 }} />

                <ListItemButton>
                    <ListItemIcon> <DashboardIcon sx={{ color: "#19d3ae" }} /> </ListItemIcon>
                    <NavLink to='/dashboard' style={{ textDecoration: "none", color: "#19d3ae", fontSize: "16px" }}>Dashboard</NavLink>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon> <HomeIcon sx={{ color: "#19d3ae" }} /> </ListItemIcon>
                    <NavLink to='/home' style={{ textDecoration: "none", color: "#19d3ae", fontSize: "16px" }}>Home</NavLink>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon> <BookOnlineIcon sx={{ color: "#19d3ae" }} /> </ListItemIcon>
                    <NavLink to='/appoinment' style={{ textDecoration: "none", color: "#19d3ae", fontSize: "16px" }}>Appointments</NavLink>
                </ListItemButton>

                {
                    isAdmin &&
                    <Box>
                        <ListItemButton>
                            <ListItemIcon> <SupervisorAccountIcon sx={{ color: "#19d3ae" }} /> </ListItemIcon>
                            <NavLink to='/dashboard/make-admin' style={{ textDecoration: "none", color: "#19d3ae", fontSize: "16px" }}>Make Admin</NavLink>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon> <AddIcon sx={{ color: "#19d3ae" }} /> </ListItemIcon>
                            <NavLink to='/dashboard/add-doctor' style={{ textDecoration: "none", color: "#19d3ae", fontSize: "16px" }}>Add Doctor</NavLink>
                        </ListItemButton>
                    </Box>
                }
            </List>

            <Divider sx={{ mt: 2 }} />
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: { sm: `calc(100% - 200px)` }, ml: { sm: `${drawerWidth}px` }, }} >
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">Dashboard</Typography>
                </Toolbar>
            </AppBar>

            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{ keepMounted: true }}
                    sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }} >
                    {
                        drawer
                    }
                </Drawer>
                <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }} open >
                    {
                        drawer
                    }
                </Drawer>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path='/' element={<DashboardHome appointmentDate={appointmentDate} setAppointmentDate={setAppointmentDate} />} />
                        <Route element={<AuthMiddlewareDashboard />}>
                            <Route path='/make-admin' element={<MakeAdmin />} />
                            <Route path='/add-doctor' element={<AddDoctor />} />
                        </Route>
                    </Routes>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
