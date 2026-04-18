import React from 'react'
import { WrapperStyled } from '../../styles/styledComponents/WrapperStyled'
import Header from '../Header/Header'
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import { Button, Container, Typography } from '@mui/material';
import { primaryColors } from '../../mui-theme/_muiPalette';

const Wrapper = ({ children }) => {
  const [showAnnouncementBanner, setShowAnnouncementBanner] = React.useState(true);
  const handleAnnouncementBanner = () => {
    setShowAnnouncementBanner(false);
  }
  return (
    <WrapperStyled>
      <Header />
      <Box className="bodyContent">

        <Box className={showAnnouncementBanner === true ? "announcementBanner" : "announcementBanner hide"} bgcolor={primaryColors.lightBlue}>
          
          <Container>
            <Box className="announcementBannerInner">
              <Typography variant='body1'>Announcement Banner</Typography>
              <Button className='announcementCloseBtn' onClick={handleAnnouncementBanner}>X</Button>
            </Box>
          </Container>
        </Box>
        {children}
      </Box>
      <Footer />
    </WrapperStyled>
  )
}

export default Wrapper