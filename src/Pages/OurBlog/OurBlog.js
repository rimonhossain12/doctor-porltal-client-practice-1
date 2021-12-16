import { Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FiArrowRight } from "react-icons/fi";
import CardMedia from '@mui/material/CardMedia';

import person1 from '../../images/people-1.png';
import person2 from '../../images/people-2.png';


const OurBlog = () => {
    return (
        <div>
            <Container sx={{ my: 5 }}>
                <Typography style={{ color: '#8DE6E6', fontWeight: '500' }} variant="h3" gutterBottom component="div">
                    OUR BLOG
                </Typography>
                <Typography style={{ fontWeight: '500' }} variant="h3" gutterBottom component="div">
                    From Our Blog News
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card style={{ backgroundColor: '#34BEBE', height: 340 }} sx={{ minWidth: 275 }}>
                                <CardContent sx={{ textAlign: 'left', m: 2 }}>
                                    <Typography style={{ color: 'white' }} sx={{ fontWeight: 'light' }} gutterBottom>
                                        Rashed Kabir
                                    </Typography>
                                    <Typography style={{ color: 'white' }} sx={{ fontWeight: 'light' }} gutterBottom>
                                        22 Aug 2018
                                    </Typography>
                                    <Typography variant="h6" style={{ color: 'white' }} sx={{ fontWeight: 'light' }} gutterBottom>
                                        Check at least a doctor in year for your teeth
                                    </Typography>
                                    <Typography style={{ color: 'white' }} sx={{ mb: 1.5 }} color="text.secondary">
                                        <FiArrowRight size={40} />
                                    </Typography>

                                </CardContent>
                                {/* <CardActions>
                                   
                                </CardActions> */}
                            </Card>
                        </Grid>
                        {/* second card */}

                        <Grid item xs={12} md={6} lg={4}>
                            <Card style={{ height: 340 }} sx={{ minWidth: 275 }}>
                                <CardContent sx={{ textAlign: 'left', m: 2 }}>
                                    <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                // height="140"
                                                style={{ borderRadius: '50%' }}
                                                image={person1}
                                                alt="green iguana"
                                            />
                                        </div>
                                        <div sx={{ m: 5 }}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>Dr Caudi</span>
                                            </Typography>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                <span style={{ marginLeft: '15px', color: 'gray', fontSize: '16px' }}>22 April 2019</span>
                                            </Typography>
                                        </div>
                                    </Box>

                                    <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                                        2 times of brush in a day can keep you healthy
                                    </Typography>

                                    <Typography variant="subtitle2" style={{ color: 'gray' }} gutterBottom>
                                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                        neque doloribus, cupiditate numquam dignissimos laborum.
                                    </Typography>


                                    <Typography style={{ color: 'white' }} sx={{ mb: 1.5 }} color="text.secondary">
                                        <FiArrowRight size={40} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* third cart */}
                        <Grid item xs={12} md={6} lg={4}>
                            <Card style={{ height: 340 }} sx={{ minWidth: 275 }}>
                                <CardContent sx={{ textAlign: 'left', m: 2 }}>
                                    <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                // height="140"
                                                style={{ borderRadius: '50%' }}
                                                image={person2}
                                                alt="green iguana"
                                            />
                                        </div>
                                        <div sx={{ m: 5 }}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>Dr Caudi</span>
                                            </Typography>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                <span style={{ marginLeft: '15px', color: 'gray', fontSize: '16px' }}>22 April 2019</span>
                                            </Typography>
                                        </div>
                                    </Box>

                                    <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                                        2 times of brush in a day can keep you healthy
                                    </Typography>

                                    <Typography variant="subtitle2" style={{ color: 'gray' }} gutterBottom>
                                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                        neque doloribus, cupiditate numquam dignissimos laborum.
                                    </Typography>


                                    <Typography style={{ color: 'white' }} sx={{ mb: 1.5 }} color="text.secondary">
                                        <FiArrowRight size={40} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default OurBlog;