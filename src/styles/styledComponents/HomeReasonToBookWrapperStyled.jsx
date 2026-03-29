import { styled } from "@mui/material/styles";
import { primaryColors } from '../../mui-theme/_muiPalette';
import Box from '@mui/material/Box';
export const HomeReasonToBookWrapperStyled = styled(Box)`
background-color: rgba(255,255,255,0.85);
.bookReason{
    padding-top: 20px;
    .bookReasonCard{
        text-align: center;
        padding: 30px 30px;
        position: relative;
        z-index: 1;
        &.hasBackdrop{
            &::before{
                position: absolute;
                content: "";
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(16,13,8,0.5);
                z-index: -1;
            }
        }
        .bookReasonCardnIcon{
            margin-bottom: 5px;
        }
        .bookReasonCardText{
            h5{
                color: ${primaryColors.white};
            }
            p{
                color: ${primaryColors.white};
                font-size: 18px;
            }
        }
    }
}
`