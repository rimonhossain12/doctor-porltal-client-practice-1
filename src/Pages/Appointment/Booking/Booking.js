import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, value, setBookingSuccess}) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5,mb:2 }}>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: 'info.main' }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid> 
            <BookingModal
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                booking={booking}
                value={value}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
           
        </>
    );
};

export default Booking;