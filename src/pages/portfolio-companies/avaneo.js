import React from 'react';
import Company from '../../components/company-profile';
import LogoA from '../../../static/logos_portfolio/Logos-Portfolio-svg-Avaneo-01.svg';

const Avaneo = () => (
    <Company 
        title="Avaneo"
        shortdesc=""
        image={LogoA}
        founded="08/2016"
        location="Zurich"
        management="Michael Brentari"
        investment="Seed, Round A and B"
        segment="Fiduciary Services"
        website="https://avaneo.ch"
        paragraph="Avaneo is a young trust company based in the city of Zurich. The client portfolio ranges from a potpourri of wild startups to long-established companies."
    />
)

export default Avaneo