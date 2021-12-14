import { Typography } from '@mui/material';
import React from 'react';

const AvailableAppointment = ({ value }) => {
    return (
        <div>
            <Typography variant="h6" sx={{ color: 'info.main', mb: 2 }}>
                <h2> Available Appointment on: {value.toDateString()}</h2>
            </Typography>
        </div>
    );
};

export default AvailableAppointment;