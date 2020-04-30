import React from 'react';
import { Layout, Wrapper, NavbarInverted, Title } from 'components';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Seo from '../components/SEO/index';
import '../styles/pages/portfolio-companies.css';
import Logos from '../components/portfolio-companies';

const Heading = styled.h2`
  padding-top: 5em;
`;

const Companies = () => (
  <>
    <Layout>
      <Seo
        title='SWISS STARTUP GROUP – Portfolio Companies'
        desc='A lsit of the Companies in our Portfolio'
      />
      <NavbarInverted />
      <Wrapper>
        <Heading style={{ textAlign: 'center' }}>
          Our Portfolio of Companies
        </Heading>
        <Logos />
      </Wrapper>
    </Layout>
  </>
);

export default Companies;
