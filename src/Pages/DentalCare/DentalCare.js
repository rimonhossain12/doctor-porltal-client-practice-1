import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import treatment from '../../images/treatment.png';
import { Button } from '@mui/material';




const DentalCare = () => {
    return (
        <div>
            <Container>
                <Box sx={{ width: '100%',my:5 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <img src={treatment} style={{height:'500px',width:'100%'}} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum et maxime sed veniam, inventore, facere praesentium numquam tempora dolor non officiis voluptatum, at itaque quia sint architecto cupiditate? Voluptatem odio voluptas ipsum illum modi. Quidem amet recusandae similique sequi quos vero minus cumque et enim nam perspiciatis numquam hic rerum doloremque, maiores excepturi ullam inventore quam aperiam. Quo maiores, neque saepe praesentium odit dignissimos. Quod corporis totam tempore possimus voluptates reiciendis sit, fuga eum nihil dolorem mollitia nisi. Laboriosam mollitia iusto quas et accusantium quos magni earum eaque, aperiam ullam corporis reiciendis facere quasi voluptatibus esse inventore autem possimus, atque eveniet molestiae deleniti dolorem, quod ipsum! Quas modi corrupti quisquam officiis ut quaerat voluptates, dolorum dolorem blanditiis non earum consectetur dicta laborum culpa ipsum, expedita totam deserunt hic unde labore ex repudiandae accusamus distinctio qui! Temporibus, dolorem possimus! Laborum quaerat corrupti accusamus accusantium, possimus quia ullam impedit odio distinctio.</p>
                            <Button variant="contained" style={{ backgroundColor: '#8CE6E8' }}>LEARN MORE</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default DentalCare;