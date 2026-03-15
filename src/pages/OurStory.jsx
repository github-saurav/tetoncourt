import React from 'react'
import { OurStoryWrapperStyled } from '../styles/styledComponents/OurStoryWrapperStyled'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { Box, Container, Typography } from '@mui/material'
import { assets } from '../json/assets'
import Wrapper from '../layout/Wrapper/Wrapper'
import { Helmet, HelmetProvider } from 'react-helmet-async'


const TITLE = 'Teton Court Motel - Our Story';
const OurStory = () => {
  return (
    <Wrapper>
    <HelmetProvider>
         <Helmet>
           <title>{TITLE}</title>
         </Helmet>
       </HelmetProvider>
    <OurStoryWrapperStyled>
        <CommonInnerBanner innerBannerImage={assets.IMAGE_OS1} innerBannerText="Our Story" />
        <Box className="ourStory cmn_gap">
            <Container fixed>
                <Box className="cmn_head">
                    <Typography variant='h2'>Our Story</Typography>
                </Box>
                <Box className="ourStoryConent">
                    <figure className='ourStoryImg'>
                        <img src={assets.IMAGE_OS2} alt='' />
                    </figure>
             
                        <Typography variant='body1'>
                           Teton Court Motel – Pinedale, Wyoming
In Pinedale, the wind still carries the feeling of the old West. Mornings break quietly, the peaks of the Wind River Range catch first light, and life moves with a steady independence.
Teton Court Motel has stood on this ground for generations.    
                        </Typography> 

                        <Typography variant='body1'>
                        The original cabin on the property dates to 1908, built when Pinedale was still young, and Wyoming was shaping its identity. That cabin still remains, and today it has been restored into a guest room we proudly rent to visitors who want to experience a piece of early 20th-century Wyoming.
The rest of the motel was founded in 1947, in the post-war era when America embraced the automobile and families headed west toward places like Yellowstone National Park. Roadside motels like Teton Court were built for that spirit of freedom — practical, welcoming, and affordable. That spirit still defines us today.
                        </Typography>
                        <Typography variant='h4'>
                            About Me
                        </Typography>
                        <Typography variant='body1'>
                        Hi, I’m Chris Harris. I have owned the Teton Court Motel since 2016.
I’ve been part of the hospitality industry since the 1980s and have owned and operated hotels since 2006. I launched my first property in the Black Hills of South Dakota while completing my Ph.D. at the University of Iowa. What began as a practical endeavor became a passion.
                        </Typography>
                        <Typography variant='body1'>
                       Today, I also remain a tenured university professor of Computer Science in Colorado, teaching during the winter and spring when Pinedale’s busy season slows. My academic work focuses on artificial intelligence, machine learning, and emerging technologies like blockchain.
Travel has shaped my vision as much as academia has. I’ve personally visited 145 countries and traveled to all 7 continents, staying everywhere from modest roadside inns to world-class hotels. What I’ve learned is this: guests remember how a place makes them feel — clean rooms. Fair pricing. Quiet nights. A genuine welcome.
                        </Typography>
                        <Typography variant='body1'>
                        That’s the standard we work to uphold.
Teton Court is also a family effort. During summers, my children devote much of their break to helping run the motel, greeting guests, assisting with upkeep, and learning firsthand the value of responsibility and service. This isn’t a distant investment. It’s something we live every day.
When I’m on property, I enjoy personally welcoming guests. If you’d like to talk about travel, technology, higher education, or the beauty of the Wind River Mountains, I’m always happy to visit in the evenings. Some of the best conversations happen after a long day on the road.
                        </Typography>
                        <Typography variant='h4'>- <i>Carrying the Tradition Forward</i></Typography>
                        <Typography variant='body1'>
                        Teton Court isn’t a corporate chain. It’s an independent Wyoming motel owned by a family that believes places like this still matter.
Our goal isn’t flash; it’s comfort, reliability, and a stay you can trust. Whether you’re exploring the Wind River Range, passing through on a long drive, or returning to Pinedale year after year, we’re honored to host you.
This ground has held stories since 1908.
We’re grateful to continue the next chapter and to welcome you into it.
                        </Typography>
                        
                    
                </Box>
            </Container>
        </Box>
    </OurStoryWrapperStyled>
    </Wrapper>
  )
}

export default OurStory