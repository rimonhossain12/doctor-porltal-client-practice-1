import React from 'react';
import footer from '../../../images/footer-bg.png';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import './Footer.css';
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const footerBg = {
    background: `url(${footer})`,

}

const Footer = () => {
    return (
        <div style={footerBg}>
            <Box sx={{ flexGrow: 1, py: 2, mx: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                      
                        <ul>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Disease</li>
                            <li>Tooth Extraction</li>
                            <li>Check up</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography style={{ color: '#8DE6E6', fontWeight: '500' }} variant="h6" gutterBottom component="div">
                            Service
                        </Typography>
                        <ul>
                            <li>Emergency Dental Careq</li>
                            <li>Check Up</li>
                            <li>Treatment</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography style={{ color: '#8DE6E6', fontWeight: '500' }} variant="h6" gutterBottom component="div">
                           Oral Health
                        </Typography>
                        <ul>
                            <li>Emergency Dental Careq</li>
                            <li>Check Up</li>
                            <li>Treatment</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography style={{ color: '#8DE6E6', fontWeight: '500' }} variant="h6" gutterBottom component="div">
                            Our Address
                        </Typography>
                     <div id="icon-div">
                            <span> <FaFacebookF size={25} className="icon" /> </span>
                            <span> <FaGoogle size={25} className="icon"/> </span>
                            <span> <FaTwitter size={25} className="icon" /> </span>
                     </div>
                     <div id="phone-div">
                            <Typography style={{ color: '#8DE6E6', fontWeight: '500' }} variant="h6" gutterBottom component="div">
                              <p sx={{my:5}}>Call Now</p>
                            </Typography>

                            <Typography id="phon-style" style={{ color: '#8DE6E6', fontWeight: '500' }} variant="h6" gutterBottom component="div">
                                <p>+238340583058</p>
                            </Typography>

                     </div>
                      
                    </Grid>



                </Grid>
            </Box>
        </div>
    );
};

export default Footer;