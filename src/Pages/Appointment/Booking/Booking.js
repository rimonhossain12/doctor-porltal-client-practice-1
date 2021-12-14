import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';


const Booking = ({booking}) => {
    const {name,time,space} = booking
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography variant="h6" gutterBottom component="div" sx={{color:'info.main'}}>
                   {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} SPACE AVAILABLE
                </Typography>
                <Button variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
            
        </Grid>
    );
};

export default Booking;