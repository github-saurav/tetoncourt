import { styled } from "@mui/material/styles";
import { Box } from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const PropertyDetailsWrapperStyled = styled(Box)`
.motelInfo{
    text-align: center;
    background-color: ${primaryColors.white};
}

.propDetailsFeatureWrap{
    .propDetailsFeatureEach{
        border-bottom: 5px solid ${primaryColors.black};

        &:last-child{
            border-bottom: 0;
        }
        &:nth-of-type(odd){
        background-color: rgba(255,255,255,0.85);
        }
        &:nth-of-type(even){
            background-color: ${primaryColors.white};
            .MuiGrid-container{
                flex-direction: row-reverse;
            }
           
        }
        

        .featureImg{
            height: 100%;
            display: flex;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .cmn_head{
                text-align: left;
            }
        .featureContent {
                padding: 40px 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .featureContentBtnWrap{
                padding-top: 15px;
            }
        }
       
    }

    .ourGround{
        background-color: #613F35;
        .ourGroundImg{
            display: flex;
            line-height: 0;
            img{
                height: 475px;
                width: 100%;
                object-fit: cover;
                @media (max-width: 899px) {
                    height: 350px;
                }
            }
        }
        .ourGroundContent{
            .cmn_head{
                h2{
                    color: ${primaryColors.white};
                }
            }
            p{
                color: ${primaryColors.white};
            }
        }
    }

    .propertyAmenities{
        background-color: rgba(255,255,255,0.85);
        .propertyAmenitiesRow{
           .propertyAmenitiesTextCol{
            @media (max-width: 899px) {
                order: 1;
            }
           }
        }
        .propertyAmenitiesImg{
            display: flex;
            line-height: 0;
            img{
                height: 480px;
                width: 100%;
                object-fit: cover;
                @media (max-width: 899px) {
                    height: 350px;
                }
            }
        }
        .propertyAmenitiesList{
            margin-bottom: 15px;
            padding-left: 20px;
            li{
                position: relative;
                padding: 0 0 0 15px;
                margin-bottom: 5px;
                text-transform: capitalize;
                &:last-child{
                    margin-bottom: 0;
                }
                &::before{
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 10px;
                    width: 6px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: ${primaryColors.black};
                }
            }
        }
    }

    .bookingRules{
        text-align: center;
        background-color: rgba(255,255,255,0.85);
        .bookingRulesInner{
            background-color: #613F35;
            padding-left: 30px;
            padding-right: 30px;
            .cmn_head{
                h2{
                    color: ${primaryColors.white};
                }
            }
            .bookingRulesInnerText{
                margin-bottom: 25px;
                p{
                    color: ${primaryColors.white};
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.7;
                }

            }
        }
    }
    
`