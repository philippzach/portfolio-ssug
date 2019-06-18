import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/investorclub.jpg';
import '../styles/pages/investorclub.css';
import {Link} from "gatsby";
import Strebel from '../../static/hanspeter_strebel.jpg';
import Urs from '../../static/urs_wietlisbach.jpg';
import Chris from '../../static/chris_wildmoser.jpg';
import SSUC from '../images/ssuc.svg';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`
const Background = styled.div`
background-color: #ebecee;
`
const Header = styled.span`
font-size: 50px;
font-family: poppins;
font-weight: bold;
line-height: 1em;
`
const Paragraph = styled.p`
font-family: roboto;
font-weight: 200;
font-size: 1em;
padding-top: 1em;
max-width: 18em;
`

const Venture = ({ data }) => (
  <Layout>
    <Seo title="SWISS STARTUP GROUP – Venture Asset Mangement" desc="The Swiss Startup Group has founded Swiss Startup Capital AG as a Venture Asset Management division. Direct Investments - Indirect Investments - Corporate Venture Capital." />
    <Navbar />
    <Test> 
      <Img fluid={data.investorclub.childImageSharp.fluid} className="w-100" />
    </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>About</Title>
      <div className="flex-ns mt5 mb6">
        <div className="w-100 w-third-ns flex items-center justify-center justify-start-ns ">
          <img src={SSUC} alt="Swiss Startup Capital Logo" width="250px"/>
        </div>
        <div className="w-100 w-two-thirds-ns pl0 pl4-ns pt4 tc tl-ns">
          <h2 className="lh-copy ttu headingcolorshadow">Venture Asset Management</h2>
          <p className="lh-copy b">
          In the future, investments in startups will be managed as a separate investment category called Venture Asset Management.
          </p>
          <p className="lh-copy">The Swiss Startup Group has entrusted the newly founded Swiss Startup Capital AG with the implementation of the Venture Asset Management division. Venture Asset Management offers three divisions: Direct Investments - Indirect Investments - Corporate Venture Capital.
          </p>
        </div>
      </div>
      <Title>Team</Title>
    </Wrapper>
    <Background>
      <Wrapper>
        <h3 className="mw6 lh-copy pt4">
        A team of dedicated professionals committed to exceeding your expectations
        </h3>
        <div className="testimonialmobile">
          <article className="mobile mw6  pa3 pa4-ns mv3">
            <div className="tc">
            <Img fixed={data.max.childImageSharp.fixed} alt="Swiss Startup Capital Team" className="shadow-5"/>
              <h4 className="pt4 mb1">Max Meister</h4>
            </div>
            <p className="tc measure center f6 black-70">CEO
            </p>
          </article>
          <article className="mobile mw6  pa3 pa4-ns mv3">
            <div className="tc">
            <Img fixed={data.philipp.childImageSharp.fixed} alt="Swiss Startup Capital Team" className="shadow-5"/>
              <h4 className="pt4 mb1">Philipp Steinberger</h4>
            </div>
            <p className="tc measure center f6 black-70">Head of Investor Club
            </p>
          </article>
          <article className="mobile mw6  pa3 pa4-ns mv3">
            <div className="tc">
            <Img fixed={data.flavio.childImageSharp.fixed} alt="Swiss Startup Capital Team" className="shadow-5"/>
              <h4 className="pt4 mb1">Flavio Bianchi</h4>
            </div>
            <p className="tc  measure center f6 black-70">Associate
            </p>
          </article>
        </div>
      </Wrapper>
    </Background>
    <Wrapper>
    <Title className="mv5">Services</Title>
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="row mt4">
        <div className="w-100 w-50-ns">
          <Header>Investments<br/>& Support</Header>
          <Paragraph>through our proprietary dealflow, due diligence process and portfolio support we create value for our companies and investors.</Paragraph>
        </div>
        <div className="w-100 w-50-ns">
          <h3>1. Direct Investments</h3>
          <p className="lh-copy b">In the area of direct investments, we present qualified investors a carefully selected selection of promising investment opportunities and support individual investment decisions with a professional due diligence.</p>
          <p className="lh-copy">At the request of investors, we accompany the investments, actively support them and regularly report on their development. With this competent offer, we address experienced private investors as well as multi-family offices and banks who would like to give their customers professional access to an attractive asset class.</p>
          <p className="lh-copy">In the form of managed accounts, we offer our vast investment experience to investors who already own a portfolio of venture investments. This service is aimed in particular to clients who already own a venture investment portfolio. We analyze the individual portfolio companies, manage the most important investments and report to the investor on a regular basis. Like this, we support our clients so they can focus on their best participations, creating value efficiently.</p>
          <Link to="/investorclub">
          <div className="button -dark center">Join the Investor Club</div>
        </Link>
        </div>
      </div>
      <div className="row mv6">
      <div className="w-100 w-50-ns">
       <Header>SSUG Flagship<br/> Fund I</Header>
       <Paragraph>The first fund will start operations in Q3 2019.</Paragraph>
      </div>
      <div className="w-100 w-50-ns">
        <h3>2. Indirect Investments</h3>
        <p className="lh-copy">In order to invest into new and promising growth companies, but also to conduct follow-on investments in our existing portfolio, the Swiss Startup Group has decided to set up its own fund - The Flagship Fund I, operational as of Q3 2019.</p>
      </div>
      </div>
      <div className="row mb4">
          <div className="w-100 w-50-ns">
          <Header>Corporate<br/>Venture<br/>Capital</Header>
          <Paragraph>will be a major topic of interest for the Swiss Startup Capital AG.</Paragraph>
          </div>
          <div className="w-100 w-50-ns">
            <h3>3. Corporate Venturing</h3>
            <p className="lh-copy">In recent years, the Swiss Startup Group has been increasingly mandated by its partners to manage and accompany transactions for their investments. In particular, these included spin-offs, the setting-up of joint ventures and the preparation and execution of exit transactions. Swiss Startup Capital AG has experienced experts at its disposal who can support clients going forward.</p>
            <p className="lh-copy"><a style={{color: "inherit", textDecoration: "underline"}}href="https://ccvs.ch/">Corporate Venture Capital</a> will also be a core focus for Swiss Startup Capital AG. We support companies in setting up and implementing their own structures (internal - external - fund structures).</p>
          </div>
      </div>
      <p className="mw6 center tc lh-copy pt5 b">We are convinced that these ingredients make up an exclusive Swiss pipeline of early-stage investment opportunities here in Switzerland.</p>
      {/* <div className="tc mv3">
        <Link to="/investorclub">
          <div className="button -dark center">Join the Investor Club</div>
        </Link>
      </div> */}
    </div>
    </Wrapper>
  </Layout>
);

export default Venture;

export const query = graphql`
  query {
    investorclub: file(relativePath: { eq: "images/investorclub.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    max: file(relativePath: { eq: "images/max-ssuc.jpg" }) {
      childImageSharp {
        fixed(
          height: 350
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
  }
  philipp: file(relativePath: { eq: "images/philipp-ssuc.jpg" }) {
    childImageSharp {
      fixed(
        height: 350
        traceSVG: { background: "#fff", color: "lightgrey" }
      ) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
}
flavio: file(relativePath: { eq: "images/flavio-ssuc.jpg" }) {
  childImageSharp {
    fixed(
      height: 350
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFixed_tracedSVG
    }
  }
}
  }`
