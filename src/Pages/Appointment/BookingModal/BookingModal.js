import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ openBooking, handleBookingClose, booking,value }) => {
    const {user} = useAuth();
    
    const { name, time } = booking;
    const handleOnSubmit = e => {
        alert('Buttons is click');
        e.preventDefault();
        handleBookingClose();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            disabled
                            style={{ width: '90%' }}
                            sx={{mb:2}}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            style={{ width: '90%' }}
                            sx={{mb:2}}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            style={{ width: '90%' }}
                            sx={{ mb: 2 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            style={{ width: '90%' }}
                            sx={{ mb: 2 }}
                            id="outlined-size-small"
                            defaultValue="phone number"
                            size="small"
                        />
                        <TextField
                        disabled
                            style={{ width: '90%' }}
                            sx={{ mb: 2 }}
                            id="outlined-size-small"
                            defaultValue={value.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;