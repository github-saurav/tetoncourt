import React, { useState } from 'react'
import { TermsConditionsWrapperStyled } from '../styles/styledComponents/TermsConditionsWrapperStyled'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { assets } from '../json/assets'
import Wrapper from '../layout/Wrapper/Wrapper'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, List, ListItem, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet, HelmetProvider } from 'react-helmet-async'
const TITLE = 'Teton Court Motel - Terms and Conditions';
const TermsConditions = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Wrapper>
        <HelmetProvider>
        <Helmet>
        <title>{TITLE}</title>
        </Helmet>
        </HelmetProvider>
        <TermsConditionsWrapperStyled style={{ background: `url(${assets.propertyDetailsBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
<CommonInnerBanner innerBannerImage={assets.termsConditionsBanner} innerBannerText="TERMS & CONDITIONS" />
<Box className="policy cmn_gap">
    <Container fixed>
        <Box className="cmn_head">
            <Typography variant='h2'>OUR POLICIES</Typography>
        </Box>
        <Box className="policyAccordion">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Booking and Cancellation Policies
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Our season runs mid-May through early October, and availability is limited. These policies help us manage reservations fairly during our short operating window.
                        If you have questions, we encourage you to contact us directly before booking.
                    </Typography>

                    <Typography variant='h6'>Cancellation Policy</Typography>
                    <Typography variant='body1'><b>Standard Reservations</b></Typography>
                    <Typography variant='body1'>
                        For bookings made through our website, cancellations must be made at least fourteen (14) days before the day you check in, by 6:00 PM local time.  This applies to most reservations.
                    </Typography>
                    <List>
                        <ListItem>Cancellations made inside fourteen (14) days will be charged the full reservation amount.</ListItem>
                        <ListItem>No-shows are charged the full reservation amount.</ListItem>
                    </List>

                    <Typography variant='h6'>Early Departures</Typography>
                    <Typography variant='body1'>
                        If you shorten your stay after check-in, the applicable cancellation window still applies to the remaining nights.
                        For example, if your reservation required 14 days’ notice and you depart early without that notifying us 14 days before your departure, you are responsible for the remaining reserved nights.
                    </Typography>

                    <Typography variant='h6'>Third-Party Reservations</Typography>
                    <Typography variant='body1'>
                        Reservations made through Expedia, Hotels.com, Booking.com, or other third-party platforms are subject to the policies of that platform.
                        Cancellations must be processed directly through the site where you booked.
                        For the most flexibility and clarity, we recommend booking directly through our website or by phone.
                    </Typography>

                    <Typography variant='h6'>Notification of a Late Arrival</Typography>
                    <Typography variant='body1'>
                        We understand Wyoming is vast, and there are many things to see in our wonderful state.  If you plan to arrive late (after 9 PM), we appreciate a call to let us know before 9 PM so we can make smooth arrangements for you to get to your room.
                    </Typography>

                    <Typography variant='h6'>Payment & Reservation Guarantee</Typography>
                    <Typography variant='body1'>
                        We accept:
                        • Visa
                        • MasterCard
                        • Discover
                        • American Express
                    </Typography>
                    <Typography variant='body1'>
                        Cash is accepted at check-in; however, a valid credit card is required to secure all reservations.
                        Personal checks are generally not accepted.
                    </Typography>
                    <Typography variant='body1'>
                        For most reservations, a convenience charge of 3% of the reservation amount is applied.  This is passed on to the company that processes reservations.
                    </Typography>

                    <Typography variant='h6'>Credit Card Authorization</Typography>
                    <Typography variant='body1'>
                        We reserve the right to authorize or charge your card up to 14 days prior to arrival to guarantee your stay.
                        If your card is declined:
                        • We will attempt to contact you by phone or email.
                        • If we do not receive a response, the reservation may become non-guaranteed.
                        • Non-guaranteed reservations may be released after 4:00 PM on the day of arrival.
                    </Typography>
                    <Typography variant='body1'>
                        Because we regularly receive last-minute booking requests, guaranteed reservations are highly advised during peak season.
                    </Typography>
                    <Typography variant='body1'>
                        Questions?
                        If you’re unsure which cancellation window applies to your stay, please call us directly. We’re happy to clarify policies before you book.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Pet Policies
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        We welcome pets in select rooms. Some rooms must remain pet-free to accommodate guests with allergies, so pet-friendly rooms are limited and we suggest that they are requested in advance to improve availability.
                    </Typography>

                    <Typography variant='h6'>Declaring Your Pet</Typography>
                    <Typography variant='body1'>
                        All pets entering our property must be declared before arrival or at check-in.
                        • Pet fee: $20 per pet per night
                        • Extended stays may qualify for adjusted rates
                        • Pet fees are not included in third-party booking rates and are due at check-in
                        • This fee also applies to emotional support animals (ESAs)
                    </Typography>
                    <Typography variant='body1'>
                        Failure to declare (or under-declare) a pet will result in a minimum $50 penalty per undeclared pet per night.
                        If an undeclared pet occupies a non-pet-friendly room, additional cleaning fees will apply and will exceed $50, depending on the level of remediation required.
                    </Typography>

                    <Typography variant='h6'>Pet Room Guidelines</Typography>
                    <Typography variant='body1'>
                        • Pets must be housebroken (or a deposit may be required).
                        • Pets may never be left unattended in rooms.
                        • Pets must remain under your control at all times.
                        • Please clean up after your pet on the property.
                    </Typography>
                    <Typography variant='body1'>
                        Guests are financially responsible for any damage, excessive cleaning, or odor remediation caused by their pet. This includes, but is not limited to, stains, pet hair removal beyond normal cleaning, or lingering odors.
                    </Typography>

                    <Typography variant='h6'>Protecting Bedding & Furniture</Typography>
                    <Typography variant='body1'>
                        If your pet will be on the bed, please ask us for a pet sheet to cover the bedding. We are happy to provide one to help protect linens and avoid additional cleaning charges.
                    </Typography>

                    <Typography variant='h6'>Bathing Pets</Typography>
                    <Typography variant='body1'>
                        Do not bathe pets in the room without prior approval. Additional cleaning fees may apply.
                        In many cases, we can provide water and towels so you may clean your pet outside of the room.
                    </Typography>

                    <Typography variant='h6'>A Note on Courtesy</Typography>
                    <Typography variant='body1'>
                        We’re glad to accommodate responsible pet owners. These policies allow us to continue offering pet-friendly rooms while protecting guests with allergies and maintaining clean, comfortable accommodations for everyone.
                        If you have questions about bringing your pet, please contact us directly before booking.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Room Deposit, Conduct & Property Policy
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        <b>All Teton Court Motel rooms are non-smoking</b> of any kind, including cigarettes, cigars, marijuana, incense, and peace pipes.
                    </Typography>
                    <Typography variant='body1'>
                        Smoking is permitted only:
                        • At the front of the hotel
                        • At least 10 feet from the nearest guest room, or
                        • In front of the office
                    </Typography>
                    <Typography variant='body1'>
                        Please use designated containers for cigarette butts.
                        Any evidence of smoking inside a room will result in a $250 fee, plus any additional cleaning or remediation costs required to restore the room to a smoke-free condition.
                        Burning candles or incense inside rooms is not permitted.
                    </Typography>

                    <Typography variant='body1'>
                        <b>There is no cooking</b> (except microwaving) in rooms that don't have a kitchenette. In our kitchenette rooms, please wash all used dishes, pots and pans before your departing or <b>$25</b> "dirty dish cleaning fee" will be applied to your card.
                    </Typography>
                    <Typography variant='body1'>
                        You are permitted to use Hibachi or propane grills, but they must not be under or near any covered area for insurance purposes.
                    </Typography>

                    <Typography variant='h6'>Room Deposit & Damage Responsibility</Typography>
                    <Typography variant='body1'>
                        A valid credit card is required at booking and check-in to secure your stay and cover incidentals.
                        Guests are financially responsible for any damage, missing items, or excessive cleaning required beyond normal housekeeping standards.
                        If a room is damaged or left excessively dirty, charges will include:
                        • The full replacement cost of damaged or missing items
                        • $50 per hour labor required to restore the room to its original condition
                    </Typography>
                    <Typography variant='body1'>
                        This includes (but is not limited to):
                        • Bedding, towels, and linens
                        • Windows, screens, mirrors
                        • TVs, remotes, and electronics
                        • Appliances and fixtures
                        • Furniture and doors
                        • Excessive trash, stains, odors, or biohazards
                    </Typography>

                    <Typography variant='h6'>Towels & Linens</Typography>
                    <Typography variant='body1'>
                        Please do not use towels or washcloths for:
                        • Makeup removal
                        • Hair dye
                        • Cleaning shoes, vehicles, or bikes
                        • Dish cleaning
                        Permanent staining will result in replacement charges.
                        We are happy to provide complimentary makeup removal pads or cleaning rags upon request.
                    </Typography>

                    <Typography variant='h6'>Lost Keys</Typography>
                    <Typography variant='body1'>
                        Room keys must be returned at check-out.
                        A minimum $25 charge per key will be assessed if keys are not returned.
                        If a key is accidentally taken and mailed back within a reasonable timeframe, the charge may be refunded minus postage costs.
                    </Typography>

                    <Typography variant='body1'>
                        These policies allow us to maintain clean, comfortable rooms during our short operating season and to provide a positive experience for all guests.
                        If you have any questions about these policies, please contact us before or during your stay.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    Check-in and Check-out Policies
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Check-in begins at: <b>4:00 PM</b>
                    </Typography>
                    <Typography variant='body1'>
                        Earliest complimentary early check-in (with approval): <b>3:30 PM</b>
                    </Typography>
                    <Typography variant='body1'><b>Guaranteed Early Check-In Fees:</b></Typography>
                    <List>
                        <ListItem>Between 12 noon and 2 PM: $40 early check-in fee applies</ListItem>
                        <ListItem>Between 2 PM and 3:30 PM: $20 early check-in fee applies</ListItem>
                    </List>
                    <Typography variant='body1'>
                        Early access is subject to availability unless the applicable fee is agreed to in advance.
                        Please contact us in advance if you expect to arrive early.
                    </Typography>

                    <Typography variant='body1'>
                        Check-out ends at: <b>10:00 AM</b>
                    </Typography>
                    <Typography variant='body1'>
                        Complimentary late check-out (with approval): Until <b>11:00 AM</b>
                    </Typography>
                    <Typography variant='body1'><b>Late Check-Out Fees:</b></Typography>
                    <List>
                        <ListItem>Between 11 AM and 1 PM: $20 late check-out fee applies</ListItem>
                        <ListItem>Between 1 PM and 2 PM:  $40 late check-out fee applies</ListItem>
                        <ListItem>Between 2 PM and 3 PM:  $60 late check-out fee applies</ListItem>
                        <ListItem>After 3 pm: a full night's charge applies.</ListItem>
                    </List>

                    <Typography variant='body1'>
                        For check-out, please leave your room keys inside the room on the night stand or dresser or in the key drop-box (beside the entrance door outside of our office).
                    </Typography>
                    <Typography variant='body1'>
                        If you’re departing early in the morning, simply secure the room and head out.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Container>
</Box>

<Box className="policy cmn_gap">
    <Container fixed>
        <Box className="cmn_head">
            <Typography variant='h2'>FREQUENTLY ASKED QUESTIONS</Typography>
        </Box>

        <Box className="policyAccordion">
            <Accordion expanded={expanded === 'faqpanel1'} onChange={handleChange('faqpanel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel1-content"
                    id="faqpanel1-header"
                >
                    Do you allow pets?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Yes, we accept well-behaved pets in some rooms. All pets must be declared in advance. A separate pet fee applies ($25 per pet for your entire stay). If pets are not delcared or underdeclared, we will charge a $100 cleaning fee for each undeclared pet. Pets must be housebroken or a separate refundable deposit against cleaning needs to be made.
                    </Typography>
                    <Typography variant='body1'>
                        A pet fee is charged if a pet enters the room.
                    </Typography>
                    <Typography variant='body1'>
                        Nearly all of the pets that stay with us are well-behaved, however, to ensure the enjoyment of all guests, pets cannot be left alone in the rooms nor can they create a nuisance by making excessive noise.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel2'} onChange={handleChange('faqpanel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel2-content"
                    id="faqpanel2-header"
                >
                    What are your check-in/check-out times?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Check-in begins at 4 PM. Check-out is 10 AM. We do allow earlier check-ins and later check-outs if arranged in advance. Sometimes an additional fee will apply. Please see our policies for more information.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel3'} onChange={handleChange('faqpanel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel3-content"
                    id="faqpanel3-header"
                >
                    Do you have a swimming pool?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        As with all of the smaller properties in town, we do not have a swimming pool. However, Pinedale has an excellent aquatic center that is open to the public and is located four blocks from the Teton Court. It offers an Olympic sized indoor pool with lap lanes, a shallow pool with slides and a lazy river, and a hot tub. It also offers a full gym, and a rock climbing wall.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'faqpanel4'} onChange={handleChange('faqpanel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel4-content"
                    id="faqpanel4-header"
                >
                    What hours are your office and lobby open?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Between late May/early June and late September, the Teton Court office is open from 9 AM to 9 PM each day. We reside on the property so can arrange for arrivals after hours if necessary. Late arrivals can be arranged by calling or texting (307) 367-3367 or by emailing us in advance.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel5'} onChange={handleChange('faqpanel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel5-content"
                    id="faqpanel5-header"
                >
                    Are you open year round?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        No, we are a seasonal property and open from late May/early June to late September each year.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel6'} onChange={handleChange('faqpanel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel6-content"
                    id="faqpanel6-header"
                >
                    Do your rooms have air conditioning and heat?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        All rooms have heating.
                    </Typography>
                    <Typography variant='body1'>
                        We do offer two types of rooms. Most of our rooms have quiet fans, but we also offer air conditioned rooms with 2 double beds.
                    </Typography>
                    <Typography variant='body1'>
                        Due to the high elevation (nearly 7200 ft, or 2200 meters above sea level) and the crisp, dry air of Pinedale, summer days are warm but summer nights usually drop to the upper 30s to low 40s Fahrenheit (4-7 degrees Celsius). Most local residents and many guests find that a fan is sufficient for a comfortable night's sleep.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Container>
</Box>

<Box className="policy cmn_gap">
    <Container fixed>
        <Box className="cmn_head">
            <Typography variant='h2'>Cookie Statements</Typography>
        </Box>

        <Box className="policyAccordion">
            <Accordion expanded={expanded === 'faqpanel1'} onChange={handleChange('faqpanel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel1-content"
                    id="faqpanel1-header"
                >
                    Do you allow pets?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Yes, we accept well-behaved pets in some rooms. All pets must be declared in advance. A separate pet fee applies ($25 per pet for your entire stay). If pets are not delcared or underdeclared, we will charge a $100 cleaning fee for each undeclared pet. Pets must be housebroken or a separate refundable deposit against cleaning needs to be made.
                    </Typography>
                    <Typography variant='body1'>
                        A pet fee is charged if a pet enters the room.
                    </Typography>
                    <Typography variant='body1'>
                        Nearly all of the pets that stay with us are well-behaved, however, to ensure the enjoyment of all guests, pets cannot be left alone in the rooms nor can they create a nuisance by making excessive noise.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel2'} onChange={handleChange('faqpanel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel2-content"
                    id="faqpanel2-header"
                >
                    What are your check-in/check-out times?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Check-in begins at 4 PM. Check-out is 10 AM. We do allow earlier check-ins and later check-outs if arranged in advance. Sometimes an additional fee will apply. Please see our policies for more information.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel3'} onChange={handleChange('faqpanel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel3-content"
                    id="faqpanel3-header"
                >
                    Do you have a swimming pool?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        As with all of the smaller properties in town, we do not have a swimming pool. However, Pinedale has an excellent aquatic center that is open to the public and is located four blocks from the Teton Court. It offers an Olympic sized indoor pool with lap lanes, a shallow pool with slides and a lazy river, and a hot tub. It also offers a full gym, and a rock climbing wall.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'faqpanel4'} onChange={handleChange('faqpanel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel4-content"
                    id="faqpanel4-header"
                >
                    What hours are your office and lobby open?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Between late May/early June and late September, the Teton Court office is open from 9 AM to 9 PM each day. We reside on the property so can arrange for arrivals after hours if necessary. Late arrivals can be arranged by calling or texting (307) 367-3367 or by emailing us in advance.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel5'} onChange={handleChange('faqpanel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel5-content"
                    id="faqpanel5-header"
                >
                    Are you open year round?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        No, we are a seasonal property and open from late May/early June to late September each year.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'faqpanel6'} onChange={handleChange('faqpanel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faqpanel6-content"
                    id="faqpanel6-header"
                >
                    Do your rooms have air conditioning and heat?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        All rooms have heating.
                    </Typography>
                    <Typography variant='body1'>
                        We do offer two types of rooms. Most of our rooms have quiet fans, but we also offer air conditioned rooms with 2 double beds.
                    </Typography>
                    <Typography variant='body1'>
                        Due to the high elevation (nearly 7200 ft, or 2200 meters above sea level) and the crisp, dry air of Pinedale, summer days are warm but summer nights usually drop to the upper 30s to low 40s Fahrenheit (4-7 degrees Celsius). Most local residents and many guests find that a fan is sufficient for a comfortable night's sleep.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Container>
</Box>
        </TermsConditionsWrapperStyled>
        </Wrapper>
    )
}

export default TermsConditions