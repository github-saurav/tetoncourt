import React from 'react'
import { OurLocationWrapperStyled } from '../../styles/styledComponents/OurLocationWrapperStyled'
import { Box, Container, Typography } from '@mui/material'

const OurLocation = () => {
  return (
    <OurLocationWrapperStyled className='cmn_gap'>
        <Container>
            <Box className="cmn_head">
                <Typography variant="h2">OUR LOCATION</Typography>
            </Box>
            <Typography variant="body1">In the heart of Pinedale, at the edge of the Winds.</Typography>
            <iframe className='locationFrame' title='Teton Court Motel location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2327222041195!2d-109.86190152438617!3d42.86793190286542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875796abc23c9e27%3A0xc1608bf7c8e5a7fd!2sTeton%20Court%20Motel!5e0!3m2!1sen!2sin!4v1712902104878!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} ></iframe>

        </Container>
    </OurLocationWrapperStyled>
  )
}

export default OurLocation