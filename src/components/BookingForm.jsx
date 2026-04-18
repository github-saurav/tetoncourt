import { useEffect } from 'react'
import Box from '@mui/material/Box';
import $ from 'jquery';

const BookingForm = () => {
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
    <form
      id="resnexus-widget"
      name="resnexus-widget"
      action="https://resnexus.com/resnexus/reservations/book/ACC0A5D5-05DA-442A-9B9B-A96644E4C846"
      method="get"
    >
      <Box className="bookingBar">

        <Box className="bookingItem">
          <label htmlFor="RN-StartDate">Check-in:</label>
          <input type="text" id="RN-StartDate" name="StartDate" className="resnexus-datepicker" />
        </Box>

        <Box className="bookingItem">
          <label htmlFor="RN-EndDate">Check-out:</label>
          <input type="text" id="RN-EndDate" name="EndDate" className="resnexus-datepicker" />
        </Box>

        <Box className="bookingItem small">
          <label htmlFor="NumGuests"># Guests:</label>
          <select id="NumGuests" name="NumGuests">
            {[1,2,3,4,5,6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </Box>

        <Box className="bookingItem">
          <label htmlFor="resnexus-roomclass">Unit Type:</label>
          <select id="resnexus-roomclass" name="roomclass">
            <option value="2">Single King</option>
            <option value="7">Single King (Dog-Friendly)</option>
            <option value="3">Double Double (Dog-Friendly)</option>
            <option value="8">AirCon Double Double (Dog-Friendly)</option>
            <option value="4">AirCon Double Double</option>
            <option value="9">Superior Double Double (Dog-Friendly)</option>
            <option value="5">Superior Double Double</option>
            <option value="6">The Old Cabin with 3 Queens (Dog-Friendly)</option>
          </select>
        </Box>

        <button type="submit" id="resnexus-widget-submit" className="bookingBtn">
          Check Availability
        </button>

      </Box>
    </form>
  );
};

export default BookingForm;