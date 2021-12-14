import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10:05 AM - 11:30 AM",
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5:00 AM - 6:30 AM",
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "7:00 AM - 8:30 AM",
        space: 10
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "06:00 AM - 07:00 AM",
        space: 10
    },
    {
        id: 5,
        name: "Oral Surgery",
        time: "07:00 AM - 08:00 AM",
        space: 10
    },
]

const AvailableAppointment = ({ value }) => {
    return (
        <Container>
            <Typography variant="h6" sx={{ color: 'info.main'}}>
                <h2> Available Appointment on {value.toDateString()}</h2>
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    bookings.map(booking => <Booking 
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;