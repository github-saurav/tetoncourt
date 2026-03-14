import React from 'react'
import { HomeContactWrapperStyled } from '../../styles/styledComponents/HomeContactWrapperStyled'
import { Box, Container, Grid, Typography } from '@mui/material'
import { assets } from '../../json/assets'
import CustomButton from '../../ui/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const HomeContact = () => {
    const navigate = useNavigate();
  return (
    <HomeContactWrapperStyled className='cmn_gap'>
        <Container fixed>
            <Grid container columnSpacing={10} rowSpacing={4} alignItems="center">
                <Grid item md={6} xs={12} className='homeContactImage' data-aos="zoom-in">
                    <figure>
                        <img src={assets.homeContact} alt="Home Contact" />
                    </figure>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box className="cmn_head">
                        <Typography variant='h2'>Contact Us</Typography>
                    </Box>
                    <Typography variant='body1'>
                        Trail timing, pets, late arrival? Let’s sort it out before you arrive. 
                    </Typography>
                    <CustomButton onClick={() => navigate("/contact-us")}>
                        CONNECT WITH US
                    </CustomButton>
                </Grid>
            </Grid>
        </Container>
    </HomeContactWrapperStyled>
  )
}

export default HomeContact