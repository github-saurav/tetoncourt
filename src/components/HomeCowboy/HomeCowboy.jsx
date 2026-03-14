import React from 'react'
import { Grid, Typography, Container, Box } from '@mui/material';
import { assets } from '../../json/assets';
import { HomeCowboyWrapperStyled } from '../../styles/styledComponents/HomeCowboyWrapperStyled';


const HomeCowboy = () => {
    return (
        <HomeCowboyWrapperStyled>
            <Container fixed>
                <Grid container columnSpacing={5} rowSpacing={4}>
                    <Grid item md={6} xs={12} data-aos="zoom-in">
                        <figure className='homeCowboyImg'>
                            <img src={assets.homeCowboy} width="100%" alt="" />
                        </figure>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box className="homeCowboyContent">
                            <Typography variant="body1">
                                Where the West Is Still Wide Open From trailheads to rodeos, from fishing rivers to alpine lakes,  this is country built for movement. We offer a comfortable place to rest between adventures.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </HomeCowboyWrapperStyled>
    )
}

export default HomeCowboy