import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



const Service = (props) => {
    const {name,img,description} = props.service;

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: '0', boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    image={img}
                    style={{ height: '110', width: 'auto', margin: '0 auto' }}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;