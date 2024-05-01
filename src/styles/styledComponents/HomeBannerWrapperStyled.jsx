import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";
export const HomeBannerWrapperStyled =  styled(Box)`
padding: 100px 0 150px;
position: relative;
z-index: 1;
@media (max-width: 1199px) {
    padding: 80px 0 120px;
}
@media (max-width: 899px) {
    padding: 50px 0 80px;
}
&::before{
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
}
.homeBannerContent{
    text-align: center;
    z-index: 2;
    h1{
        color: ${primaryColors.white};
        font-weight: 400;
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    h2{
        color: ${primaryColors.white};
        font-size: 30px;
        font-weight: 400;
        font-family: "Old Standard TT", serif;
        text-transform: uppercase;
        line-height: 1.2;
        @media (max-width: 899px) {
            font-size: 25px;
        }
    }
}
.bannerCalendar{
    /* padding-top: 30px; */
    padding: 25px 25px;
    max-width: 650px;
    margin: 30px auto 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    @media (max-width: 899px) {
        padding-top: 15px;
    }
    .bannerCalendarStack{
        @media (max-width: 899px) {
            flex-wrap: wrap;
        }
        label{
                display: block;
                color: ${primaryColors.white};
                margin-bottom: 5px;
            }
        .bannerCalendarInput{
            @media (max-width: 899px) {
                width: 48%;
            }
            @media (max-width: 599px) {
                width: 100%;
                margin: 0 0 15px;
            }
            
            fieldset{
                display: none;
            }
            .MuiTextField-root{
                width: 100%;
            }
            .MuiInputBase-root {
                line-height: 1;
                
                input{
                    border: 2px solid ${primaryColors.white};
                    max-height: 44px;
                    padding: 10.5px 15px;
                    line-height: 1;
                    height: initial;
                    color: ${primaryColors.white};
                }
            }
        }
        .bannerCalendar_cmnInput{
            border: 2px solid ${primaryColors.white};
                    max-height: 44px;
                    padding: 10.5px 15px;
                    line-height: 1;
                    height: initial;
                    color: ${primaryColors.white};
                    background-color: transparent;
                    width: 100%;
                    min-height: 44px;
        }
        .bannerCalendar_cmnSelect{
            border: 2px solid ${primaryColors.white};
                    max-height: 44px;
                    padding: 10.5px 15px;
                    line-height: 1;
                    height: initial;
                    color: ${primaryColors.white};
                    background-color: transparent;
                    width: 100%;
                    min-height: 44px;
        }
         .bannerCalendar_cmnSelect option {
            color: ${primaryColors.black};
            }
    }
    .bannerCalendarSubmit{
        margin-top: 5px;
        @media (max-width: 899px) {
            width: 100%;
            margin-left: 0;
            text-align: center;
            padding-top: 20px;
        }
        @media (max-width: 599px) {
            padding-top: 0;
        }
    }
    .homeBannerBookBtn{
        /* &:hover{
            background-color: ${primaryColors.white};
            border-color: ${primaryColors.white};
        } */
    }

   
    
}
.homeBannerLogo{
        figure{
            max-width: 400px;
            margin: 0 auto 30px;
            display: flex;
            img{
                width: 100%;
            }
        }
    }
`