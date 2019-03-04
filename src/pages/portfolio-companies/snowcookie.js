import React from 'react';
import Company from '../../components/company-profile';
import LogoL from '../../../static/logos_portfolio/Logos-Portfolio-svg-snowcookie-01.svg';

const Avaneo = () => (
    <Company 
        title="Snowcookie"
        shortdesc=""
        image={LogoL}
        founded="09/2018"
        location="Zurich"
        management="Martin Kawalski, Lucian Wagner"
        investment="Seed"
        segment="IoT for Sport"
        website="https://www.snowcookiesports.com"
        paragraph="Snowcookie is the world's only smart skiing system which independently captures the motion of the body and the skis with three Oreo-sized devices, one worn on user's chest and the other two attached to the skis. Packing a full suite of sensors which stream motion data to an A.I.-powered app for iPhone, Snowcookie promises to take its users’ technique and progression to never before imagined levels. It precisely measures dozens of skiing parameters, analyzes your carving, style and body position to deliver actionable insights."
    />
)

export default Avaneo