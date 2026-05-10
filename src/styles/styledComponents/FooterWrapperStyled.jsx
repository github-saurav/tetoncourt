import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const FooterWrapperStyled = styled(Box)`
background-color: ${primaryColors.white};

.footerTop{
    padding: 50px 0 40px;
    border-bottom: 1px solid ${primaryColors.black};
    @media (max-width: 899px) {
        padding: 35px 0 30px;
    }
    .footerTopRow{
        display: grid;
        grid-template-columns: 285px minmax(220px, 1fr) minmax(220px, 1fr) minmax(235px, 255px);
        column-gap: 52px;
        align-items: start;
        @media (max-width: 1199px) {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.72fr);
            gap: 30px 44px;
            margin-bottom: 0;
        }
        @media (max-width: 899px) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        .footerTopCol {
            padding: 0;
            @media (max-width: 1199px) {
                width: auto;
            }
            @media (max-width: 599px) {
                text-align: center;
            }
            &.footerTopColPadding{
                padding-top: 20px;
                @media (max-width: 1199px) {
                    padding-top: 0;
                }
            }
            &.footerTopLogoCol{
                width: auto;
                @media (max-width: 1199px) {
                    grid-column: 1 / -1;
                    text-align: center;
                }
                
            }
            &.footerTopLocationContactCol{
                grid-column: span 2;
                width: auto;
                @media (max-width: 1199px) {
                    grid-column: auto;
                }
                @media (max-width: 899px) {
                    grid-column: 1;
                }
            }
            &.footerTopSocialCol{
                width: auto;
                @media (max-width: 899px) {
                    grid-column: 1;
                }
            }
            .footerLogo{
                width: 300px;
                @media (max-width: 899px) {
                    width: 250px;
                }
                @media (max-width: 599px) {
                    width: 230px;
                }
            }
            &.footerTopLogoCol .footerSocialList{
                margin-top: 35px;
            }
            p{
                color: ${primaryColors.black};
                margin-bottom: 16px;
                font-size: 14px;
                &.footerTitle{
                    color: ${primaryColors.black};
                    margin-bottom: 16px;
                    font-size: 18px;
                    font-family: "Yeseva One", serif;
                }
                &.footerLocationDetails{
                    max-width: 250px;

                    @media (max-width: 899px) {
                        max-width: initial;
                    }
                }

            }
            .footerAddressRow{
                display: flex;
                gap: 52px;

                @media (max-width: 1199px) {
                    gap: 36px;
                }
                @media (max-width: 599px) {
                    flex-direction: column;
                    gap: 0;
                }
            }
            .footerAddressBlock{
                flex: 1 1 0;
                min-width: 0;
            }
            .footerSiteMapBlock{
                margin-top: 24px;

                @media (max-width: 599px) {
                    margin-top: 20px;
                }
            }
            .footerConactLinkList{
                margin-top: 3px;
                li{
                    padding: 0;
                    margin-bottom: 7px;
                    @media (max-width: 599px) {
                        justify-content: center;
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }

                    a{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: ${primaryColors.black};
                        i{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-right: 10px;
                        }
                    }
                }
            }
            .footerSiteMapList{
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px 24px;
                li{
                    margin-bottom: 0;
                    width: initial;

                    @media (max-width: 599px) {
                        justify-content: center;
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }
                    padding: 0;
                    a{
                        color: ${primaryColors.black};
                        position: relative;
                        font-size: 14px;
                        padding-bottom: 3px;
                        &::after{
                            position: absolute;
                            content: "";
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1px;
                            width: 0;
                            background-color: ${primaryColors.black};
                            transition: 0.3s all ease;
                        }
                        &.active{
                            &::after{
                                width: 100%;
                            }
                        }
                        &:hover{
                            &::after{
                                width: 100%;
                            }
                        }
                    }
                }
            }
            .footerBookBtn{
                margin-bottom: 15px;
            }
            .footerSocialList{
                display: flex;
                align-items: center;
                margin: 0 -10px;

                @media (max-width: 1199px) {
                    justify-content: center;
                    margin-left: -10px;
                    margin-right: -10px;
                }
                @media (max-width: 599px) {
                    margin-top: 25px;
                }
                li{
                    padding: 0 10px;
                    width: initial;
                    a{
                        border: 2px solid ${primaryColors.black};
                        border-radius: 100%;
                        padding: 0;
                        width: 37px;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover{
                            transform: rotate(360deg);
                        }
                    }
                }
            }

        }
    }
}
.footerBot{
    padding: 30px 0 50px;
    @media (max-width: 899px) {
        padding: 25px 0;
    }
    .footerBotRow {
        @media (max-width: 1199px) {
            flex-direction: column !important;
            align-items: center;
            gap: 10px;
            justify-content: center;
            .footerBotRight {
                margin-left: 0;
                margin-bottom: 0;
            }
            .footerBotLeft {
                order: 1;
            }
        }
    }
    ul{
        margin: 0 -15px -10px;
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 899px) {
            justify-content: center;
        }
        li{
            width: initial;
            padding: 0 15px;
            margin-bottom: 10px;
            display: block;
            font-size: 14px;
            color: ${primaryColors.black};
            @media (max-width: 899px) {
                text-align: center;
            }
            a{
                color: ${primaryColors.black};
                font-size: 14px;
                &:hover, &.active{
                    text-decoration: underline;
                }
            }
            @media (max-width: 359px) {
                font-size: 13px;
                a{
                    font-size: 13px;
                }
            }
        }
    }
}

`
