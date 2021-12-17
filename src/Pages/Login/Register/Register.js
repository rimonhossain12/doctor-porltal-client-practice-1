import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Password did not match');
        }
        alert('submit is submit');
        e.preventDefault();
    }
    // password check

    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mb: 5 }} variant="button" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            onChange={handleOnChange}
                            type="password"
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
                    </form>
                    <NavLink style={{ textDecoration: 'none ' }} to="/login">
                        <Button
                            variant="text"
                            sx={{ width: '75%', m: 1 }}
                        >Already Register ? Please Login</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;