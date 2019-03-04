import React from 'react';
import Company from '../../components/company-profile';
import LogoE from '../../../static/logos_portfolio/Logos-Portfolio-svg-carhelper-01.svg';

const Avaneo = () => (
    <Company 
        title="Carhelper"
        shortdesc=""
        image={LogoE}
        founded="06/2016"
        location="Zurich"
        management="Matthias Gerber, Aleksandar Stevanovic"
        investment="Pre-Seed"
        segment="Mobility, Software"
        website="https://www.carhelper.ch"
        paragraph="Carhelper.ch is the largest Swiss comparison and booking platform for car service and repairs. What makes Carhelper unique is a sophisticated algorithm that combines data from the Federal Roads Office (ASTRA), vehicle manufacturers and partner workshops. The customer thus not only receives the best price, but also a recommendation as to which maintenance work should be carried out on his car with the appropriate age and mileage. It’s like booking.com but for cars."
    />
)

export default Avaneo