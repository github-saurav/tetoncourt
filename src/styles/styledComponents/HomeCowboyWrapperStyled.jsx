import { primaryColors } from "../../mui-theme/_muiPalette";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
export const HomeCowboyWrapperStyled = styled(Box)`
    background-color: #613F35;
    padding: 50px 0 100px;

    @media (max-width: 1199px) {
        padding: 50px 0;
    }
    p{
        color: ${primaryColors.white};
        line-height: 2;
    }
    .homeCowboyContent{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px 0;

        @media (max-width: 899px) {
            padding: 0;
        }
    }
    .homeCowboyImg{
        height: 100%;
        display: flex;
        img{
            height: 100%;
            object-fit: cover;
        }
    }
`