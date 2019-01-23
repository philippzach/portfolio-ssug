import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/growth_rocket.jpg';
import '../styles/pages/growth.css';
//import Placeholder from '../../static/placeholder.png';
import Product from '../../static/ssut.svg' /* //'../../static/growth-process.svg'; */
import Marketing from '../../static/ssut.svg'/* //'../../static/growth-market.svg'; */
import Analysis from '../../static/bv4.svg'/* //'../../static/growth-analysis.svg'; */
import Acount from '../../static/avaneo.svg'/* //'../../static/growth-account.svg'; */
import RedBull from '../../static/logo_partner/lg-redbull.svg';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`

const GrowthServices = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – Growth Services" desc="Dedicated growth services for corporate clients, startups and investors to grow faster. Accounting, Marketing, Finance, Communication and more." />
      <Navbar />
      <Test> 
          <Img fluid={data.growth.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <Title>Growth</Title>
      <div className="containertitle">
        <h2 className="lh-copy ttu headingcolorshadow">Dedicated services for our corporate clients, startups and investors</h2>
        <p className="lh-copy">
          The growth services are just one part from our integrated services. Together we can make your startup grow
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
        Our beneficial and unique growth service platform gives you advantages in various areas:
      </p>
      <article class="cf mv6">
        <div class="backgroundgrowth fl w-100 w-50-ns tc flex justify-center">
            <img src={Product} alt="" title="" />
         </div>
        <div class="fl w-100 w-50-ns tr pa3-s pa3-m pl4-l">
         <p className="lh-copy mt3">The <b>SWISS STARTUP TECH</b> helps startups create modern products. With our knowledge in
          application architecture <b>we build highly scalable products and deploy them on cloud infrastructures.</b>
           In addition, we transform existing applications to keep up with the technological progress. 
           We challenge your existing application with our free due diligence. 
            Want to get your product started or need additional speed to meet the deadline?</p>
            <a href="mailto:virginia.beljean@ssut.ch">
            <div className="button -dark">Learn More</div>
            </a>
          </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <p className="lh-copy mt3 pb5-l"><b>The BV4 experts analyse any startup with their sophisticated rating system and  provide you with relevant information to support your decision process</b> with an objective summary for your convenience. Last but not least they provide with their integrated commercial and financial due diligence a comprehensive review of the startup’s business plan based on projected market conditions, the industry and the competition.</p>
                        <a href="https://www.bv4.ch">
                        <div className="button -dark">To BV4</div>
                        </a>
              </div>
            <div class="backgroundgrowth fl w-100 w-50-ns tc">
                <img src={Analysis} alt="" title="" />
            </div>
        </article>
        

        <article class="cf mv6">
            <div class="backgroundgrowth fl w-100 w-50-ns tc">
                <img src={Marketing} alt="" title="" />
            </div>
            <div class="fl w-100 w-50-ns tr pa4-s pa3-m pl4-l">
            <p className="lh-copy mt3">Once the products have been developed, they do not sell themselves. This 
                  is where another <b>SWISS STARTUP TECH</b> service comes in. With our experience in <b>marketing 
                  and communication</b>, we help you to position the products 
                        correctly and to communicate them externally.</p>
            <a href="mailto:virginia.beljean@ssut.ch" target="_blank">
            <div className="button -dark">Happy to consult you</div>
            </a>
              </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <p className="lh-copy mt3 pb4-l">With Avaneo we offer <b>customised solutions for</b> startups in the areas of: <b>Accounting, Tax consulting, (Direct and VAT), Payroll accounting, Human resources and controlling. </b>
                  Every startups gets a customised advice and therefore we offer accounting solutions that are tailored to your needs.</p>
                  <a href="https://www.avaneo.ch" target="_blank">
                <div className="button -dark">To Avaneo</div>
                </a>
              </div>
            <div class="backgroundgrowth fl w-100 w-50-ns tc">
                <img src={Acount} alt="" title="" />
            </div>
        </article>
        <article class="cf mv6">
            <div class="backgroundgrowth fl w-100 w-50-ns tc">
                <img src={RedBull} alt="" title="" />
            </div>
            <div class="fl w-100 w-50-ns tr pa4-s pa3-m pl4-l">
            <p className="lh-copy mt3">Red Bull Media House offers a wide range of premium media and content products across TV, mobile, digital, audio, and print. As a partner of the SWISS STARTUP GROUP, the <b>Red Bull Media House is part of our Growth Services,</b> with enables  innovative communication. From concept over know-how and equipment to implementation - everything from a single source. </p>
            <a href="https://www.redbullmediahouse.com/" target="_blank">
            <div className="button -dark">To Red Bull</div>
            </a>
              </div>
        </article>
        </Wrapper>
        </div>
        <Wrapper>
        <Title style={{ marginTop: '5em'}}>Networking</Title>
        <div className="mw6 center pa3" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
            <h3 className="lh-copy">
            The SWISS STARTUP GROUP offers a unique networking platform including world-class experts at top institutions
            </h3>
            <p className="lh-copy">
            The SWISS STARTUP GROUP offers a unique direct access to all stakeholders of the venture value chain such as investors, corporates, startups, top talents, mentors, academic partners and much more of which you can benefit of.
            </p>
            <p className="lh-copy">
            Thanks to the experience of our Swiss Startup Group founder team and our high level advisory board we can help you with a fast track access to a large network and top down key contacts to decision makers.
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
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
  }`

