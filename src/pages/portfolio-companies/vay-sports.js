import React from 'react';
import Company from '../../components/company-profile';
import LogoA from '../../../static/logos_portfolio/vay.svg';

const Vay = () => (
    <Company 
        title="VAY Sports AG"
        shortdesc=""
        image={LogoA}
        founded="06/2019"
        location="Zurich"
        management="Joel Roos, Caspar Leuzinger, Patrizio Bonzani"
        investment="Pre-Seed"
        segment="Lifestyle & Sports"
        website="https://vay-sports.com/"
        paragraph="Personal trainers are very effective, but they come at their price. Now there is the personal coach as an app for your mobile phone. VAY Sports, a spin-off startup from the University of Zurich, has launched the first digital fitness coach - which uses artificial intelligence to motivate and correct the user in real time on the exercise execution."
    />
)

export default Vay