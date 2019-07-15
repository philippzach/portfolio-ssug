import React from 'react';
import Company from '../../components/company-profile';
import LogoA from '../../../static/logos_portfolio/infeas.svg';

const Infeas = () => (
    <Company 
        title="Infeas AG"
        shortdesc=""
        image={LogoA}
        founded="04/2019"
        location="Zurich"
        management="Sven Roost, Markus Kameisis"
        investment="Service"
        segment="Accounting"
        website="https://infeas.com/"
        paragraph="Infeas offers administrative tasks (incorporation, capital increase, capital reduction, changes in the commercial register, opening a bank account, etc.) and on the accounting side so that one concentrate on one’s business. Furthermore Infeas offers consulting and administration of takeovers, mergers or sales of companies, savings plans, development of a management information system (MIS), budgeting and liquidity planning."
    />
)

export default Infeas