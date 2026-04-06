import React, { useEffect } from 'react'
import { HomeBannerWrapperStyled } from '../../styles/styledComponents/HomeBannerWrapperStyled'
import { assets } from '../../json/assets'
import { Container, Typography, Box, Grid } from '@mui/material'
import CustomButton from '../../ui/CustomButton/CustomButton'
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';

const HomeBanner = () => {
    useEffect(() => {
        function rn_dateRangeValidator(dateText) {
            var $container = $(this).closest('form[name="resnexus-widget"]');
            var $startDateContainer = $container.find('input[name="StartDate"]');
            var $endDateContainer = $container.find('input[name="EndDate"]');

            var checkInDate = new Date($startDateContainer.val());
            var checkOutDate = new Date($endDateContainer.val());
            var thisDate = new Date(dateText);

            if ($(this).attr('name') === "StartDate" && thisDate > checkOutDate) {
                $endDateContainer.val(dateText).change();
            } else if ($(this).attr('name') === "EndDate" && thisDate < checkInDate) {
                $startDateContainer.val(dateText).change();
            }
        }
        
        $(function () {
            $("#RN-StartDate").datepicker({
                onSelect: rn_dateRangeValidator,
                minDate: 0,
                beforeShow: function (input, inst) {
                    console.log("before");
                    console.log(input);
                    console.log(inst);
                    setTimeout(function(){
                        inst.dpDiv.outerWidth($(input).outerWidth());
                    },0);
                },
                onChangeMonth: function (year, month, inst) {
                    setTimeout(function(){
                        inst.dpDiv.outerWidth($(inst.input).outerWidth());
                    },0);
                }
            });
        });

        $(function () {
            $("#RN-EndDate").datepicker({
                onSelect: rn_dateRangeValidator,
                minDate: 1,
                beforeShow: function (input, inst) {
                    console.log("before");
                    console.log(input);
                    console.log(inst);
                    setTimeout(function(){
                        inst.dpDiv.outerWidth($(input).outerWidth());
                    },0);
                },
                onChangeMonth: function (year, month, inst) {
                    setTimeout(function(){
                        inst.dpDiv.outerWidth($(inst.input).outerWidth());
                    },0);
                }
            });
        });

        window.onload = function () {
            var d = new Date();
            var date = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
            document.getElementById("RN-StartDate").value = date;

            d.setDate(d.getDate() + 1);
            date = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
            document.getElementById("RN-EndDate").value = date;
        };
    }, []);

    return (
        <HomeBannerWrapperStyled 
            style={{ 
                position: 'relative',
                overflow: 'hidden',
                minHeight: '80vh',           // ← adjust this value to match your desired banner height
                backgroundColor: '#000'      // fallback color while video loads
            }}
        >
            <video
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -2,
  }}
  onError={(e) => {
    console.error("Video element error:", e);
    if (e.target.error) {
      console.error("MediaError code:", e.target.error.code);
      console.error("MediaError message:", e.target.error.message);
    }
  }}
  // Also listen on the source if needed
>
  <source
    src={assets.homeBannerVideo}
    type="video/mp4"
    onError={(e) => {
      console.error("SOURCE failed to load:", e);
      console.log("Source src was:", e.target.src);
      // Optional: check network status
      fetch(e.target.src, { method: 'HEAD' })
        .then(res => console.log("HEAD status for source:", res.status))
        .catch(err => console.error("HEAD fetch failed:", err));
    }}
  />
  Your browser does not support the video tag.
</video>
            
            <div 
                style={{
                    position: 'absolute',
                    inset: 0,
                   // background: 'rgba(0, 0, 0, 0.45)', // ← change 0.45 to 0.3–0.6 depending on your text contrast needs
                    zIndex: -1,
                }}
            />

            {/* ──────────────────────────────────────────────── */}
            {/* All your original content stays exactly the same */}
            {/* ──────────────────────────────────────────────── */}

            <Container fixed>
                <Box className="homeBannerLogo">
                    <figure>
                        <img src={assets.tetonCircleLogo} alt="" />
                    </figure>
                </Box>
                <Box className="homeBannerContent">
                    <Typography variant="h1">
                        WELCOME TO THE<br />
                        Teton Court Motel
                    </Typography>
                    
                </Box>
                <Box className="bannerCalendar">
                    <form id="resnexus-widget" name="resnexus-widget" action="https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846" method="get">
                        <Grid container className='bannerCalendarStack' columnSpacing={2} rowSpacing={2}>
                            <Grid item md={6} xs={12}>
                                <Box className="bannerCalendarInput">
                                    <label htmlFor="RN-StartDate">Check-in:</label>
                                    <input type="text" id="RN-StartDate" name="StartDate" size="20" className="resnexus-datepicker bannerCalendar_cmnInput" />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box className="bannerCalendarInput">
                                    <label htmlFor="RN-EndDate">Check-out:</label>
                                    <input type="text" id="RN-EndDate" name="EndDate" size="20" className="resnexus-datepicker bannerCalendar_cmnInput" />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <label htmlFor="NumGuests">Guests</label>
                                <select id="NumGuests" name="NumGuests" className='bannerCalendar_cmnSelect'>
                                    <option value="1">1</option>
                                    <option value="2" >2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <label htmlFor="resnexus-roomclass">Unit Type</label>
                                <select id="resnexus-roomclass" name="roomclass" className='bannerCalendar_cmnSelect'>
                                    <option value="2">Single King</option>
                                    <option value="7">Single King (Dog-Friendly)</option>
                                    <option value="3">Double Double (Dog-Friendly)</option>
                                    <option value="8">AirCon Double Double (Dog-Friendly)</option>
                                    <option value="4">AirCon Double Double</option>
                                    <option value="9">Superior Double Double (Dog-Friendly)</option>
                                    <option value="5">Superior Double Double</option>
                                    <option value="6">The Old Cabin with 3 Queens (Dog-Friendly)</option>
                                </select>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Box className="bannerCalendarSubmit">
                                    <CustomButton 
                                        buttonColor='black' 
                                        buttonTypeSubmit 
                                        id="resnexus-widget-submit" 
                                        className="homeBannerBookBtn"
                                    >
                                        BOOK NOW
                                    </CustomButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </HomeBannerWrapperStyled>
    )
}

export default HomeBanner