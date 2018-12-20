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
import Placeholder from '../../static/teamavaneo/default.png';
import Spinu from '../../static/teamssut/alex_spinu.jpg';
import Michael from '../../static/teamavaneo/michael_brentari.jpg';
import Laura from '../../static/teamavaneo/laura_izzo.jpg';

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
    <Wrapper style={{ paddingTop: '2rem' }}>
      <Title>Our Team</Title>
      <div className="containertitleabout">
        <h1 className="lh-title ttu">Values</h1>
        <p className="lh-copy">
        Our values are part of our DNA. They guide the way we work with our  partners, within our communities and with each other. Through integrity, passion, humility, simplicity and a focus on 
          success, we have created a vibrant company culture where ideas can blossom, people can thrive and success can flourish. 
        </p>
        <Values />
      </div>
      <Title className="mt6">SSUG</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Team</h1>
        <p className="lh-copy">
         Our team consists smart experts with a diverse set of experiences and backgrounds. As unique as we are individually, we share a mutual passion for startup ecosstem and doing excellent work for our clients and partners. Get to know our team below. 
        </p>
      </div>
      </Wrapper>
      <FounderSlider />
      <div className="fixerclass"></div>
      <Tabs className="mobiletabs">
        <TabList className="tablist">
          <Tab className="tabitem one" selectedClassName="selected">SSUF</Tab>
          <Tab className="tabitem two" selectedClassName="selected">SSUT</Tab>
          <Tab className="tabitem three" selectedClassName="selected">Avaneo</Tab>
          <Tab className="tabitem four" selectedClassName="selected">BV4</Tab>
        </TabList>
        <TabPanel className="tabpanel one">
        <div className="paddingtabs">
          <div className="tabrow">
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <img src={Mike} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Mike Baur</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <img src={Oliver} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Oliver Walzer</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <img src={Chris} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Chris Bargholz</h3>
                <h4 className="f6 fw4 gray mt0">COO & Head of Accelerator</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <img src={Patric} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Patric Hauser</h3>
                <h4 className="f6 fw4 gray mt0">Project Manager</h4>
              </div>
            </article>
            </div>
            <div className="tabrow">
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Alex} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Alex Just</h3>
                <h4 className="f6 fw4 gray mt0">Startup Consultant</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Jean} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Jean-Pierre Vuilleumier</h3>
                <h4 className="f6 fw4 gray mt0">Pitch Trainer</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <img src={Paolo} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Paolo Piffaretti</h3>
                <h4 className="f6 fw4 gray mt0">Startup Scout France</h4>
              </div>
            </article>
            </div>
            </div>
        </TabPanel>
        <TabPanel className="tabpanel two">
        <div className="paddingtabs">
        <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Oliver} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Oliver Walzer</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Spinu} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Alexandru Spinu</h3>
                <h4 className="f6 fw4 gray mt0">Developer</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Virginia Beljean</h3>
                <h4 className="f6 fw4 gray mt0">Communications</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Frederic Nachbauer</h3>
                <h4 className="f6 fw4 gray mt0">Growth Hacker</h4>
              </div>
            </article>
            </div>
            </div>
        </TabPanel>
        <TabPanel className="tabpanel three">
        <div className="paddingtabs">
        <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Michael} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Michael Brentari</h3>
                <h4 className="f6 fw4 gray mt0">Accounting Manager</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Marlene Brentari</h3>
                <h4 className="f6 fw4 gray mt0">Accountant</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Susanne Grabner</h3>
                <h4 className="f6 fw4 gray mt0">Accountant</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Laura} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Laura Izzo</h3>
                <h4 className="f6 fw4 gray mt0">Accountant</h4>
              </div>
            </article>
            </div>
            </div>
        </TabPanel>
        <TabPanel className="tabpanel four">
        <div className="paddingtabs">
        <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Joel Hofmänner</h3>
                <h4 className="f6 fw4 gray mt0">Head Analyst</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Pascal Stämpfli </h3>
                <h4 className="f6 fw4 gray mt0">Analyst</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Tamara Savchuk</h3>
                <h4 className="f6 fw4 gray mt0">Analyst</h4>
              </div>
            </article>
            </div>
            <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Dorian Ebneter</h3>
                <h4 className="f6 fw4 gray mt0">Analyst</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Placeholder} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Jeremy L. Meier</h3>
                <h4 className="f6 fw4 gray mt0">Analyst</h4>
              </div>
            </article>
            </div>
            </div>
        </TabPanel>
      </Tabs>
  </Layout>
);

export default AboutUs;
