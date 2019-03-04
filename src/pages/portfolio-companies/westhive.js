import React from 'react';
import Company from '../../components/company-profile';
import LogoP from '../../../static/logos_portfolio/Logos-Portfolio-svg-westhive-01.svg';

const Avaneo = () => (
    <Company 
        title="Westhive"
        shortdesc=""
        image={LogoP}
        founded="10/2017"
        location="Zurich"
        management="Andreas Widmer, Claus Bornholt, Bruno Rambaldi"
        investment="Seed"
        segment="Real estate transactions and advisory services"
        website="https://www.westhive.com"
        paragraph="Westhive is the first location of a new coworking & innovation ecosystem with initially 180 workstations. In addition to flexibly rentable workplaces in a creative and inspiring environment, the main focus is on the cooperation of future tenants. In the so-called Innovation Ecosystem - consisting of startups, companies and professional services - new business models are jointly created which, based on innovative concepts, many years of experience and state-of-the-art technology, increasingly focus on the consumer."
    />
)

export default Avaneo