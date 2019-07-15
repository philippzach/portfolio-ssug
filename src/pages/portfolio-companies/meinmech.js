import React from 'react';
import Company from '../../components/company-profile';
import Logo from '../../../static/logos_portfolio/meinmech.svg';

const Mech = () => (
    <Company 
        title="MeinMech AG"
        shortdesc=""
        image={Logo}
        founded="05/2019"
        location="Zurich"
        management="Naim Osmani"
        investment="Pre-Seed"
        segment="Mobility Service"
        website="https://www.meinmech.ch/"
        paragraph="MyMech offers for any work on vehicles. From changing timing belts or brakes to servicing car or repairing damage. MeinMech offers an all-round service at an attractive price-performance ratio."
    />
)

export default Mech