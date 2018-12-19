import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/growth.jpg';
import '../styles/pages/growth.css';
import Placeholder from '../../static/placeholder.png';
import Product from '../../static/growth-process.svg';
import Marketing from '../../static/growth-market.svg';
import Analysis from '../../static/growth-analysis.svg';
import Acount from '../../static/growth-account.svg';

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

const GrowthServices = () => (
  <Layout>
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Growth</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Dedicated services for our corporate clients, startups and investors</h1>
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
      <Title>Services</Title>
      <h3 className="tc lh-title">What is the growth service platform?</h3>
      <p className="tc lh-copy measure center">
        Our beneficial and unique growth service platform gives you advantages in various areas:
      </p>
      <div>
      <article class="cf mv5">
        <div class="fl w-100 w-50-ns tc flex justify-center pt4">
            <img src={Product} alt="" title="" />
         </div>
        <div class="fl w-100 w-50-ns tc pa4">
         <p className="lh-copy">The <b>SWISS STARTUP TECH</b> helps startups create modern products. With our knowledge in
          application architecture <b>we build highly scalable products and deploy them on cloud infrastructures.</b>
           In addition, we transform existing applications to keep up with the technological progress. 
           We challenge your existing application with our free due diligence. 
            Want to get your product started or need additional speed to meet the deadline?</p>
            <button>We are happy to consult you</button>
          </div>
        </article>
        <article class="mobileview cf mv5">
        <div class="fl w-100 w-50-ns tc pa4">
         <p className="lh-copy">Once the products have been developed, they do not sell themselves. This 
              is where another <b>SWISS STARTUP TECH</b> service comes in. With our experience in marketing 
              and communication, <b>we help you to position the products 
                    correctly and to communicate them externally.</b></p>
            <button>We are happy to consult you</button>
          </div>
        <div class="fl w-100 w-50-ns tc pt4">
            <img src={Marketing} alt="" title="" />
         </div>
        </article>
        <article class="cf mv5">
        <div class="fl w-100 w-50-ns tc pt4">
            <img src={Analysis} alt="" title="" />
         </div>
        <div class="fl w-100 w-50-ns tc pa4">
         <p className="lh-copy"><b>The BV4 experts analyse any startup with their sophisticated rating system and  provide you with relevant information to support your decision process</b> with an objective summary for your convenience. Last but not least they provide with their integrated commercial and financial due diligence a comprehensive review of the startup’s business plan based on projected market conditions, the industry and the competition.</p>
            <button>We are happy to consult you</button>
          </div>
        </article>
        <article class="mobileview cf mv5">
        <div class="fl w-100 w-50-ns tc pa4">
         <p className="lh-copy">With Avaneo we offer <b>customised solutions for startups in the areas of: Accounting, Tax consulting, (Direct and VAT), Payroll accounting, Human resources and controlling.</b>
              Every startups gets a customised advice and therefore we offer accounting solutions that are tailored to your needs.</p>
            <button>We are happy to consult you</button>
          </div>
        <div class="fl w-100 w-50-ns tc pt4">
            <img src={Acount} alt="" title="" />
         </div>
        </article>
        <Title>Networking</Title>
        <div className="mw6 center pa3" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h3 className="lh-title">
      The SWISS STARTUP GROUP offers a unique networking platform including world-class experts at top institutions
      </h3>
      <p className="lh-copy">
      The Swiss Startup Group offers a unique direct access to all stakeholders of the venture value chain such as investors, corporates, startups, top talents, mentors, academic partners and much more of which you can benefit of.
      </p>
      <p className="lh-copy">
      Thanks to the experience of our founding team and advisory board we can help you with access to a large network and key contacts in different areas that will facilitate the implementation of each startup project.
      </p>
      <p className="lh-copy">
      You can build relations with key players in the ecosystem, both entrepreneurs and business angels, investors and VCs.
      </p>
      <div className="tc">
      <div className="button -dark">Learn more</div>
      </div>
    </div>  
      </div>
    </Wrapper>
  </Layout>
);

export default GrowthServices;
