import React from 'react';
import { Layout, Wrapper, NavbarInverted, Title } from 'components';
import Seo from '../components/SEO/index';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import '../styles/pages/portfolio-companies.css';

import LogoA from '../../static/logos_portfolio/Logos-Portfolio-svg-Avaneo-01.svg';
import LogoB from '../../static/logos_portfolio/Logos-Portfolio-svg-Beaconsinmind-01.svg';
import LogoC from '../../static/logos_portfolio/Logos-Portfolio-svg-BLINKERS-01.svg';
import LogoD from '../../static/logos_portfolio/Logos-Portfolio-svg-Bv4-01.svg';
import LogoE from '../../static/logos_portfolio/Logos-Portfolio-svg-carhelper-01.svg';
import LogoF from '../../static/logos_portfolio/Logos-Portfolio-svg-evolute-01.svg';
import LogoG from '../../static/logos_portfolio/Logos-Portfolio-svg-gowago-01.svg';
import LogoH from '../../static/logos_portfolio/Logos-Portfolio-svg-idun-01.svg';

import LogoI from '../../static/logos_portfolio/Logos-Portfolio-svg-joineer-01.svg';
import LogoJ from '../../static/logos_portfolio/Logos-Portfolio-svg-mitic-01.svg';
import LogoK from '../../static/logos_portfolio/Logos-Portfolio-svg-moveagain-01.svg';
import LogoL from '../../static/logos_portfolio/Logos-Portfolio-svg-snowcookie-01.svg';
import LogoM from '../../static/logos_portfolio/Logos-Portfolio-svg-sst-01.svg';
import LogoN from '../../static/logos_portfolio/Logos-Portfolio-svg-ssuf-01.svg';
import LogoO from '../../static/logos_portfolio/Logos-Portfolio-svg-struckd.svg';
import LogoP from '../../static/logos_portfolio/Logos-Portfolio-svg-westhive-01.svg';

const Heading = styled.h2`
padding-top: 5em;
`

const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: auto;
    margin-left: -8px;
    margin-right: -8px;
    margin-bottom: -16px;
`

const GroupItem = styled.div`
    width: 100%;
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
@media (min-width: 481px){
    width: 50%;
}
@media (min-width: 769px) {
    width: 25%;
}
`
const Companies = () => (
    <>
     <Layout>
            <Seo title="SWISS STARTUP GROUP – Portfolio Companies" desc="A lsit of the Companies in our Portfolio" />
      <NavbarInverted />
      <Wrapper>
        <Heading>Portfolio Companies</Heading>
        <Group>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoA} alt="Avaneo" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoB} alt="Beaconsmind" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoC} alt="Blinkers" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoD} alt="BV4" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoE} alt="Carhelper" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoF} alt="Evolut" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoG} alt="Gowagp" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoH} alt="Idun" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoI} alt="Joineer" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoJ} alt="Mictic" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoK} alt="Moveagain" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoL} alt="Snowcookie" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoM} alt="Swiss Startup Tech" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoN} alt="Swiss Startup Factory" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoO} alt="Struckd" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/company1"> 
                    <img  src={LogoP} alt="Westhive" /> 
                </Link>
            </GroupItem>
        </Group>
    </Wrapper>
      </Layout>
    </>
)

export default Companies