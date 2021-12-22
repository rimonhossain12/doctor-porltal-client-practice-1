import React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';
const DashBoarHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Appointments
                        date={date}
                    ></Appointments>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashBoarHome;