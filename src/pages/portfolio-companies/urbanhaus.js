import React from 'react';
import Company from '../../components/company-profile';
import LogoM from '../../../static/logos_portfolio/urbanhouse.svg';

const Urbanhouse = () => (
  <Company
    title='UrbanHaus'
    shortdesc=''
    image={LogoM}
    founded='04/2020'
    location='Zurich'
    management='Camila Medeiros, Andreas Gysler
'
    investment='Pre-seed'
    segment='Co-living'
    website='https://www.urbanhaus.ch'
    paragraph='UrbanHaus was founded in 2020 by Camila Medeiros and Andreas Gysler. UrbanHaus offers beautiful fully furnished rooms with hassle free services such as cleaning and wi-fi. Additionally, UrbanHaus aims at creating a community of like-minded people by organizing events. UrbanHaus is a place to live for modern professionals.'
  />
);

export default Urbanhouse;
