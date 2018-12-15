import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/growth.jpg';
import '../styles/pages/growth.css';

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
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Growth</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Dedicated services for our corporate clients, startups and investors</h1>
        <p className="lh-copy">
          The growth services are just one part from our integrated services. Together we can make your startup grow faster and take it to the next level.
        </p>
        <p className="lh-copy">
          As a founder of a startup, you already have far too much on your plate. That's why we put growth services together with the aim of offering you dedicated services and keeping your back free so that you can 
          concentrate on the topics that matter the most.
        </p>
        <p className="lh-copy">
          We constantly work on further expanding our growth services. They cover various needs, such as accounting, marketing and communication, legal, finance, growth hacking and more.
        </p>
      </div>
      <Title>Services</Title>
    </Wrapper>
  </Layout>
);

export default GrowthServices;
