import React from 'react';
import { Wrapper, Title } from 'components';
import styled from 'react-emotion';

import '../styles/pages/capital-companies.css';

import LogoB from '../images/capital-companies/past/1.png';
import LogoC from '../images/capital-companies/past/2.png';
import LogoD from '../images/capital-companies/past/3.png';
import LogoE from '../images/capital-companies/past/4.png';
import LogoF from '../images/capital-companies/past/5.png';
import LogoG from '../images/capital-companies/past/6.png';
import LogoH from '../images/capital-companies/past/7.png';

import LogoI from '../images/capital-companies/past/8.png';
import LogoJ from '../images/capital-companies/past/9.png';
import LogoK from '../images/capital-companies/past/10.png';
import LogoL from '../images/capital-companies/past/11.png';
import LogoM from '../images/capital-companies/past/12.png';
import LogoN from '../images/capital-companies/past/13.png';
import LogoO from '../images/capital-companies/past/14.png';

const Heading = styled.h2`
  padding-top: 5em;
`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: 4em;
`;

const GroupItem = styled.div`
  width: 100%;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  @media (min-width: 481px) {
    width: 50%;
  }
  @media (min-width: 769px) {
    width: 25%;
  }
`;
const Companies = () => (
  <>
    <Wrapper>
      <Group>
        <GroupItem>
          <a className='logotilepast' href='https://www.cleoo.com'>
            <img src={LogoE} alt='CLeoo' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://www.diplomero.pro'>
            <img src={LogoM} alt='Diplomero' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://ecopol.com'>
            <img src={LogoF} alt='EcoPol' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://evenito.com'>
            <img src={LogoH} alt='Evenito' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://www.eyefitu.com'>
            <img src={LogoL} alt='Eyefitu' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://www.farmy.ch'>
            <img src={LogoK} alt='Farmy' />
          </a>
        </GroupItem>
        <GroupItem>
          <a
            className='logotilepast'
            href='https://www.gsk.com/en-gb/media/press-releases/gsk-strengthens-early-stage-vaccine-pipeline-with-acquisition-of-glycovaxyn-ag/'
          >
            <img src={LogoJ} alt='GSK' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='http://www.goski.cn/portal.php'>
            <img src={LogoD} alt='Goski' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://www.lucafaloni.com'>
            <img src={LogoG} alt='Luca Faloni' />
          </a>
        </GroupItem>
        <GroupItem>
          <a
            className='logotilepast'
            href='http://www.majormei.com/html/page/index.html'
          >
            <img src={LogoC} alt='Majormei' />
          </a>
        </GroupItem>
        <GroupItem>
          <a
            className='logotilepast'
            href='
http://www.reflower.com.cn/
'
          >
            <img src={LogoB} alt='Reflower' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://tbs-biometrics.com/en/'>
            <img src={LogoO} alt='TBS' />
          </a>
        </GroupItem>
        <GroupItem>
          <a className='logotilepast' href='https://www.trekksoft.com'>
            <img src={LogoN} alt='Trekksoft' />
          </a>
        </GroupItem>

        <GroupItem>
          <a className='logotilepast' href='https://www.vereign.com'>
            <img src={LogoI} alt='Vereign' />
          </a>
        </GroupItem>
      </Group>
    </Wrapper>
  </>
);

export default Companies;
