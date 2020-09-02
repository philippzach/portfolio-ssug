import React from 'react';
import Company from '../../components/company-profile';
import LogoL from '../../../static/logos_portfolio/quarterfood.svg';

const Quaterfood = () => (
  <Company
    title='Quarterfood'
    shortdesc=''
    image={LogoL}
    founded='09/2019'
    location='Zurich'
    management='Christian Philippi'
    investment='Pre-seed'
    segment='E-Commerce'
    website='https://www.quarterfood.ch'
    paragraph='Specialist meat shops are in a gap between stationary trade and digitization. Quarterfood is a digital platform that brings together specialist meat shops and end customers'
  />
);

export default Quaterfood;
