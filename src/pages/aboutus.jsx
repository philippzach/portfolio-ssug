import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../styles/pages/about.css';
import Values from '../components/Values/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import FounderSlider from '../components/pictureslider/aboutgroupslider';
import AdvisorSlider from '../components/pictureslider/aboutadvisorslider';
import Supporters from '../components/supporters';
import Seo from '../components/SEO/index';

import Christian from '../../static/advisors/wenger_christian.jpg'
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
import Kai from '../../static/advisors/kaicui.png';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`
const Profile = {
  height: "9em",
  width: "9em"
}

const AboutUs = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – About us" desc="Get to know our team, advisory board, partners, supporters and sponsors, that offers a perfect network platform in the swiss startup ecosystem" />
      <Navbar />
      <Test> 
          <Img fluid={data.about.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem' }}>
      <Title>Our Team</Title>
      <div className="containertitleabout">
        <h2 className="lh-title ttu headingcolorshadow">Values</h2>
        <p className="lh-copy">
        Our values are part of our DNA. They guide the way we work with our partners, within our communities and with each other. Through integrity, passion, humility, simplicity and a focus on success, we have created a vibrant company culture where ideas can blossom, people can thrive and success can flourish. 
        </p>
        <Values />
      </div>
      <Title className="mt6">SSUG</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu headingcolorshadow">Team</h1>
        <p className="lh-copy mb5">
        Our team consists of smart experts with a diverse set of experiences and backgrounds. As unique as we are individually, we share a mutual passion for the startup ecosystem and for doing excellent work for our clients and partners. Get to know our team below. 
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
          {/* <Tab className="tabitem three" selectedClassName="selected">Avaneo</Tab> */}
        </TabList>
        <TabPanel className="tabpanel four">
        <div className="paddingtabs">
        <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about1.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Mike Baur</h3>
                <h4 className="f6 fw4 gray mt0">CEO</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about3.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Max Meister</h3>
                <h4 className="f6 fw4 gray mt0">CSO</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about2.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Oliver Walzer</h3>
                <h4 className="f6 fw4 gray mt0">COO</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about11.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Christine Maier</h3>
                <h4 className="f6 fw4 gray mt0">Spokes Person</h4>
              </div>
              
            </article>
            </div>
            <div className="tabrow2">
          {/*   <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about14.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Flavio Bianchi</h3>
                <h4 className="f6 fw4 gray mt0">Associate</h4>
              </div>
              
            </article> */}
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about12.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Philipp Steinberger</h3>
                <h4 className="f6 fw4 gray mt0">Head of Investors Club</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about13.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Guillaume Waser</h3>
                <h4 className="f6 fw4 gray mt0">CFO</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about8.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Simon Koch</h3>
                <h4 className="f6 fw4 gray mt0">Chief of Staff</h4>
              </div>
              
            </article>
            </div>
            </div>
        </TabPanel>
        <TabPanel className="tabpanel one">
        <div className='paddingtabs'>
        <div className='tabrow'>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about1.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Mike Baur</h3>
              <h4 className='f6 fw4 gray mt0'>Co-Founder</h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about2.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Oliver Walzer</h3>
              <h4 className='f6 fw4 gray mt0'>Co-Founder</h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about3.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Max Meister</h3>
              <h4 className='f6 fw4 gray mt0'>Co-Founder</h4>
            </div>
          </article>
        </div>
        <div className='tabrow'>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about9.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Désirée Heutschi</h3>
              <h4 className='f6 fw4 gray mt0'>CEO</h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about6.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Jeroen Hermans</h3>
              <h4 className='f6 fw4 gray mt0'>
                Head of Corporate Acceleration
              </h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about7.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Tamara Savchuk</h3>
              <h4 className='f6 fw4 gray mt0'>Head of Company Buildung</h4>
            </div>
          </article>

          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about8.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Simon Koch</h3>
              <h4 className='f6 fw4 gray mt0'>Head of Marketing</h4>
            </div>
          </article>
        </div>
        <div className='tabrow'>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about5.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Kirill Babich</h3>
              <h4 className='f6 fw4 gray mt0'>Venture Builder</h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about10.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Larissa Truffer</h3>
              <h4 className='f6 fw4 gray mt0'>
                Marketing & Communication
                <br /> Manager
              </h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about4.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Chris Bargholz</h3>
              <h4 className='f6 fw4 gray mt0'>Acceleration Expert</h4>
            </div>
          </article>
          <article className='center pa3 pa4-ns'>
            <div className='tc'>
              <Img
                fluid={data.about15.childImageSharp.fluid}
                className='br-100 dib '
                style={Profile}
                title=''
                alt=''
              />
              <h3 className='f5 mb2'>Vuk Veggezi</h3>
              <h4 className='f6 fw4 gray mt0'>Startup Analyst</h4>
            </div>
          </article>
        </div>
      </div>
        </TabPanel>
        <TabPanel className="tabpanel two">
        <div className="paddingtabs">
        <div className="tabrow">
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.about2.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Oliver Walzer</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
            </article>
            {/* <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.tech2.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Alexandru Spinu</h3>
                <h4 className="f6 fw4 gray mt0">Developer</h4>
              </div>
            </article> */}
            {/* <article className="center pa3 pa4-ns">
            <div className="tc">
                 <Img fluid={data.tech3.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Lucas Pelloni</h3>
                <h4 className="f6 fw4 gray mt0">Full Stack Developer</h4>
              </div>
            </article> */}
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.tech1.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Frederic Nachbauer</h3>
                <h4 className="f6 fw4 gray mt0">Growth Hacker</h4>
              </div>
            </article>
            </div>
            {/* <div className="tabrow">
              <article className="center pa3 pa4-ns">
              <div className="tc">
              <Img fluid={data.tech4.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                  <h3 className="f5 mb2">Peter Zwyssig</h3>
                  <h4 className="f6 fw4 gray mt0">CEO</h4>
                </div>
              </article>
              <article className="center pa3 pa4-ns">
              <div className="tc">
              <Img fluid={data.tech5.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                  <h3 className="f5 mb2">Severin Wullschleger</h3>
                  <h4 className="f6 fw4 gray mt0">Full Stack Developer</h4>
                </div>
              </article>
              <article className="center pa3 pa4-ns">
              <div className="tc">
              <Img fluid={data.tech6.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                  <h3 className="f5 mb2">Thomas Bocek</h3>
                  <h4 className="f6 fw4 gray mt0">CTO</h4>
                </div>
              </article>
            </div> */}
          </div>
        </TabPanel>
        {/* <TabPanel className="tabpanel three">
        <div className="paddingtabs">
        <div className="tabrow2">
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.avaneo1.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Michael Brentari</h3>
                <h4 className="f6 fw4 gray mt0">Accounting Manager</h4>
              </div>
              
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.avaneo3.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Marlene Brentari</h3>
                <h4 className="f6 fw4 gray mt0">Accountant</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
            <Img fluid={data.avaneo2.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Laura Izzo</h3>
                <h4 className="f6 fw4 gray mt0">Accountant</h4>
              </div>
            </article>
            </div>
            </div>
        </TabPanel> */}
      </Tabs>
      <Wrapper style={{ paddingTop: "5em", paddingBottom: "3em"}}>
        <Title>Advisory Board</Title>
        </Wrapper>
        <AdvisorSlider />
        <div className="panel" style={{ backgroundColor: "#f7f7f7" }}>
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
                        <img src={MichaelHartweg} className="br-100 h4 w4 dib pa2" title="" alt="" />
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
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Kai} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Kai Cui</h3>
                      </div>
                    </article> 
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Sauter} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Claudia Sauter</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Stan} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Stan Wawrinka</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Urs} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Urs Wietlisbach</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Christian} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Dr. iur Christian Wenger</h3>
                      </div>
                    </article>
                    </div>
            </div>
        </div>
        <Wrapper style={{ paddingTop: "2em", paddingBottom: "1em", textAlign: "center"}}>
        <span style={{fontSize: "1.2em"}}>Find a complete list of our <a style={{color: "inherit", textDecoration: "underline"}} href="https://www.swissstartupfactory.com/aboutus/">Mentors</a></span>
        </Wrapper>
      <Supporters />
  </Layout>
);

export default AboutUs;

export const query = graphql`
  query {
    about: file(relativePath: { eq: "images/aboutus.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    about1: file(relativePath: { eq: "images/mike_baur.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
  about2: file(relativePath: { eq: "images/walzer_oliver.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1500
        traceSVG: { background: "#fff", color: "lightgrey" }
      ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
}
about3: file(relativePath: { eq: "images/max_meister.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about4: file(relativePath: { eq: "images/chris_bargholz.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about5: file(relativePath: { eq: "images/kirill_babich.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about6: file(relativePath: { eq: "images/jeroen_herman.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about7: file(relativePath: { eq: "images/tamaranew.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about8: file(relativePath: { eq: "images/simon.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about9: file(relativePath: { eq: "images/desiree.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about10: file(relativePath: { eq: "images/larissa.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about11: file(relativePath: { eq: "images/christine.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about12: file(relativePath: { eq: "images/philippsteinberger.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about13: file(relativePath: { eq: "images/waser.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about14: file(relativePath: { eq: "images/flavio.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about15: file(relativePath: { eq: "images/vuk.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}

avaneo1: file(relativePath: { eq: "images/michael_brentari.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
avaneo2: file(relativePath: { eq: "images/laura_izzo.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
avaneo3: file(relativePath: { eq: "images/marlene_brentari.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
tech1: file(relativePath: { eq: "images/fredi.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
tech2: file(relativePath: { eq: "images/alex_spinu.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
tech3: file(relativePath: { eq: "images/lucas.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
tech4: file(relativePath: { eq: "images/peter(peach)zwyssig.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
tech5: file(relativePath: { eq: "images/severin-wullschleger.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
tech6: file(relativePath: { eq: "images/thomas-bocek.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
placeholder: file(relativePath: { eq: "images/placeholder.png" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
  }`