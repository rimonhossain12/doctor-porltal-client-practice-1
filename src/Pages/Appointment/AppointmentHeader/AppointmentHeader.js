import React from 'react';
import chair from '../../../images/chair.png';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';


const AppointmentHeader = ({value,setValue}) => {
    return (
        <div>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{fontWeight:600,mb:2,mt:2,color:'info.main'}}>
                            Appointment
                        </Typography>
                        <Calender
                            value={value}
                            setValue={setValue}
                        ></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;