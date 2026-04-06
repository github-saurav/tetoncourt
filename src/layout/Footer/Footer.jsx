import React from 'react'
import { FooterWrapperStyled } from '../../styles/styledComponents/FooterWrapperStyled'
import { Box, Container, List, ListItem, Stack } from '@mui/material'
import { Link, NavLink, } from 'react-router-dom'
import { assets } from '../../json/assets'
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from "../../ui/CustomButton/CustomButton"
import FacebookIcon from "../../ui/icons/FacebookIcon"
import InstagramIcon from "../../ui/icons/InstagramIcon"
import TwitterIcon from "../../ui/icons/TwitterIcon"
export const foooterSiteMaop = [
  {
    name: "Our Rooms",
    path: "/our-rooms",
  },
  {
    name: "Your Stay",
    path: "/your-stay",
  },
  {
    name: "Our Story",
    path: "/our-story",
  },
  {
    name: "Local Adventures",
    path: "/local-adventures",
  },
  
  {
    name: "Contact Us",
    path: "/contact-us",
  },

]
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};
const Footer = () => {

  return (
    <FooterWrapperStyled>
      <Container fixed>
        <Box className="footerTop">
          <Box className="footerTopRow">
            <Box className="footerTopCol footerTopLogoCol">
              <Link to="/" className='footerLogo' onClick={scrollToTop}>
                <img src={assets.logo} alt="header logo" />
              </Link>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopLocationContactCol">
              <Typography variant='body1' className="footerTitle">OUR LOCATION</Typography>
              <Typography variant='body1'>
                <b>Physical Address:</b>
                <br />
                (UPS & FedEx for all gear and packages)
              </Typography>
              <Typography variant='body1' className='footerLocationDetails'>
                Teton Court Motel <br />
                123 E Magnolia Street <br />
                Pinedale, WY 82941
              </Typography>
              <Typography variant='body1'>
                <b>Mailing Address:</b>
                <br />
                (USPS mail only, no packages)
              </Typography>
              <Typography variant='body1'>
                Teton Court Motel <br />
                PO Box 582 <br />
                Pinedale, WY 82941
              </Typography>
              <List disablePadding className='footerConactLinkList'>
                <ListItem>
                  <Link to="tel:(307) 367-3367"><i><CallIcon /></i> (307) 367-3367 (Call or Text)</Link>
                </ListItem>
                <ListItem>
                  <Link to="mailto:res@tetoncourt.com"><i><EmailIcon /></i> res@tetoncourt.com</Link>
                </ListItem>
              </List>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopSitemapCol">
              <Typography variant='body1' className="footerTitle">SITE MAP</Typography>
              <List disablePadding className='footerSiteMapList'>
                {
                  foooterSiteMaop.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <NavLink onClick={scrollToTop} className={(navData) => (navData.isActive ? "active" : 'none')} to={item.path}>{item.name}</NavLink>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopSocialCol">
              <Typography variant='body1' className="footerTitle">HOURS</Typography>
              <Typography variant='body1'>Our reservation and front desk team are available daily in the summer season from 9 am to 9 pm MDT.  Best time to call is 4pm to 9pm, texting is welcome. </Typography>
              <CustomButton buttonColor='white' className='footerBookBtn' onClick={() => window.open('https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846', '_blank')}>
              BOOK A ROOM
              </CustomButton>

              <List className='footerSocialList'>
                <ListItem disablePadding>
                  <Link to="#"><FacebookIcon /></Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="#"><InstagramIcon /></Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="#"><TwitterIcon /></Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        <Box className="footerBot">
          <Stack className='footerBotRow' direction="row" flexWrap={"wrap"} justifyContent="space-between" spacing={2}>
            <Box className="footerBotLeft">
              <List disablePadding>
                <ListItem>
                  &copy; 2026 <Link onClick={scrollToTop} to="/">Teton Court Motel.</Link> All rights reserved.
                </ListItem>
              </List>
            </Box>
            <Box className="footerBotRight">
              <List disablePadding>
                <ListItem>
                  <NavLink onClick={scrollToTop} to="/policies" className={(navData) => (navData.isActive ? "active" : 'none')}>
                  Terms & Conditions   / Privacy & Cookie Statement
                  </NavLink>
                </ListItem>
                
              </List>
            </Box>
          </Stack>
        </Box>

      </Container>
    </FooterWrapperStyled>
  )
}

export default Footer