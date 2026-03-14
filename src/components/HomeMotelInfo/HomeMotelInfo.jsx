import React from 'react'
import { HomeMotelInfoWrapperStyled } from '../../styles/styledComponents/HomeMotelInfoWrapperStyled'
import { Container, Typography, Box } from '@mui/material'
import CustomButton from '../../ui/CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'
const HomeMotelInfo = () => {
    const navigate = useNavigate();
  return (
    <HomeMotelInfoWrapperStyled>
        <Container fixed>
            <Box className="homeMotelInfoInner">
                <Box className="cmn_head">
                    <Typography variant="h2">
                        TETON COURT MOTEL
                    </Typography>
                </Box>
                <Typography variant="body1">
A locally owned, seasonal motel open mid-May through early October.
We serve hikers, hunters, anglers, road-trippers, and Yellowstone visitors looking for clean rooms, fair pricing, and genuine Wyoming hospitality.
Simple. Dependable. Western.</Typography>
                <CustomButton onClick={() => navigate('/your-stay')}>LEARN MORE</CustomButton>
            </Box>
        </Container>
    </HomeMotelInfoWrapperStyled>
  )
}

export default HomeMotelInfo