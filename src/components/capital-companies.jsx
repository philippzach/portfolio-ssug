import React from 'react';
import { Wrapper, Title } from 'components';
import styled from 'react-emotion';
import { Link } from 'gatsby';

import '../styles/pages/capital-companies.css';

import LogoB from '../images/capital-companies/1drop.jpg';
import LogoC from '../images/capital-companies/eyeware.png';
import LogoD from '../images/capital-companies/growcer.png';
import LogoE from '../images/capital-companies/piavita.jpg';
import LogoF from '../images/capital-companies/planted.png';

const Heading = styled.h2`
  padding-top: 5em;
`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: 1em;
`;

const GroupItem = styled.div`
  width: 100%;
  padding-right: 0.5em;
  padding-left: 0.5em;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          <div>
            <a
              rel='noopener noreferrer'
              target='blank'
              className='logotileadapt'
              href='https://growcer.com/#home'
            >
              <img src={LogoD} alt='Growcer' />
            </a>
          </div>

          <div>
            <p
              style={{ marginBottom: '.5em', fontSize: '.9rem' }}
              className='tc'
            >
              Fund | 2020 | active
            </p>
          </div>
        </GroupItem>
        <GroupItem>
          <div>
            <a
              rel='noopener noreferrer'
              target='blank'
              className='logotileadapt'
              href='https://www.piavita.com/'
            >
              <img src={LogoE} alt='Piavita' />
            </a>
          </div>

          <div>
            <p
              style={{ marginBottom: '.5em', fontSize: '.9rem' }}
              className='tc'
            >
              Investor Club | 2019 | active
            </p>
          </div>
        </GroupItem>

        <GroupItem>
          <div>
            <a
              rel='noopener noreferrer'
              target='blank'
              className='logotileadapt'
              href='https://en.planted.ch/'
            >
              <img src={LogoF} alt='Planted' />
            </a>
          </div>

          <div>
            <p
              style={{ marginBottom: '.5em', fontSize: '.9rem' }}
              className='tc'
            >
              Investor Club | 2019 | active
            </p>
          </div>
        </GroupItem>

        <GroupItem>
          <div>
            <a
              rel='noopener noreferrer'
              target='blank'
              className='logotileadapt'
              href='https://eyeware.tech/'
            >
              <img src={LogoC} alt='Eyeware' />
            </a>
          </div>

          <div>
            <p
              style={{ marginBottom: '.5em', fontSize: '.9rem' }}
              className='tc'
            >
              Investor Club | 2019 | active
            </p>
          </div>
        </GroupItem>
        <GroupItem>
          <div>
            <a
              rel='noopener noreferrer'
              target='blank'
              className='logotileadapt'
              href='https://www.1dropdx.com/'
            >
              <img src={LogoB} alt='1 Drop Diagnostics' />
            </a>
          </div>

          <div>
            <p
              style={{ marginBottom: '.5em', fontSize: '.9rem' }}
              className='tc'
            >
              Investor Club | 2018 | active
            </p>
          </div>
        </GroupItem>
      </Group>
    </Wrapper>
  </>
);

export default Companies;
