import React from 'react'
import { PropertyDetailsWrapperStyled } from '../styles/styledComponents/PropertyDetailsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { assets } from '../json/assets'
import { Container, Grid, List } from '@mui/material'
import CustomButton from '../ui/CustomButton/CustomButton';
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export const propDetailsFeatureData = [
  {
    title: "CLOSE TO WHERE YOU WANT TO BE",
    img: assets.IMAGE_YS2,
    aos: "normal",
    textContent: [
      {
        eachText: "✔ Minutes from Wind River Range trailheads",
      },
      {
        eachText: "✔ Easy access to Elkhart Park",
      },
      {
        eachText: "✔ Near Fremont Lake, Green River, and New Fork River",
      },
      {
        eachText: "✔ A scenic, less expensive, alternative base for Yellowstone and Grand Teton National Parks",
      },
      {
        eachText: "✔ Walking distance to the bike shop, grocery store, restaurants, and local bars",
      },
      {
        eachText: "✔ You won’t need to drive across town for dinner or supplies. Everything is close (mountains included).",
      }
    ]
  },
  {
    title: "OUR ROOMS",
    img: assets.IMAGE_YS3,
    aos: "reverse",
    textContent: [
      {
        eachText: "✔ Comfort after a day outdoors.",
      },
      {
        eachText: '✔ Each room is designed for rest and simplicity. Expect clean spaces, comfortable beds, Wi-Fi, a mini-fridge and microwave, Keurig coffee maker, and a 43" TV with streaming services and live TV.',
      },
      {
        eachText: '✔ From our Deluxe King to our more spacious Superior Doubles and historic cabin-style accommodations, every stay offers practical comfort without resort pricing.',
      },
      {
        eachText: '✔ Simple. Quiet. Reliable.',
      }
    ],
    linkPath: '/our-rooms',
    linText: "Our Rooms"
  },
  {
    title: "BENEFITS OF BOOKING DIRECTLY WITH US",
    img: assets.IMAGE_YS4,
    aos: "normal",
    textContent: [
      {
        eachText: "✔ Direct communication for early check-in or trail timing",
      },
      {
        eachText: "✔ The best available rate Real-time room availability",
      },
      {
        eachText: "✔ Direct communication for early check-in or trail timing",
      },
      {
        eachText: "✔ Faster assistance with changes or last-minute stays",
      },
      {
        eachText: "✔ Mountain plans can shift — booking direct keeps things flexible.",
      }
    ],
    bookNow : true,
  },
]

