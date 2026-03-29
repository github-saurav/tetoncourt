import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";

export const HomeMotelInfoWrapperStyled = styled(Box)`
background-color: rgba(255,255,255,0.85);
border-bottom: 5px solid ${primaryColors.black};
padding: 100px 0 50px;

@media (max-width: 1199px) {
    padding: 70px 0 50px;
}
.homeMotelInfoInner{
    text-align: center;
    p{
        font-size: 18px;
        font-family: "Raleway";
        margin-bottom: 30px;
    }

}
`