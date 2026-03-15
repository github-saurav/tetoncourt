import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import ShoppingIcon from '../../ui/icons/ShoppingIcon';
import DiningIcon from '../../ui/icons/DiningIcon';
import { assets } from '../../json/assets';
import CameraIcon from '../../ui/icons/CameraIcon';
import BestPriceIcon from '../../ui/icons/BestPriceIcon';
import { HomeReasonToBookWrapperStyled } from '../../styles/styledComponents/HomeReasonToBookWrapperStyled';


export const ReasonToBookData = [
    {
        icon: <ShoppingIcon/>,
        title: "Best Rate, No Middleman",
        text: "When you book directly with us, you avoid third-party markups and receive straightforward pricing.",
        hasImage: assets.bestrateBg,
    },
    {
        icon: <DiningIcon/>,
        title: "Real-Time Availability",
        text: "Our website reflects the most accurate room availability.No delays. No mismatched inventory.",
        hasImage: assets.realtimeBg,
    },
    {
        icon: <CameraIcon/>,
        title: "Direct Communication",
        text: "Need early check-in? Arriving after a long hike? Traveling with a pet? Booking direct means you can speak with us directly, before and during your stay.",
        hasImage: assets.realirectommunicationBg,
    },
    {
        icon: <BestPriceIcon/>,
        title: "Flexible Assistance",
        text: "Changes happen, especially during mountain travel. Direct bookings allow us to assist more efficiently with adjustments, same-day reservations, and special requests.",
        hasImage: assets.felxibleassistantBg,
    }
]

const HomeReasonToBook = () => {
  return (
    <HomeReasonToBookWrapperStyled className='cmn_gap'>
        <Container fixed>
            <Box className="cmn_head">
                <Typography variant="h2">
                    Book Direct. Stay Confident.
                </Typography>
                <Typography variant="body1">The simplest way to secure your stay in Pinedale. Booking through our website or by phone ensures the most accurate availability and the best overall experience. </Typography>
            </Box>

            <Box className="bookReason">
                <Grid container columnSpacing={5} rowSpacing={4} className='bookReasonGrid'>
                    {
                        ReasonToBookData.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Box className={item.hasImage === null ? " bookReasonCard" : "bookReasonCard hasBackdrop"} style={ item.hasImage === null ? { backgroundColor: "#000",} : {backgroundImage: `url(${item.hasImage})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                    <Box className="bookReasonCardnIcon">
                                        {item.icon}
                                    </Box>
                                    <Box className="bookReasonCardText">
                                        <Typography variant="h5">{item.title}</Typography>
                                        <Typography variant="body1">{item.text}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
          
        </Container>
            
    </HomeReasonToBookWrapperStyled>
  )
}

export default HomeReasonToBook