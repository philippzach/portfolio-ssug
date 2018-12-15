import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/investmentportfolio.jpg';
import Startup from '../../static/portfoliostartup.jpg';
import '../styles/pages/portfolio.css';

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
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Portfolio</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">Be part of the whole together we grow faster and stronger</h1>
        <p className="lh-copy">
          With our investors club, the network platform with direct access to all stakeholders of the venture chain, our
          know-how, deal-flow and funding the SWISS STARTUP GROUP helps you to meet your needs.
        </p>
        <p className="lh-copy">
          We have an exclusive startup investment timeline, which contains our investor’s club, advisory board and
          corporate partners. We know the corporate venturing landscape inside out and have an excellent network from
          investors, corporates, startups, mentors and many more.
        </p>
        <p className="lh-copy">
          Together we achieve more. With our growth services we offer an integrated package which enables an efficient
          and straightforward process for corporates, investors and startups.
        </p>
      </div>
      <Title>Startups</Title>
    </Wrapper>
    <div className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
        <img src={Startup} alt="" />
      </div>
      <div className="w-100 w-60-ns pl3-ns">
        <div>
          <h2>Startups</h2>
          <p>
            In the area of technology and innovation, we want to invest in the best startups in Switzerland and the
            world. For this we look for scalable startups with a disruptive idea and an complementary team.
          </p>
          <p>
            No matter if you need money for your first prototype, for further product development or international
            expansion, we can support you. In addition, with us you do not only get funding, you will benefit from our
            growth services, which offers various skills such as accelerators, angel networks, innovation consulting and
          </p>
          <p>
            <b>
              <b>Just upload your pitch deck so our business analysts will analyse the potential of your company.</b>
            </b>
          </p>
          <button>Send Pitch Deck</button>
        </div>
      </div>
    </div>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Investors</Title>
      <div className="containerinvestors">
        <h3>
          Do you want to invest in Swiss startups
          <br /> to extend your portfolio?
        </h3>
        <p className="investorparagraph">
          The SWISS STARTUP GROUP is the right partner for this endeavour. Why? The SWISS STARTUP GROUP has a deep
          startup know how, an in-depth view of the swiss startup market and strong growth services which allows us a
          fast, efficient and straightforward process.
        </p>
        <button>Learn more</button>
      </div>
      <Title>Corporates</Title>
      <Title>Portfolio</Title>
    </Wrapper>
  </Layout>
);

export default InvestmentPortfolio;
