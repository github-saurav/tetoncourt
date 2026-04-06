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
    subdesc:"A cozy, restful retreat designed for quiet comfort. The Deluxe King features a plush pillow-top king bed and a relaxed seating area — ideal for unwinding after a day in the Wind River Range.",
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
      {
        amenities: "Some of our rooms are pet-free, some are pet-friendly (a separate pet fee applies for pets).",
      },
    ],
    roomSize: "Rooms are approximately 190 sq. ft. One room offers a pull-out loveseat-sized sofa.",
    cabinImageSliderList: [
      assets.IMGOR_K1,
      assets.IMGOR_K2,
      assets.IMGOR_K3,
      assets.IMGOR_K4,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
   {
    title: "Economy Double Double",
    subtitle: "2 Double Beds",
    subdesc:"A budget-friendly room for travelers who want a clean, simple place to stay while exploring Pinedale. ",
    persons: "Up to 4 Guests",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "43\" TV with streaming services (Amazon Firestick) and live TV",
      },
      {
        amenities: "Enjoy Wi-Fi",
      },
      {
        amenities: "Private bathroom with shower-tub combinatiomini kitchenette feature",
      },
      {
        amenities: "Mini-fridge",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "walk-in shower"
      },
      {
        amenities: "Hard flooring (no carpet) and is pet-friendly (extra fee applies for pets)."
      }

    ],
    roomSize: "Two comfortable double beds offer space for friends or small families without paying for extras you may not need.",
    cabinImageSliderList: [
      assets.IR_E1,
      assets.IR_E2,
      assets.IR_E3,
      assets.IR_E4,
      assets.IR_E5,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "Deluxe Double Double",
    subtitle: "2 Double Beds | Up to 4 Guests",
    subdesc:"Designed for guests who value space and simplicity. Two comfortable double beds provide an easy place to recharge after a full day outdoors.",
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
        amenities: '43" TV with streaming services and live TV',
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
      {
        amenities: "Some of our rooms are pet-free, some are pet-friendly (a separate pet fee applies for pets).",
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
    title: "AirCon Double Double",
    subtitle: "2 Double Beds | Up to 4 Guests  | Climate-Controlled",
    subdesc:"All the features of our Deluxe Double, plus air conditioning for warmer summer days.",
    persons: "Similar to our Deluxe Double room, but with Air Conditioning. The rooms sleep 1-4 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "A work desk or comfortable reading chair",
      },
      {
        amenities: "two comfortable double/full sized beds",
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
      {
        amenities: "Private bath, most with a shower-tub combinationr",
      },
      {
        amenities: "Some of our rooms are pet-free, some are pet-friendly (a separate pet fee applies for pets).",
      },

    ],
    roomSize: "Approximately 220 sq. ft.",
    cabinImageSliderList: [
      assets.IM_OR_A1,
      assets.IM_OR_A2,
      assets.IM_OR_A3,
      assets.IM_OR_A4,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "Superior Double Double",
    subtitle: "2 Double Beds | Up to 4 people | Extra Space",
    subdesc:"Our most spacious standard rooms — ideal for families or longer stays.",
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
        amenities: "Private bath, with a shower or shower-tub combination",
      },
      {
        amenities: "Some of our rooms are pet-free, some are pet-friendly (a separate pet fee applies for pets).",
      },
      {
        amenities: "Select rooms include a sofa or loveseat",
      },

    ],
    roomSize: " Rooms vary in size from 250-450 sq. ft.",
    cabinImageSliderList: [
      assets.IM_OR_S1,
      assets.IM_OR_S2,
      assets.IM_OR_S3,
      assets.IM_OR_S4,
      assets.IM_OR_S5,
    ],
    linkPath: "https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846",
  },
  {
    title: "Family Cabin",
    subtitle: "Historic 1908 Cabin | Sleeps up to 6 people | Spacious & Unique",
    subdesc:"Experience warm wood interiors and added space in our cabin-style accommodations.  Three queen beds.  Sleeps up to 6 people.",
    persons: "The Family Cabin are our largest rooms. These rooms sleep 1-4 (some rooms sleep more than 4)",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Includes comfortable bedding",
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
        amenities: "Room has a private shower",
      },
      {
        amenities: "pet-friendly (a separate pet fee applies for pets).",
      },

    ],
    roomSize: " Rooms vary in size from 250-450 sq. ft.",
    cabinImageSliderList: [
      assets.IM_OR_C1,
      assets.IM_OR_C2,
      assets.IM_OR_C3,
      assets.IM_OR_C4,
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
                          <Typography variant='body1'>{cabin.subdesc}</Typography>

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