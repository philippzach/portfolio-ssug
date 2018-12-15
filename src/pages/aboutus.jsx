import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/aboutus.jpg';
import '../styles/pages/about.css';

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

const AboutUs = () => (
  <Layout>
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Our Team</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Values</h1>
        <p className="lh-copy">
        Our values are part of our DNA. They guide the way we work with our  partners, within our communities and with each other. Through integrity, passion, humility, simplicity and a focus on 
          success, we have created a vibrant company culture where ideas can blossom, people can thrive and success can flourish. 
        </p>
      </div>
      <Title>What we do</Title>
    </Wrapper>
  </Layout>
);

export default AboutUs;
