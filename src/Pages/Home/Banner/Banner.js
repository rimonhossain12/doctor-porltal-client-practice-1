import React from 'react';
import bg from '../../../images/chair.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

// design for banner part

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter,TextAlign:'left'}} xs={12} md={6}>
                   <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 400, fontSize: 13, my: 5, color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam voluptas facilis autem impedit consequuntur magni sed est quae dolorum!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#8CE6E8' }}>GET Appointment</Button>
                   </Box>
                   
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={bg} style={{ width: 400 }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;