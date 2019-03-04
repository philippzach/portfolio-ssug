import React from 'react';
import Company from '../../components/company-profile';
import LogoM from '../../../static/logos_portfolio/Logos-Portfolio-svg-sst-01.svg';

const Avaneo = () => (
    <Company 
        title="Swiss Startup Tech"
        shortdesc=""
        image={LogoM}
        founded="08/2014"
        location="Zurich"
        management="Oliver Walzer, Max Meister, Mike Baur"
        investment=""
        segment="Electronic data processing"
        website="https://www.ssut.ch"
        paragraph="Swiss Startup Tech  enables companies to plan, design and transform the potential of Digitalization and to turn the concept of blockchain into business results.  We love to build things and thus combine future customer needs with technological potential. With our pragmatic and result-oriented iterative approach, we develop PoC, prototypes and MVPs for compelling and profitable customer experiences. We love to improve the interaction with your products and services and work therefore in small interdisciplinary teams and deliver in record time."
    />
)

export default Avaneo