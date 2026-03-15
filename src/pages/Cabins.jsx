import React from 'react'
import { CabinsWrapperStyled } from '../styles/styledComponents/CabinsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { assets } from '../json/assets'
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import CustomButton from '../ui/CustomButton/CustomButton'
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter'
import CabinCommonImageSlider from '../components/CabinCommonImageSlider/CabinCommonImageSlider'
import { Helmet, HelmetProvider } from 'react-helmet-async'



const cabinData = [
  {
    title: "Deluxe King",
    subtitle: "1 King Bed | 1–2 Guests",
    persons: "The Deluxe King rooms sleep 1-2 adults ",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "A work desk or comfortable reading chair",
      },
      {
        amenities: "One comfortable pillow-top king bed",
      },
      {
        amenities: "Mini-fridge",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Keurig coffee maker with K-cups",
      },
      {
        amenities: "43\" TV with streaming services (Amazon Firestick) and live TV",
      },
      {
        amenities: "Enjoy Wi-Fi",
      },
      {
        amenities: "Private bathroom with shower-tub combination",
      },
    ],
    roomSize: "Rooms are approximately 190 sq. ft. One room offers a pull-out loveseat-sized sofa.",
    cabinImageSliderList: [
      assets.IMAGE_OR_A1,
      assets.IMAGE_OR_A2,
      assets.IMAGE_OR_A3,
      assets.IMAGE_OR_A4,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "Deluxe Double",
    subtitle: "2 Double Beds | Up to 4 Guests",
    persons: "The Deluxe Double sleeps 1-4 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "A work desk or comfortable reading chair",
      },
      {
        amenities: " two comfortable double/full sized beds",
      },
      {
        amenities: "mini-fridge",
      },
      {
        amenities: "microwave",
      },
      {
        amenities: "kitchenette",
      },
      {
        amenities: "television with Amazon FireStick",
      },
      {
        amenities: "WiFi",
      },
      {
        amenities: "Keurig coffee maker",
      },
      {
        amenities: "full bathroom with tub and shower",
      },

    ],
    roomSize: "Approximately 220 sq. ft.",
    cabinImageSliderList: [
      assets.IMAGE_OR_C1,
      assets.IMAGE_OR_C2,
      assets.IMAGE_OR_C3,
      assets.IMAGE_OR_C4,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "AirCon Deluxe Double",
    subtitle: "2 Double Beds | Climate-Controlled",
    persons: "Similar to our Deluxe Double room, but with Air Conditioning. The rooms sleep 1-4 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "A work desk or comfortable reading chair",
      },
      {
        amenities: " two comfortable double/full sized beds",
      },
      {
        amenities: "mini-fridge",
      },
      {
        amenities: "microwave",
      },
      {
        amenities: "kitchenette",
      },
      {
        amenities: '43" TV with streaming services and live TV',
      },
      {
        amenities: "WiFi",
      },
      {
        amenities: "a Keurig coffee maker with K-cups",
      },
      {
        amenities: "full bathroom with tub and shower",
      },

    ],
    roomSize: "Approximately 220 sq. ft.",
    cabinImageSliderList: [
      assets.IMAGE_OR_DD1,
      assets.IMAGE_OR_DD2,
      assets.IMAGE_OR_DD3,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "Superior Double",
    subtitle: "2 Double Beds | Extra Space",
    persons: "The Superior Doubles are our largest rooms. These rooms sleep 1-4 (some rooms sleep more than 4)",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Features two double beds",
      },
      {
        amenities: "dining table",
      },
      {
        amenities: "mini-fridge",
      },
      {
        amenities: "microwave",
      },
      {
        amenities: "kitchenette area",
      },
      {
        amenities: '43" TV with streaming services and live TV',
      },
      {
        amenities: "WiFi",
      },
      {
        amenities: "Keurig coffee maker",
      },
      {
        amenities: "Some rooms have showers and others have shower-tub combinations",
      },
      {
        amenities: "Select rooms include a sofa or loveseat",
      },

    ],
    roomSize: " Rooms vary in size from 250-450 sq. ft.",
    cabinImageSliderList: [
      assets.IMAGE_OR_E1,
      assets.IMAGE_OR_E2,
      assets.IMAGE_OR_E3,
      assets.IMAGE_OR_E4,
      assets.IMAGE_OR_E5,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "Family Cabin",
    subtitle: "Historic Cabin | Spacious & Unique",
    persons: "The Family Cabin are our largest rooms. These rooms sleep 1-4 (some rooms sleep more than 4)",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Includes comfortable bedding",
      },
      {
        amenities: "two comfortable double/full sized beds",
      },
      {
        amenities: "dining table",
      },
      {
        amenities: "mini-fridge",
      },
      {
        amenities: "microwave",
      },
      {
        amenities: "kitchenette",
      },
      {
        amenities: '43" TV with streaming services and live TV',
      },
      {
        amenities: "WiFi",
      },
      {
        amenities: "private bath",
      },
      {
        amenities: "air conditioning",
      },
      {
        amenities: "a Keurig coffee maker with K-cups",
      },
      {
        amenities: "Some rooms have showers and others have shower-tub combinations",
      },
      {
        amenities: "Some have a separate sofa or love seat",
      },

    ],
    roomSize: " Rooms vary in size from 250-450 sq. ft.",
    cabinImageSliderList: [
      assets.IMAGE_OR_K1,
      assets.IMAGE_OR_K2,
      assets.IMAGE_OR_K3,
      assets.IMAGE_OR_K4,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
]

const TITLE = 'Teton Court Motel - Cabins';
const Cabins = () => {
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <CabinsWrapperStyled style={{ background: `url(${assets.cabinBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        
        <CommonInnerBanner innerBannerImage={assets.IMAGE_OR1} innerBannerText="Our Rooms" />

        <Box className="eachCabinWrap">
          {
            cabinData.map((cabin, index) => {
              return (
                <Box className="eachCabin cmn_gap" key={index}>
                  <Box className="eachCabinInner">
                    <Container maxWidth="xl">
                      <Grid container>
                        <Grid item lg={6} xs={12} className='cabinImgSlider'>
                          {
                            <CabinCommonImageSlider cabinImageSliderList={cabin.cabinImageSliderList} />
                          }
                        </Grid>
                        <Grid item lg={6} xs={12} className='cabinContentCol'>
                          <Box className="cmn_head">
                            <Typography variant='h2'>{cabin.title}</Typography>
                          </Box>
                          <Typography variant='h5'>{cabin.subtitle}</Typography>

                          <Typography variant='body1'><b>Room size :</b> {cabin.roomSize}</Typography>
                          <Typography variant='h6'>{cabin.roomAmenitiesTitle}</Typography>
                          <List disablePadding className='roomAmenitiesList'>
                            {
                              cabin.roomAmenitiesList.map((item, index) => (
                                <ListItem key={index}>
                                  {item.amenities}
                                </ListItem>
                              ))
                            }
                          </List>
                          <Typography variant='body1' className='personPerRoom'><b>Occupancy:</b> {cabin.persons}</Typography>
                          <CustomButton buttonColor="black" onClick={() => window.open(cabin.linkPath, '_blank')}>
                            BOOK NOW
                          </CustomButton>
                        </Grid>
                      </Grid>
                    </Container>

                  </Box>
                </Box>
              )
            })
          }

        </Box>
        {/* <NewsLetter /> */}


      </CabinsWrapperStyled>
    </Wrapper>
  )
}

export default Cabins