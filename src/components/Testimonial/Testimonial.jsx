import React from 'react';
import Typography from '@mui/material/Typography';
import { TestimonialWrapperStyled } from '../../styles/styledComponents/TestimonialWrapperStyled';
import { Container, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderData =[
        {
            testimonialText: "“This has become our go-to place to stay whenever we are in Pinedale.“",
            testimonialName: "Hensley",
        },
        {
            testimonialText: "“Really, REALLY comfortable beds and bedding … the kitchenette was great.“",
            testimonialName: "Amy",
        },
        {
            testimonialText: "“Charming, clean, friendly, safe. I would gladly stay again.“",
            testimonialName: "Debbie",
        },
        {
            testimonialText: "“Excellent location. Close to shops and restaurants.“",
            testimonialName: "Andrea",
        },
        {
            testimonialText: "“Perfect small motel. Very clean and comfortable.“",
            testimonialName: "Catherine",
        },
        {
            testimonialText: "“Good value for the money.“",
            testimonialName: "Verified traveler",
        },
    ]

    return (
        <TestimonialWrapperStyled>
            <Container fixed>
                <Box className="cmn_head">
                    <Typography variant="h2">WHAT OUR GUESTS SAY</Typography>
                </Box>
                <Box className="testimonialSlider">
                    <Slider {...settings}>
                       {
                        sliderData?.map((item, index) => (
                            <Box className="sliderItem" key={index}>
                                <Typography variant="body1">{item.testimonialText}</Typography>
                                <Typography variant="h6">{item.testimonialName}</Typography>
                            </Box>
                        ))
                       }
                    </Slider>
                </Box>
            </Container>
        </TestimonialWrapperStyled>
    )
}

export default Testimonial