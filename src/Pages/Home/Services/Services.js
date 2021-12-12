import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const services = [
    { name: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare libero, mattis volutpat lacus. In ut elit nisi. Aliquam et arcu at mauris condimentum maximus. Duis vulputate mattis egestas. Praesent imperdiet urna lectus, at lacinia justo facilisis ac. Proin vitae sem est. Aenean in magna pulvinar purus venenatis auctor in vel lacus. Phasellus sed interdum nisl. Pellentesque id urna in dui scelerisque ornare vitae sed nunc. In placerat at diam quis ornare. Suspendisse rhoncus ornare sem nec consequat. ', img: fluoride },

    { name: 'Cavity Filling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare libero, mattis volutpat lacus. In ut elit nisi. Aliquam et arcu at mauris condimentum maximus. Duis vulputate mattis egestas. Praesent imperdiet urna lectus, at lacinia justo facilisis ac. Proin vitae sem est. Aenean in magna pulvinar purus venenatis auctor in vel lacus. Phasellus sed interdum nisl. Pellentesque id urna in dui scelerisque ornare vitae sed nunc. In placerat at diam quis ornare. Suspendisse rhoncus ornare sem nec consequat.', img: cavity },
    { name: 'Teath Whitening', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare libero, mattis volutpat lacus. In ut elit nisi. Aliquam et arcu at mauris condimentum maximus. Duis vulputate mattis egestas. Praesent imperdiet urna lectus, at lacinia justo facilisis ac. Proin vitae sem est. Aenean in magna pulvinar purus venenatis auctor in vel lacus. Phasellus sed interdum nisl. Pellentesque id urna in dui scelerisque ornare vitae sed nunc. In placerat at diam quis ornare. Suspendisse rhoncus ornare sem nec consequat.', img: whitening }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>xs=2</Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;