import React from 'react';
import Company from '../../components/company-profile';
import LogoG from '../../../static/logos_portfolio/Logos-Portfolio-svg-gowago-01.svg';

const Avaneo = () => (
    <Company 
        title="Gowago"
        shortdesc=""
        image={LogoG}
        founded="10/2017"
        location="Zurich"
        management="Iwan Gloor, Rutger Verhoef, Leo Chevailler"
        investment="Pre-Seed"
        segment="Mobility, Software"
        website="https://www.gowago.ch"
        paragraph="Gowago is the first car leasing comparison service in Switzerland. By searching the inventory of distributors and partners throughout Switzerland, you create an overview of the car market to give and find the best deals. Gowago works with leading banks, manufacturers, insurance companies and other players in the industry to offer our customers the best possible products and the best possible experience."
    />
)

export default Avaneo