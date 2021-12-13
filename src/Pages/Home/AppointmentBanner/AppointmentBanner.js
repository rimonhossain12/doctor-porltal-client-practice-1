import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bannerBg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';


const appointmentBg = {
    background: `url(${bannerBg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={appointmentBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img src={doctor} style={{ width: 400, marginTop: '-110px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" component="div" style={{ color: '#45AAAA' }} sx={{ mb: 5 }} >
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }} style={{ color: 'white', mb: 5 }}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontWeight: 400, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut quos aliquid odit sapiente necessitatibus libero dolores laborum ex? Quae.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;