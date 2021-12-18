import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
        }
        registerUser(loginData.email, loginData.password);
        alert('button is click');
        console.log(loginData, 'user', user);
        e.preventDefault();
    }
    // password check

    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mb: 5 }} variant="button" gutterBottom> Register</Typography>
                    {
                        !isLoading && < form onSubmit={handleOnSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                onChange={handleOnChange}
                                label="your password"
                                name="password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                onChange={handleOnChange}
                                type="password"
                                label="retype your password"
                                name="password2"
                                variant="standard"
                            />
                            <Button
                                variant="contained"
                                type="Submit"
                                sx={{ width: '75%', m: 1 }}
                            >Register</Button>
                            <NavLink to="/login" style={{ textDecoration: 'none ' }}>

                                <Button
                                    variant="text"
                                    sx={{ width: '75%', m: 1 }}
                                >Already Register? Please Login</Button>
                            </NavLink>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Create Successfully!</Alert>}
                </Grid>
            </Grid>
        </Box >
    );
};

export default Register;