import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
// import Background from '../../static/growth_rocket.jpg';
import '../styles/pages/growth.css';
// import Placeholder from '../../static/placeholder.png';
import { graphql } from 'gatsby';
import Product from '../../static/ssut.svg'; /* //'../../static/growth-process.svg'; */
import Marketing from '../../static/ssut.svg'; /* //'../../static/growth-market.svg'; */
import Analysis from '../../static/bv4.svg'; /* //'../../static/growth-analysis.svg'; */
import Acount from '../../static/infeas.svg'; /* //'../../static/growth-account.svg'; */
import RedBull from '../../static/redbull.svg';
import Seo from '../components/SEO/index';
import Img from 'gatsby-image';

const Test = styled.div`
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  max-height: 450px;
`;

const GrowthServices = ({ data }) => (
  <Layout>
    <Seo
      title="SWISS STARTUP GROUP – Growth Services"
      desc="Dedicated growth services for corporate clients, startups and investors to grow faster. Accounting, Marketing, Finance, Communication and more."
    />
    <Navbar />
    <Test>
      <Img fluid={data.growth.childImageSharp.fluid} className="w-100" />
    </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <Title>Growth</Title>
      <div className="containertitle">
        <h2 className="lh-copy ttu headingcolorshadow">
          Dedicated services for our corporate clients, startups and investors
        </h2>
        <p className="lh-copy">
          The growth services are just one part of our integrated services. Together we can make your startup grow
          faster and take it to the next level.
        </p>
        <p className="lh-copy">
          As a founder of a startup, you already have far too much on your plate. That's why we put growth services
          together with the aim of offering you dedicated services and keeping your back free so that you can
          concentrate on the topics that matter the most.
        </p>
        <p className="lh-copy">
          We constantly work on further expanding our growth services. They cover various needs, such as accounting,
          marketing and communication, legal, finance, growth hacking and more.
        </p>
      </div>
    </Wrapper>
    <div className="backgroundgrowthcontainer pv5">
      <Wrapper>
        <Title>Services</Title>
        <h3 className="tc lh-title">What is the growth service platform?</h3>
        <p className="tc lh-copy measure center">
          Our beneficial and unique growth service platform offers you advantages in various areas:
        </p>
        <article className="cf mv6">
          <div className="backgroundgrowth fl w-100 w-50-ns tc flex justify-center">
            <img src={Product} alt="" title="" />
          </div>
          <div className="fl w-100 w-50-ns tr pa3-s pa3-m pl4-l">
            <p className="lh-copy mt3">
              <b>SWISS STARTUP TECH</b> enables companies to plan, design and transform the potential of digitalization
              and to turn the concept of blockchain into business results. The people involved love to build digital
              products and services, thus combining future customer needs with technological potential.
              <b>Their approach takes 100 days from the idea to a private or public beta MVP launch</b>
              They work in small interdisciplinary teams to create mockups, PoCs, prototypes and MVPs for compelling and
              profitable customer experiences.
            </p>
            <a href="mailto:peach.zwyssig@ssut.ch">
              <div className="button -dark">Contact Now</div>
            </a>
          </div>
        </article>
        <article className="mobileview cf mv6">
          <div className="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <p className="lh-copy mt3">
              <b>
                The BV4 experts analyze any startup with their sophisticated rating system and provide you with relevant
                information to support your decision process
              </b>{' '}
              with an objective summary for your convenience. Last but not least, with their integrated commercial and
              financial due diligence they provide a comprehensive review of the startup’s business plan based on
              projected market conditions, the industry and the competition.
            </p>
            <a href="https://www.bv4.ch">
              <div className="button -dark">To BV4</div>
            </a>
          </div>
          <div className="backgroundgrowth fl w-100 w-50-ns tc">
            <img src={Analysis} alt="" title="" />
          </div>
        </article>

        <article className="cf mv6">
          <div className="backgroundgrowth fl w-100 w-50-ns tc">
            <img src={Marketing} alt="" title="" />
          </div>
          <div className="fl w-100 w-50-ns tr pa4-s pa3-m pl4-l">
            <p className="lh-copy mt3">
              Once the products have been developed, they do not sell themselves. This is where another{' '}
              <b>SWISS STARTUP TECH</b> service comes in. With our <b>marketing and communication</b> experience, we
              help you position the products correctly and market them successfully.
            </p>
            <a href="mailto:virginia.beljean@ssut.ch" target="_blank">
              <div className="button -dark">Happy to consult you</div>
            </a>
          </div>
        </article>
        <article className="mobileview cf mv6">
          <div className="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <p className="lh-copy mt3 pb4-l">
              With Infeas we offer <b>customised solutions for startups</b> in the areas of: Accounting, Tax Consulting,
              (Direct and VAT), Payroll Accounting, Human Resources and Controlling. Every startup receives customized
              advice and accounting solutions that are tailored to their needs.
            </p>
            <a href="https://www.infeas.com" target="_blank">
              <div className="button -dark">To Infeas</div>
            </a>
          </div>
          <div className="backgroundgrowth fl w-100 w-50-ns tc">
            <img src={Acount} alt="" title="" />
          </div>
        </article>
        <article className="cf mv6">
          <div className="backgroundgrowth fl w-100 w-50-ns tc">
            <img src={RedBull} alt="" title="" />
          </div>
          <div className="fl w-100 w-50-ns tr pa4-s pa3-m pl4-l">
            <p className="lh-copy mt3">
              Red Bull Media House offers a wide range of premium media and content products across TV, mobile, digital,
              audio, and print. As a partner of the SWISS STARTUP GROUP, the{' '}
              <b>Red Bull Media House is part of our Growth Services</b>, thus facilitating innovative communication.
              From concept to know-how and equipment to implementation - everything from a single source.
            </p>
            <a href="https://www.redbullmediahouse.com/" target="_blank">
              <div className="button -dark">To Red Bull Media House</div>
            </a>
          </div>
        </article>
      </Wrapper>
    </div>
    <Wrapper>
      <Title style={{ marginTop: '5em' }}>Networking</Title>
      <div className="mw6 center pa3" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
        <h3 className="lh-copy">
          The SWISS STARTUP GROUP offers a unique networking platform including world-class experts from top
          institutions
        </h3>
        <p className="lh-copy">
          The SWISS STARTUP GROUP offers unique direct access to all stakeholders of the venture value chain such as
          investors, corporates, startups, top talents, mentors, academic partners and many more for your benefit.
        </p>
        <p className="lh-copy">
          Thanks to the experience of the Swiss Startup Group founder team and the high-level advisory board, we can
          provide you with fast-track access to an extensive network and top-down contacts to key decision makers.
        </p>
        <div className="tc">
          <a href="mailto:virginia.beljean@ssut.ch">
            <div className="button -dark">Learn more</div>
          </a>
        </div>
      </div>
    </Wrapper>
  </Layout>
);

export default GrowthServices;

export const query = graphql`
  query {
    growth: file(relativePath: { eq: "images/growth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, traceSVG: { background: "#fff", color: "lightgrey" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
