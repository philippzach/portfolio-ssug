import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/aboutus.jpg';
import '../styles/pages/about.css';
import Values from '../components/Values/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import FounderSlider from '../components/pictureslider/aboutgroupslider';
import AdvisorSlider from '../components/pictureslider/aboutadvisorslider';
import Supporters from '../components/supporters';
import Seo from '../components/SEO/index';

import Mike from '../../static/teamssug/mike_baur.jpg';
import Max from '../../static/teamssug/meister_max.png';
import Larissa from '../../static/teamssug/larissa.jpg';
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

import Rico from '../../static/advisors/baldegger_rico_portrait.jpg';
import Robert from '../../static/advisors/bider_robert_portrait.jpg';
import Biver from '../../static/advisors/biver_jeanclaude_portrait.jpg';
import Claudia from '../../static/advisors/coninx_claudia_portrait.jpg';
import Beat from '../../static/advisors/curti_beat_portrait.jpg';
import David from '../../static/advisors/david_allemann_portrait.jpg';
import Friedli from '../../static/advisors/friedli_portrait.jpg';
import Andreas from '../../static/advisors/gall_andreas_portrait.jpg';
import Dietmar from '../../static/advisors/grichnik_dietmar_portrait.jpg';
import Daniel from '../../static/advisors/gutenberg_daniel_portrait.jpg';
import MichaelHartweg from '../../static/advisors/hartweg_michael_portrait.jpg';
import Patrick from '../../static/advisors/patrick_aebischer_portrait.jpg';
import Sauter from '../../static/advisors/sauter_claudia_portrait.jpg';
import Stan from '../../static/advisors/wawrinka_stan_portrait.jpg';
import Urs from '../../static/advisors/wietlisbach_urs_portrait.jpg';

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
  <Seo title="SWISS STARTUP GROUP – About us" desc="Get to know our team, advisory board, partners, supporters and sponsors, that offers a perfect network platform in the swiss startup ecosystem" />
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem' }}>
      <Title>Our Team</Title>
      <div className="containertitleabout">
        <h2 className="lh-title ttu headingcolorshadow">Values</h2>
        <p className="lh-copy">
        Our values are part of our DNA. They guide the way we work with our  partners, within our communities and with each other. Through integrity, passion, humility, simplicity and a focus on 
          success, we have created a vibrant company culture where ideas can blossom, people can thrive and success can flourish. 
        </p>
        <Values />
      </div>
      <Title className="mt6">SSUG</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu headingcolorshadow">Team</h1>
        <p className="lh-copy">
         Our team consists smart experts with a diverse set of experiences and backgrounds. As unique as we are individually, we share a mutual passion for startup ecosstem and doing excellent work for our clients and partners. Get to know our team below. 
        </p>
      </div>
      </Wrapper>
      <FounderSlider />
      <div className="fixerclass"></div>
      <Tabs className="mobiletabs">
        <TabList className="tablist">
          <Tab className="tabitem four" selectedClassName="selected">Swiss Startup Group</Tab>
          <Tab className="tabitem one" selectedClassName="selected">Swiss Startup Factory</Tab>
          <Tab className="tabitem two" selectedClassName="selected">Swiss Startup Tech</Tab>
          <Tab className="tabitem three" selectedClassName="selected">Avaneo</Tab>
        </TabList>
        <TabPanel className="tabpanel four">
        <div className="paddingtabs">
        <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Mike} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Mike Baur</h3>
                <h4 className="f6 fw4 gray mt0">CEO</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Max} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Max Meister</h3>
                <h4 className="f6 fw4 gray mt0">CSO</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Oliver} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Oliver Walzer</h3>
                <h4 className="f6 fw4 gray mt0">COO</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <img src={Larissa} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Larissa Truffer</h3>
                <h4 className="f6 fw4 gray mt0">Executive Assistant</h4>
              </div>
            </article>
            </div>
            </div>
        </TabPanel>
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
                <img src={Max} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Max Meister</h3>
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
            </div>
            <div className="tabrow">
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <img src={Patric} className="br-100 h4 w4 dib pa2" title="" alt="" />
                <h3 className="f5 mb2">Patric Hauser</h3>
                <h4 className="f6 fw4 gray mt0">Project Manager</h4>
              </div>
            </article>
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
      </Tabs>
      <Wrapper style={{ paddingTop: "5em", paddingBottom: "1em"}}>
        <Title>Advisory Board</Title>
        </Wrapper>
        <AdvisorSlider />
        <div className="panel">
        <div className="paddingtabs">
          <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Rico} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Rico J. Baldegger</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Robert} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Robert Bider</h3>
                        
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Biver} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Jean Claude Biver</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Claudia} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Claudia Coninx</h3>
                      </div>
                    </article>
            </div>
            <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Beat} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Beat Curti</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={David} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">David Allemann</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Friedli} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Peter Friedli</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Andreas} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Andreas Gall</h3>
                      </div>
                    </article>
                    </div>
            <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Dietmar} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Dietmar Grichnik</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Daniel} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Daniel Gutenberg</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Michael} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Michael Hartweg</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Patrick} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Patrick Aebischer</h3>
                      </div>
                    </article>
                  </div>
            </div>
        </div>
      <Supporters />
  </Layout>
);

export default AboutUs;
