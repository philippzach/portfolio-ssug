import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/investmentportfolio.jpg';
import Startup from '../../static/portfoliostartup.jpg';
import Corporates from '../../static/corporatesportfolio.jpg';
import '../styles/pages/portfolio.css';
import Slider from '../components/logosliderportfolio';
import Seo from '../components/SEO/index';

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

const InvestmentPortfolio = () => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – Investment Portfolio" desc="Exclusive startup investment platform, which contains investor club, advisory board and corporate partners for everything about startup investments" />
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Portfolio</Title>
      <div className="containertitle">
        <h2 className="lh-copy ttu headingcolorshadow">Be part of the whole together we grow faster and stronger</h2>
        <p className="lh-copy">
          With our investors club, the network platform with direct access to all stakeholders of the venture chain, our
          know-how, deal-flow and funding the SWISS STARTUP GROUP helps you to meet your needs.
        </p>
        <p className="lh-copy">
        We have an exclusive startup investment platform, which contains our investor’s club, advisory board and corporate partners. We know the corporate venturing landscape inside out and have an excellent network from investors, corporates, startups, mentors and many more.
        </p>
        <p className="lh-copy b">
          Together we achieve more.
        </p>
      </div>
      <h3 className="tc">Our Portfolio</h3>
      <Slider />
      <Title>What we offer</Title>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background pb4">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
        <img src={Startup} alt="" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
          <h2>Startups</h2>
          <p className="lh-copy">
            In the area of technology and innovation, we want to invest in the best startups in Switzerland and the
            world. For this we look for scalable startups with a disruptive idea and an complementary team.
          </p>
          <p className="lh-copy">
          No matter if you need money for your first prototype, for further product development or international expansion, we can support you. In addition, with us you do not only get funding, you will benefit from our overall Swiss Startup Group platform and our exclusive network.
          </p>
          <p className="lh-copy">
            <b>
              <b>Just fill in the questionnaire and upload the necessary documents.</b>
            </b>
          </p>
          <a href="https://ssuf.typeform.com/to/PUNY52" target="_blank">
          <div className="button -dark">Start Now</div>
          </a>
        </div>
      </div>
    </div>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="containerinvestors">
        <h3 className="lh-copy measure center">
          Do you want to invest in Swiss startups to extend your portfolio?
        </h3>
        <p className="investorparagraph lh-copy">
          The SWISS STARTUP GROUP is the right partner for this endeavour. Why? The SWISS STARTUP GROUP has a deep
          startup know how, an in-depth view of the swiss startup market and strong growth services which allows us a
          fast, efficient and straightforward process.
        </p>
        <a href="mailto:virginia.beljean@ssut.ch">
        <div className="button -dark center">Contact us now</div>
        </a>
      </div>
      
    </Wrapper>
    <div className="flex flex-column flex-row-ns mt4 background pb4">
    <div className="mb4 mb0-ns w-100 w-40-ns">
        <img src={Corporates} alt="" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <h2>Corporates</h2>
          <p className="lh-copy measure">
            Coordination and control mechanisms hinder agile work. As a result, established companies lose market share to innovative startups. 
          </p>
          <p className="lh-copy measure">
          Corporate venturing enables your company to invest in new strategically relevant business models with
           top entrepreneurs who have fresh ideas and thus a different approach to a specific market. Thereby you
            gain competitive advantages such as specialist knowledge in the core business (R&D), learn new know-how
             in processes and partner models (M&A), open up new business opportunities and much more.
          </p>
          <p className="lh-copy measure">
              There are a number of possible approaches a business can take to Corporate Venturing. The SWISS STARTUP GROUP is very 
              familiar with the corporate venturing landscape and knows the business from the scratch. We are experts in this field and with our specialized startup know-how, experience and out growth services we strive to provide you with the most suitable strategy with the best service you can find.
          </p>
          <a href="mailto:chris.bargholz@ssuf.ch">
          <div className="button -dark">Tell me more</div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default InvestmentPortfolio;
