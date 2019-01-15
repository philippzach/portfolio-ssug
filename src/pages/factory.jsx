import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/factory_space.jpg';
import '../styles/pages/factory.css';
import FactoryLogo from '../../static/ssuf.svg';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`

const Factory = ({ data }) => (
  <Layout>
    <Seo title="SWISS STARTUP GROUP – Swiss Startup Factory" desc="SWISS STARTUP FACTORY is a venture studio for corporates and startups for Innovation and Acceleration of the best new technologies" />
      <Navbar />
      <Test> 
          <Img fluid={data.factory.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Swiss Startup Factory</Title>
      <div className="containertitle">
        <h2 className="lh-copy ttu headingcolorshadow">We inspire and enable people to build sustainable companies</h2>
        <p className="lh-copy">
          SWISS STARTUP FACTORY is a venture studio for corporates and startups to innovate and accelerate the best
          new technologies.
        </p>
        <p className="lh-copy">
          We are the number one privately financed and independent accelerator in Switzerland. The SWISS STARTUP FACTORY provides a
          professional execution platform to corporates and startups through a dedicated business driven process that
          brings their innovation to market fast and lean.
        </p>
        <p className="lh-copy b">
          At SWISS STARTUP FACTORY innovation meets execution – we unleash your entrepreneurial potential!
        </p>
      </div>
      <Title>What we do</Title>
    </Wrapper>
    <div className="tc white" style={{ backgroundColor: 'rgb(0, 71, 107)', padding: '5em 0' }}>
      <div>
        <h2 className="ttu white">Startups</h2>
        <p className="measure tc lh-copy" style={{ margin: '0 auto', padding: '0 1em' }}>
          Being close to startups is the core for the Swiss Startup Factory. We constantly develop our frameworks and
          apply them for building up successful startups.
        </p>
      </div>
      <div className="startupscontainer">
        <article className="hover mw5 center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/startups/accelerator" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Acceleration
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70">
            Based on more than 3-years of experience we have designed a completely new customised accelerator program
            which will prepare you and your team to live up to your potential
          </p>
          </div>
          <div className="mv3">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="hover mw5 center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="mailto:chris.bargholz@ssuf.ch">
          <div className="tc">
            <h3 className="f4 lh-copy" style={{ color: 'rgb(0, 71, 107)' }}>
              Startup Support Meeting
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            30 minutes meeting where you can pitch us your idea, tell us about your challenges and ask us for feedback
          </p>
          <div className="mv3">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="hover mw5 center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="mailto:chris.bargholz@ssuf.ch">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Pitch Training
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            We help you to improve your pitch that allows you to understand which areas are important and should be in
            the spotlight to move you company forward
          </p>
          <div className="mv3">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
      </div>
    </div>
    <Wrapper style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div>
        <h2 className="ttu tc">Corporates</h2>
        <p className="measure tc lh-copy" style={{ margin: '0 auto', padding: '0 1em' }}>
          Our goal is to understand and evaluate our corporate client’s current strategic innovation roadmap and provide
          a best advice on it’s execution with our specialized skills. For corporates we are the interface to
          innovation.
        </p>
      </div>
      <div className="corporatescontainer">
      <div className="row">
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/corporates/innovation-consulting" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Intra Innovation
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70 mb4-l">
            We offer customised innovation and digital transformation consulting services.
          </p>
          </div>
          <div className="mt4-l mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/corporates/corporate-acceleration" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Corporate Acceleration
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70">
            Adjusting our accelerator program to the structure of the corporate, we build up their existing startup
            projects with - or without taking equity.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        </div>
        <div className="row">
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/corporates/company-building" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Company Builder
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div className="mv3-l">
          <p className="lh-copy measure center f6 black-70">
            Building up a completely new business model or startup from scratch - outside the existing corporate
            structures
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://ccvs.ch/" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Corporate Venturing
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70">
          The Center of Corporate Venturing  connects innovation leaders – its members have access to educational events, networking opportunities and a place to exchange ideas.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        </div>
      </div>
      <a href="https://www.swissstartupfactory.com" target="_blank">
        <div className="tc" style={{
                margin: '4em 0',
                cursor: 'pointer'
            }}>
            <img src={FactoryLogo} alt="" title="" style={{
                    height: '50px',
                    marginTop: '-5px'
            }}/>
          <h3 className="dib underline ttu" style={{
              color: 'rgb(0, 71, 107)',
          }}>Swiss Startup Factory ></h3>
        </div>
      </a>
    </Wrapper>
  </Layout>
);

export default Factory;

export const query = graphql`
  query {
    factory: file(relativePath: { eq: "images/factory.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1700
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
  }`
