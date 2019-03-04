import React from 'react';
import Company from '../../components/company-profile';
import LogoF from '../../../static/logos_portfolio/Logos-Portfolio-svg-evolute-01.svg';

const Avaneo = () => (
    <Company 
        title="Evolute"
        shortdesc=""
        image={LogoF}
        founded="05/2016"
        location="Zurich"
        management="Markus Bührer, Andreas Ruflin, Raphael Suter, Michael Hartweg, Mark Gustafson, Michael Gauckler, Pascal Lemann"
        investment="Series-A"
        segment="Investment consulting"
        website="https://www.evolute.com"
        paragraph="The Evolute platform is a unique, comprehensive digital Asset Management solution for independent asset managers and banks. The combination of intelligent technology, profound knowledge and personal consulting enables a solution-focussed and individual offering for asset managers."
    />
)

export default Avaneo