import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/aboutus.jpg';
import '../styles/pages/about.css';
import Values from '../components/Values/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import FounderSlider from '../components/pictureslider/aboutgroupslider';

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
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Title>Our Team</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Values</h1>
        <p className="lh-copy">
        Our values are part of our DNA. They guide the way we work with our  partners, within our communities and with each other. Through integrity, passion, humility, simplicity and a focus on 
          success, we have created a vibrant company culture where ideas can blossom, people can thrive and success can flourish. 
        </p>
        <Values />
      </div>
      <Title>SSUG</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Team</h1>
        <p className="lh-copy">
         Our team consists smart experts with a diverse set of experiences and backgrounds. As unique as we are individually, we share a mutual passion for startup ecosstem and doing excellent work for our clients and partners. Get to know our team below. 
        </p>
      </div>
      </Wrapper>
      <FounderSlider />
      <Tabs className="mt6">
        <TabList className="tablist">
          <Tab className="tabitem">SSUF</Tab>
          <Tab className="tabitem">SSUT</Tab>
          <Tab className="tabitem">Avaneo</Tab>
          <Tab className="tabitem">BV4</Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
  </Layout>
);

export default AboutUs;
