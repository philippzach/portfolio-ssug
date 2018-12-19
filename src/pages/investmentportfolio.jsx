import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/investmentportfolio.jpg';
import Startup from '../../static/portfoliostartup.jpg';
import '../styles/pages/portfolio.css';
import Slider from '../components/logosliderportfolio';

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
    <div className="flex flex-column flex-row-ns mv4 background">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
        <img src={Startup} alt="" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure">
        <div className="pa4">
          <h2>Startups</h2>
          <p className="lh-copy">
            In the area of technology and innovation, we want to invest in the best startups in Switzerland and the
            world. For this we look for scalable startups with a disruptive idea and an complementary team.
          </p>
          <p className="lh-copy">
            No matter if you need money for your first prototype, for further product development or international
            expansion, we can support you. In addition, with us you do not only get funding, you will benefit from our
            growth services, which offers various skills such as accelerators, angel networks, innovation consulting and
          </p>
          <p className="lh-copy">
            <b>
              <b>Just upload your pitch deck so our business analysts will analyse the potential of your company.</b>
            </b>
          </p>
          <div className="button -dark">Send Pitch Deck</div>
        </div>
      </div>
    </div>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Investors</Title>
      <div className="containerinvestors mv6">
        <h3 className="lh-title measure center">
          Do you want to invest in Swiss startups to extend your portfolio?
        </h3>
        <p className="investorparagraph lh-copy">
          The SWISS STARTUP GROUP is the right partner for this endeavour. Why? The SWISS STARTUP GROUP has a deep
          startup know how, an in-depth view of the swiss startup market and strong growth services which allows us a
          fast, efficient and straightforward process.
        </p>
        <div className="button -dark center">Learn more</div>
      </div>
      <Title>Corporates</Title>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background">
      <div className="w-100 w-60-ns pl3-ns flex items-center">
        <div className="pa4">
          <h2>Corporates</h2>
          <p className="lh-copy">
            Coordination and control mechanisms hinder agile work. As a result, established companies lose market share to innovative startups. 
          </p>
          <p className="lh-copy">
          Corporate venturing enables your company to invest in new strategically relevant business models with
           top entrepreneurs who have fresh ideas and thus a different approach to a specific market. Thereby you
            gain competitive advantages such as specialist knowledge in the core business (R&D), learn new know-how
             in processes and partner models (M&A), open up new business opportunities and much more.
          </p>
          <p className="lh-copy">
              There are a number of possible approaches a business can take to Corporate Venturing. The SWISS STARTUP GROUP is very 
              familiar with the corporate venturing landscape and knows the business from the scratch. We are experts in this field and with our specialized startup know-how, experience and out growth services we strive to provide you with the most suitable strategy with the best service you can find.
          </p>
          <div className="button -dark">Become part of our Portfolio</div>
        </div>
      </div>
      <div className="mb4 mb0-ns w-100 w-40-ns">
        <img src={Startup} alt="" />
      </div>
    </div>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Portfolio</Title>
      <Slider />
    </Wrapper>
  </Layout>
);

export default InvestmentPortfolio;