export const propertyAmenities = [
  {
    eachAmenities: "✔ Complimentary Wi-Fi",
  },
  {
    eachAmenities: "✔ Free on-site parking",
  },
  {
    eachAmenities: "✔ Evening laundry service (charged per load)",
  },
  {
    eachAmenities: "✔ Select pet-friendly rooms",
  },
  {
    eachAmenities: "✔ Walking access to downtown",
  },
  {
    eachAmenities: "✔ Seasonal operation (mid-May through early October)",
  },
  {
    eachAmenities: "✔ Comfortable and Clean",
  },
  {
    eachAmenities: "✔ Connect Locally",
  },
  {
    eachAmenities: "✔ Affordable",
  },
  {
    eachAmenities: "✔ Book with Us and Save",
  },
]
const TITLE = 'Teton Court Motel - Property Details';
const PropertyDetails = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <PropertyDetailsWrapperStyled style={{ background: `url(${assets.propertyDetailsBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        <CommonInnerBanner innerBannerImage={assets.IMAGE_YS1} innerBannerText="Property Details" />

        <Box className="motelInfo cmn_gap">
          <Container fixed>
            <Box className="cmn_head">
              <Typography variant='h2'>A Comfortable Base in Pinedale</Typography>
            </Box>
            <Typography variant='body1'>
             Teton Court Motel offers simple, dependable lodging in the heart of Pinedale — just minutes from the Wind River Range and within walking distance of downtown.
              Whether you're hiking the Winds, fishing the Green River, visiting Yellowstone, or passing through on a scenic drive, our goal is straightforward: a clean room, a quiet night, and a stay that feels easy.
            </Typography>
          </Container>
        </Box>

        <Box className="propDetailsFeatureWrap">
          {
            propDetailsFeatureData.map((eachData, index) => (
              <Box className="propDetailsFeatureEach cmn_gap" key={index}>
                <Container fixed>
                  <Grid container columnSpacing={5} >
                    <Grid item md={6} data-aos={eachData.aos === "normal" ? "fade-right" : eachData.aos === "reverse" && "fade-left" }>
                      <Box className="featureImg">
                        <img src={eachData.img} alt="property details" />
                      </Box>
                    </Grid>
                    <Grid item md={6} data-aos={eachData.aos === "normal" ? "fade-left" : eachData.aos === "reverse" && "fade-right"}>
                      <Box className="featureContent">
                        <Box className="cmn_head">
                          <Typography variant='h2'>{eachData.title}</Typography>
                        </Box>
                        {
                          eachData.textContent.map((eachText, index) => {
                            return (
                              <Typography variant='body1' key={index}>{eachText.eachText}</Typography>
                            )
                          })
                        }
                        <Box className="featureContentBtnWrap">
                          {
                            eachData.linkPath &&
                            <CustomButton buttonColor="black" onClick={() => navigate(`${eachData.linkPath}`)} >
                              {eachData.linText}
                            </CustomButton>
                          }

                          {
                            eachData.bookNow &&
                            <CustomButton buttonColor="black"  onClick={() => window.open('https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846', '_blank')}>
                                BOOK NOW
                            </CustomButton>
                          }

                        </Box>
                      </Box>


                    </Grid>
                  </Grid>
                </Container>
              </Box>
            ))
          }
        </Box>

        <Box className="ourGround cmn_gap">
          <Container fixed>
            <Grid container columnSpacing={5} rowSpacing={4} alignItems="center" >
              <Grid item md={6} xs={12} data-aos="zoom-in">
                <Box className="ourGroundImg">
                  <img src={assets.IMAGE_YS5} alt="Our Ground" />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box className="ourGroundContent">
                  <Box className="cmn_head" textAlign="left">
                    <Typography variant='h2'>OUR GROUND</Typography>
                  </Box>
                  <Typography variant='body1'>
                    Pinedale is still real Wyoming — wide skies, working ranches, mountain air, and a pace that feels unhurried. Here, you’re never far from the Wind River Range, alpine lakes, and open trails. 
                    Downtown offers local restaurants, a hometown grocery store, a trusted bike shop, and friendly faces who know the land. It’s a place where mornings start early, sunsets linger, and adventure begins just beyond Pine Street.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className="propertyAmenities cmn_gap">
          <Container fixed>
            <Grid container rowSpacing={4} alignItems="center" className='propertyAmenitiesRow'>
              <Grid item md={6} xs={12} data-aos="fade-right" className='propertyAmenitiesTextCol'>
                <Box className="cmn_head">
                  <Typography variant='h2' textAlign="left">PROPERTY AMENITIES</Typography>
                </Box>
                <List disablePadding className='propertyAmenitiesList'>
                  {
                    propertyAmenities.map((eachAmenities, index) => (
                      <Typography variant='body1' key={index}>{eachAmenities.eachAmenities}</Typography>
                    ))
                  }
                </List>
              </Grid>
              <Grid item md={6} xs={12} data-aos="fade-left">
                <figure className='propertyAmenitiesImg'>
                  <img src={assets.IMAGE_YS6} alt="" />
                </figure>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className="bookingRules cmn_gap cmn_gap_top">
          <Container fixed>
            <Box className="bookingRulesInner cmn_gap">
              <Box className="cmn_head">
                <Typography variant='h2'>BOOKING RULES</Typography>
              </Box>
              <Box className="bookingRulesInnerText">
                <Typography variant='body1'>
                  We operate during a short, high-demand season. Advance reservations are recommended during peak summer and CDT hiking windows. Last-minute travelers are always welcome — call us directly for fastest availability. Clear policies, fair pricing, and straightforward communication.
                </Typography>
              </Box>
              <CustomButton buttonColor="white" onClick={() => navigate('/policies')}>
                Policies
              </CustomButton>

            </Box>
          </Container>
        </Box>
        {/* <NewsLetter /> */}
      </PropertyDetailsWrapperStyled>
    </Wrapper>

  )
}

export default PropertyDetails