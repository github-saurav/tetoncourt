import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";




export const HeaderWrapperStyled = styled(Box)`
  .headerContainer {
    background-color: ${primaryColors.white} !important;
    padding: 15px 0;
    transition: all 0.4s ease;
    
    @media (max-width: 899px) {
        padding: 10px 0;
    }
    &.fixed{
        background-color: ${primaryColors.white} !important;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 8px 2px;

        .headerMenu{
            .headerLogo{
                width: 200px;
            }
            .headerPhoneLink{
                font-size: 13px;
            }
            ul{
                li{
                    a{
                        color: ${primaryColors.black};

                        &::after{
                            background-color: ${primaryColors.black};
                        }

                        
                    }
                }
            }
        }
    }
  }
  
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
.headerMenu{
    margin: 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    .headerBrand{
        width: 250px;
        margin: 0 20px;
        text-align: center;
        flex: 0 0 auto;
    }
    .headerLogo{
        width: 250px;
        display: block;
        &::after{
            display: none;
        }
    }
    .headerPhoneLink{
        color: ${primaryColors.black};
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.1;
        margin-top: 4px;
        padding-bottom: 2px;
        position: relative;

        &::after{
            position: absolute;
            content: "";
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: ${primaryColors.black};
            transition: 0.3s all ease;
        }
        &:hover{
            color: ${primaryColors.black};
            &::after{
                width: 100%;
            }
        }
    }
    ul{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0 -10px;
        flex: 2 1 0;
        &.left_nav{
            justify-content: flex-end;
        }
        &.right_nav{
            justify-content: flex-start;
        }
        li{
            width: initial;
            padding: 0 10px;
            a{
                
                position: relative;
                color: ${primaryColors.black};
                padding-bottom: 3px;

                &::after{
                    position: absolute;
                    content: "";
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    width: 0;
                    background-color: ${primaryColors.black};
                    transition: 0.3s all ease;
                }
              
                &:hover, &.active{
                    &::after{
                        width: 100%;
                    }
                }
            }
        }
    }
}
.mobileHeaderMenu{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1199px) {
        display: none;
    }

    .headerBrand{
        width: 180px;
        text-align: center;

        @media (max-width: 599px) {
            width: 150px;
        }
    }
    .headerLogo{
        width: 100%;
        display: block;

        @media (max-width: 599px) {
            width: 100%;
        }
    }
    .headerPhoneLink{
        color: ${primaryColors.black};
        display: inline-block;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.1;
        margin-top: 2px;

        @media (max-width: 599px) {
            font-size: 12px;
        }
    }
    .headerMenuIcon{
        color: ${primaryColors.buttonPrimary};
    }
}



`
