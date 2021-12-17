import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import loginImg from '../../../images/login.png';
import { NavLink } from 'react-router-dom';

const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field,value);
}

const Login = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mb: 5 }} variant="button" gutterBottom>
                        Login
                    </Typography>
                    <form>
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
                            label="your email"
                            name="password"
                            variant="standard"
                        />
                        <Button
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                        >Login</Button>
                    </form>
                    <NavLink style={{textDecoration:'none'}} to="/register">
                        <Button
                            variant="text"
                            sx={{ width: '75%', m: 1 }}
                        >New User? Please Register</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={loginImg}
                        style={{ width: '75%' }}
                        alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Login;