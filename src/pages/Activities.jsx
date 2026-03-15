import React from 'react'
import { ActivitiesWrapperStyled } from '../styles/styledComponents/ActivitiesWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import { assets } from '../json/assets'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter'
import { Box, Container, Grid, Typography } from '@mui/material'
import CustomButton from '../ui/CustomButton/CustomButton'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

export const activityData = [
  {
    img: assets.IMAG_LA2,
    title: "Wind River Range Adventures",
    textContent: [
      {
        eachText: "If you came for the mountains, you’re in the right place. Pinedale is one of the best jumping-off points for hiking, backpacking, photography, and high-alpine exploration. Day hikes to lakes and overlooks - Backpacking deeper into the Winds - Easy access to Elkhart Park and other trailheads",
      },
      {
        eachText: "For more information on Outlaw Outfitters, click on the Learn More tab below to visit their website."
      },
    ],
    linkPath: "/local-adventures/attractions",
    aos: "normal",
  },
  {
    img: assets.IMAG_LA3,
    title: "Fremont Lake and on-the-water days",
    textContent: [
      {
        eachText: "Just outside town, Fremont Lake is a local favorite for scenic shoreline time, boating, paddling, and sunset cruising. It’s the kind of place that makes you slow down (in a good way). Perfect for a relaxed half-day or full-day lake outing.",
      },
    ],
    linkPath: "/local-adventures/attractions",
    aos: "reverse",
  },
  {
    img: assets.IMAG_LA4,
    title: "Green River Lakes & Squaretop Mountain",
    textContent: [
      {
        eachText: "One of the most iconic views in Wyoming. About 52 miles north of town, this scenic drive leads to hiking, canoeing, fishing, and photography with dramatic mountain backdrops. A must-see if you have the time.",
      },
      {
        eachText: "For more information on the Spirit of Texas, click on the Learn More tab below to visit their website.",
      },
    ],
    linkPath: "/local-adventures/attractions",
    aos: "normal",
  },
  {
    img: assets.IMAG_LA5,
    title: "Fishing the Green & New Fork Rivers",
    textContent: [
      {
        eachText: "Pinedale sits in prime fishing country. Anglers come for the Green River, New Fork River, Fremont Lake, and nearby alpine waters. Early mornings, clean water, big skies.",
      },
      {
        eachText: "For more information on TJ's @ The Old Forge, click on the Learn More tab below to visit their website.",
      },
    ],
    linkPath: "/local-adventures/attractions",
    aos: "reverse",
  },
  {
    img: assets.IMAG_LA6,
    title: "Wildlife & Path of the Pronghorn",
    textContent: [
      {
        eachText: "Learn about one of North America’s most remarkable wildlife migration corridors at Trappers Point. Seasonal viewing opportunities make this a unique stop.",
      },
      {
        eachText: "For more information on 11th Street Cowboy Bar, click on the Learn More tab below to visit their website.",
      },
    ],
    linkPath: "/local-adventures/attractions",
    aos: "normal",
  },
  {
    img: assets.IMAG_LA7,
    title: "Museum of the Mountain Man",
    textContent: [
      {
        eachText: "A genuinely excellent local museum exploring fur trade history and frontier life. A great addition to any itinerary — especially on a cooler or rainy day.",
      }
    ],
    linkPath: "/local-adventures/attractions",
    aos: "reverse",
  },
  {
    img: assets.IMAG_LA8,
    title: "Golf, Recreation & Aquatic Center",
    textContent: [
      {
        eachText: "Play a round at Rendezvous Meadows Golf Course with sweeping mountain views, or enjoy the Pinedale Aquatic Center for swimming, fitness, climbing walls, and family recreation.",
      }
    ],
    linkPath: "/local-adventures/attractions",
    aos: "normal",
  },
  {
    img: assets.IMAG_LA9,
    title: "Restaurants, Bars & Downtown Strolls",
    textContent: [
      {
        eachText: "Enjoy local restaurants, casual bars, coffee shops, top-notch parks along Pine Creek, and a hometown grocery store — all within easy reach. Pinedale’s Main Street offers relaxed evenings and small-town hospitality.",
      }
    ],
    linkPath: "/local-adventures/attractions",
    aos: "reverse",
  }
]

const TITLE = 'Teton Court Motel - Local Adventures';
const Activities = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <ActivitiesWrapperStyled style={{ background: `url(${assets.activityBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        <CommonInnerBanner innerBannerImage={assets.IMAG_LA1} innerBannerText="Things to Do in Pinedale, Wyoming" innerBannerContent="Your basecamp for the Wind River Range, lakes, wildlife, and real Wyoming nights Pinedale is small, friendly, and surrounded by big country. Whether you’re here for the Wind River Range, Fremont Lake, fishing, wildlife, or a quiet reset, this town delivers. Use the ideas below to build your perfect day,  then come back to a clean room and a quiet night at Teton Court." BannerbuttonText="Book Your Stay"
  BannerbuttonLink="/book-now"/>
        <Box className="activityWrap">
          {
            activityData.map((eachData, index) => (
              <Box className="activityEach cmn_gap" key={index}>
                <Container fixed>
                  <Grid container columnSpacing={5} rowSpacing={4}>
                    <Grid item md={6} xs={12} data-aos={eachData.aos === "normal" ? "fade-right" : eachData.aos === "reverse" && "fade-left"}>
                      <figure className="activityImg">
                        <img src={eachData.img} alt="activity" />
                      </figure>
                    </Grid>
                    <Grid item md={6} xs={12} data-aos={eachData.aos === "normal" ? "fade-left" : eachData.aos === "reverse" && "fade-right"}>
                      <Box className="activityContent">
                        <Box className="cmn_head" textAlign="left">
                          <Typography variant='h2'>{eachData.title}</Typography>
                        </Box>
                        <Box className="activityContentText">
                          {
                            eachData.textContent.map((eachText, index) => {
                              return (
                                <Typography variant='body1' key={index}>{eachText.eachText}</Typography>
                              )
                            })
                          }
                        </Box>
                        <CustomButton buttonColor="black" onClick={() => navigate(eachData.linkPath)}>
                          LEARN MORE
                        </CustomButton>
                      </Box>
                    </Grid>
                  </Grid>

                </Container>
              </Box>
            ))
          }
        </Box>
        {/* <NewsLetter /> */}
      </ActivitiesWrapperStyled>
    </Wrapper>
  )
}

export default Activities