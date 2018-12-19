import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/aboutus.jpg';
import '../styles/pages/about.css';
import Values from '../components/Values/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import FounderSlider from '../components/pictureslider/aboutgroupslider';
import Mike from '../../static/teamssug/mike_baur.jpg';
import Oliver from '../../static/teamssug/walzer_oliver.png';
import Chris from '../../static/teamssuf/chris_bargholz.jpg';
import Patric from '../../static/teamssuf/patric_hauser.jpg';
import Jean from '../../static/teamssuf/vuil.jpg';
import Alex from '../../static/teamssuf/alex_jus.jpg';
import Paolo from '../../static/teamssuf/paolo.jpg';

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
      <div className="containertitleabout">
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
          <Tab className="tabitem one" selectedClassName="selected">SSUF</Tab>
          <Tab className="tabitem two" selectedClassName="selected">SSUT</Tab>
          <Tab className="tabitem three" selectedClassName="selected">Avaneo</Tab>
          <Tab className="tabitem four" selectedClassName="selected">BV4</Tab>
        </TabList>
        <TabPanel className="tabpanel one">
        <div className="tabrow">
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Mike} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Mike Baur</h1>
              <h2 className="f5 fw4 gray mt0">Co-Founder</h2>
            </div>
          </article>
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Oliver} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Oliver Walzer</h1>
              <h2 className="f5 fw4 gray mt0">Co-Founder</h2>
            </div>
          </article>
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Chris} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Chris Bargholz</h1>
              <h2 className="f5 fw4 gray mt0">COO & Head of Accelerator</h2>
            </div>
          </article>
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Patric} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Patric Hauser</h1>
              <h2 className="f5 fw4 gray mt0">Project Manager</h2>
            </div>
          </article>
          </div>
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Jean} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Jean-Pierre Vuilleumier</h1>
              <h2 className="f5 fw4 gray mt0">Pitch Trainer</h2>
            </div>
          </article>
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Alex} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Alex Just</h1>
              <h2 className="f5 fw4 gray mt0">Startup Consultant</h2>
            </div>
          </article>
          <article className="center pa3 pa4-ns">
            <div className="tc">
              <img src={Paolo} className="br-100 h4 w4 dib pa2" title="" alt="" />
              <h1 className="f3 mb2">Paolo Piffaretti</h1>
              <h2 className="f5 fw4 gray mt0">Startup Scout France</h2>
            </div>
          </article>
        </TabPanel>
        <TabPanel className="tabpanel two">
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel className="tabpanel three">
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel className="tabpanel four">
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
  </Layout>
);

export default AboutUs;
