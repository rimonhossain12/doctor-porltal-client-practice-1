import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

// about import for card section
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';



const services = [
    { name: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare libero, mattis volutpat lacus. In ut elit nisi. Aliquam et arcu at mauris condimentum maximus. Duis vulputate mattis egestas', img: fluoride },

    { name: 'Cavity Filling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare libero, mattis volutpat lacus. In ut elit nisi. Aliquam et arcu at mauris condimentum maximus. Duis vulputate mattis egestas', img: cavity },
    { name: 'Teath Whitening', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare libero, mattis volutpat lacus. In ut elit nisi. Aliquam et arcu at mauris condimentum maximus. Duis vulputate mattis egestas', img: whitening }
]

const Services = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" style={{ color:'#14CED3'}} sx={{ fontWeight: '500',m:3}}>
                    OUR SERVICE
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: '700',m:5 }} component="div">
                   Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                 {
                        services.map(service => <Service key={service.name}
                         service={service}
                     ></Service>)
                 }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;