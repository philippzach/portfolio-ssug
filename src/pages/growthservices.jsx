import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar } from 'components';
import Background from '../../static/growth.jpg';

const Hero = styled.header`
 background-image: url("${Background}");
 background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
height: 400px;
`;

const GrowthServices = () => (
  <Layout>
    <Hero>
      <Navbar />
    </Hero>
  </Layout>
)

export default GrowthServices;
