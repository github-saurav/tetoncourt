import React from 'react'
import { CommonInnerBannerWrapperStyled } from '../../styles/styledComponents/CommonInnerBannerWrapperStyled'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import CustomButton from '../../ui/CustomButton/CustomButton';

const CommonInnerBanner = ({
  innerBannerImage,
  innerBannerText,
  innerBannerContent,
  BannerbuttonText,
  BannerbuttonLink
}) => {
  return (
    <CommonInnerBannerWrapperStyled>
      <Box className="innerBanner">
        <Box className="container">
          <figure>
            <img src={innerBannerImage} alt="property details" />
          </figure>

          <Box className="innerBannerDetails">
            <Container fixed>
              <Typography variant="h1">{innerBannerText}</Typography>

              <Box mt={3}>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  {innerBannerContent}
                </Typography>

                {BannerbuttonText && (
                  <CustomButton
                    buttonColor="black"
                    onClick={() => window.open('https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846', '_blank')}
                    variant="contained"
                    href={BannerbuttonLink}
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      backgroundColor: "#c59d5f",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#a8844c",
                      },
                    }}
                  >
                    {BannerbuttonText}
                  </CustomButton>
                )}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </CommonInnerBannerWrapperStyled>
  );
};

export default CommonInnerBanner;