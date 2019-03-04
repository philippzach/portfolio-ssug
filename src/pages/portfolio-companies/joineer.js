import React from 'react';
import Company from '../../components/company-profile';
import LogoI from '../../../static/logos_portfolio/Logos-Portfolio-svg-joineer-01.svg';

const Avaneo = () => (
    <Company 
        title="Joineer"
        shortdesc=""
        image={LogoI}
        founded="04/2017"
        location="Zurich"
        management="David Wartmann, Fabian Jäger, Nicola Ferroni, David Christen, Dr. Hansruedi Heeb"
        investment="Pre-Seed"
        segment="HR, technology"
        website="https://www.joineer.com"
        paragraph="Joineer develops digital HR tools. Nothing has changed since it was founded in 2016. In the founding phase, however, a recruitment tool was the focus, while now everything revolves around the team barometer. It allows the preparation and analysis of structured employee surveys, which in turn are based on a positive psychology approach and attach importance to concrete suggestions for change - feedforward instead of feedback."
    />
)

export default Avaneo