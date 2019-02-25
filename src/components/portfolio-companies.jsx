import React from 'react';
import { Wrapper, Title } from 'components';
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
    margin-bottom: 4em;
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
      <Wrapper>
        <Group>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/avaneo"> 
                    <img  src={LogoA} alt="Avaneo" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/beaconsmind"> 
                    <img  src={LogoB} alt="Beaconsmind" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/blinkers"> 
                    <img  src={LogoC} alt="Blinkers" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/bv4"> 
                    <img  src={LogoD} alt="BV4" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/carhelper"> 
                    <img  src={LogoE} alt="Carhelper" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/evolut"> 
                    <img  src={LogoF} alt="Evolut" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/gowago"> 
                    <img  src={LogoG} alt="Gowago" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/idun"> 
                    <img  src={LogoH} alt="Idun" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/joineer"> 
                    <img  src={LogoI} alt="Joineer" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/mictic"> 
                    <img  src={LogoJ} alt="Mictic" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/moveagain"> 
                    <img  src={LogoK} alt="Moveagain" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/snowcookie"> 
                    <img  src={LogoL} alt="Snowcookie" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/swissstartuptech"> 
                    <img  src={LogoM} alt="Swiss Startup Tech" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/wissstartupfactory"> 
                    <img  src={LogoN} alt="Swiss Startup Factory" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/strukd"> 
                    <img  src={LogoO} alt="Struckd" /> 
                </Link>
            </GroupItem>
            <GroupItem>
                <Link className="logotile" to="/portfolio-companies/westhive"> 
                    <img  src={LogoP} alt="Westhive" /> 
                </Link>
            </GroupItem>
        </Group>
    </Wrapper>
    </>
)

export default Companies