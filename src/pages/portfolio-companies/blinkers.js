import React from 'react';
import Company from '../../components/company-profile';
import LogoC from '../../../static/logos_portfolio/Logos-Portfolio-svg-BLINKERS-01.svg';

const Avaneo = () => (
    <Company 
        title="Blinkers (Velohub)"
        shortdesc=""
        image={LogoC}
        founded="06/2016"
        location="Zurich"
        management="Javier Bilbao, Javier Fernandez de Alegria"
        investment="Pre-Seed"
        segment="Creation and distribution of smart-technology devices"
        website="https://www.blinkers.bike"
        paragraph="Blinkers wants to improve safety on bikes, by building the next generation of bike lights. Be visible, understood and expected by other vehicles, whatever the angle and the situation."
    />
)

export default Avaneo