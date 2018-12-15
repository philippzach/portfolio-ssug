import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/investorclub.jpg';
import '../styles/pages/investorclub.css';

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
const Investor = () => (
  <Layout>
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Investor Club</Title>
      <div className="containertitle">
        <h1 className="lh-title ttu">For Private Venture Investors </h1>
        <p className="lh-copy">
          We set a new standard in the selection process of early stage venture investment opportunities for qualified
          investors. Together with some of our advisory board members and with of the most renown ultra high net worth
          individuals in Europe we create a powerful and efficient startup investor club.
        </p>
        <p className="lh-copy">
          The SWISS STARTUP GROUP has a unique startup know- how, an in-depth view of the Swiss startup market and a strong platform which allows a fast, efficient and straightforward process. 
        </p>
        <p className="lh-copy">
          With our investor club we are positioned in the sweet spot between 
          business angels and venture capital funds. We source, analyse, review due diligences, structure and negotiate the investment terms and present these investment opportunities to the members of the investor club. 
        </p>
      </div>
      <Title>Testimonials</Title>
    </Wrapper>
  </Layout>
);

export default Investor;
