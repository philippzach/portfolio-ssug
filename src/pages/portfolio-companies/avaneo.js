import React from 'react';
import Company from '../../components/company-profile';
import LogoA from '../../../static/logos_portfolio/Logos-Portfolio-svg-Avaneo-01.svg';

const Avaneo = () => (
    <Company 
        title="Avaneo"
        shortdesc="Some short description"
        image={LogoA}
        founded="2018"
        location="Zurich"
        management="Me you Him Her"
        investment="Seed, Round A and B"
        segment="Legal Services"
        website="https://avaneo.ch"
        paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    />
)

export default Avaneo