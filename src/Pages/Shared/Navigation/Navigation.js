import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    // const handleLogOut = e => {
    //     logOut();
    // }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DOCTOR PORTAL
                        </Typography>

                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment">
                            Appointment
                        </NavLink>

                        {
                            user?.email ? <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">DashBoard</Button>
                                    </NavLink>
                                    <Button onClick={logOut} color="inherit">LogOut</Button>
                                </Box>
                            </NavLink> :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">LogIn</Button>
                                </NavLink>
                        }


                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;