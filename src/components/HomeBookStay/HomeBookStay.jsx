import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CustomButton from '../../ui/CustomButton/CustomButton';
import { assets } from '../../json/assets';
import { HomeBookStayWrapperStyled } from '../../styles/styledComponents/HomeBookStayWrapperStyled';



const HomeBookStay = () => {
  return (
    <HomeBookStayWrapperStyled>
        <Box className="homeBookStay" style={{backgroundImage: `url(${assets.image9})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <Container fixed>
                <Box className="homeBookStayInner">
                    <Typography variant="h2">BOOK YOUR NEXT STAY TODAY</Typography>
                    <CustomButton buttonColor="black"  onClick={() => window.open('https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846', '_blank')}>
                        BOOK NOW
                    </CustomButton>
                </Box>
            </Container>
        </Box>
    </HomeBookStayWrapperStyled>
  )
}

export default HomeBookStay