import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { assets } from '../../json/assets';
import CustomButton from '../../ui/CustomButton/CustomButton';
import {useNavigate} from "react-router-dom"
import { HomeCabinActivityStyled } from '../../styles/styledComponents/HomeCabinActivityStyled';

const HomeCabinActivity = () => {
    const navigate = useNavigate();
  return (
    <HomeCabinActivityStyled className='cmn_gap cmn_gap_btm'>
        <Grid container columnSpacing={2.5} rowSpacing={4}>
            <Grid item md={6} xs={12} data-aos="fade-right">
                <Box className="homeCabinActivityCard" style={{backgroundImage: `url(${assets.ourRooms})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <Typography variant="h2">Our Rooms</Typography>
                    <CustomButton buttonColor="black"   onClick={() => navigate('/our-rooms')}>
                        LEARN MORE
                    </CustomButton>
                </Box>
            </Grid>
            <Grid item md={6} xs={12} data-aos="fade-left">
                <Box className="homeCabinActivityCard" style={{backgroundImage: `url(${assets.Adventure})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <Typography variant="h2">Adventures</Typography >
                    <CustomButton buttonColor="black"  onClick={() => navigate('/local-adventures')} >
                        LEARN MORE
                    </CustomButton>
                </Box>
            </Grid>
        </Grid>
    </HomeCabinActivityStyled>
  )
}

export default HomeCabinActivity