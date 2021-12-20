import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import loginImg from '../../../images/login.png';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, singInWithGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDate = { ...loginData };
        newLoginDate[field] = value;
        setLoginData(newLoginDate);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        singInWithGoogle(location, history);
    }

    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mb: 5 }} variant="button" gutterBottom>
                        Login
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
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
                            <Button
                                variant="contained"
                                type="Submit"
                                sx={{ width: '75%', m: 1 }}
                            >Login</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button
                                    variant="text"
                                    sx={{ width: '75%', m: 1 }}
                                >New User? Please Register</Button>
                            </NavLink>
                        </form>
                    }
                    <p>-------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" type="Submit" sx={{ width: '75%', m: 1 }}>Sign In with Google</Button>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login Successfully!</Alert>

                    }
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