import { Box, styled } from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";

export const TermsConditionsWrapperStyled = styled(Box)`
    .cmn_head{
        margin-bottom: 50px;
    }

   .MuiAccordionSummary-content {
    font-family: "Raleway", sans-serif;
    }

    .policyAccordion {
    font-family: "Raleway", sans-serif;
    }

     .policyAccordion p {
    font-family: "Raleway", sans-serif;
    }

    .policyAccordion h1,
    .policyAccordion h2,
    .policyAccordion h3,
    .policyAccordion h4,
    .policyAccordion h5,
    .policyAccordion h6,
    .policyAccordion p,
    .policyAccordion b,
    .policyAccordion span,
    .policyAccordion li {
    font-family: "Raleway", sans-serif;
    }

    .MuiAccordion-root{
        margin-bottom: 30px !important;
        box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 16%);
        border-radius: 5px !important;
        &:last-child{
            margin-bottom: 0;
        }
        &::before{
            display: none;
        }
    }
    .MuiAccordionSummary-root{
        background-color: rgba(0,0,0,.03);
        font-weight: 600;
        min-height: 55px;
        color: ${primaryColors.steelBlue};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        .MuiAccordionSummary-expandIconWrapper{
            color: ${primaryColors.steelBlue};
        }
        .MuiAccordionSummary-content{
                margin: 0;
                padding: 12px 0;
            }
        &.Mui-expanded{
            background-color: ${primaryColors.steelBlue};
            color: ${primaryColors.white};
            min-height: 55px;
            .MuiAccordionSummary-content{
                margin: 0;
            }
            .MuiAccordionSummary-expandIconWrapper{
                color: ${primaryColors.white};
            }
        }
    }

    .MuiAccordionDetails-root {
        padding: 20px 25px;
    }

    ul{
            margin-bottom: 15px;
            padding-left: 20px;
            li{
                position: relative;
                padding: 0 0 0 15px;
                margin-bottom: 10px;
                display: block;
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
        .policy{
            border-bottom: 5px solid ${primaryColors.black};
            background-color: ${primaryColors.white};
            &:last-child{
                border-bottom: 0;
            }

            &:nth-of-type(odd){
                background-color: rgba(255,255,255,0.85);
            }
        }
`