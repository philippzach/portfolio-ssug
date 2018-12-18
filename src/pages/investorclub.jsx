import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import Background from '../../static/investorclub.jpg';
import '../styles/pages/investorclub.css';
import Strebel from '../../static/hanspeter_strebel.jpg';
import Urs from '../../static/urs_wietlisbach.jpg';
import Chris from '../../static/chris_wildmoser.jpg';

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
          The SWISS STARTUP GROUP has a unique startup know- how, an in-depth view of the Swiss startup market and a
          strong platform which allows a fast, efficient and straightforward process.
        </p>
        <p className="lh-copy">
          With our investor club we are positioned in the sweet spot between business angels and venture capital funds.
          We source, analyse, review due diligences, structure and negotiate the investment terms and present these
          investment opportunities to the members of the investor club.
        </p>
      </div>
      <Title>Testimonials</Title>
    </Wrapper>
    <div className="testimonialmobile">
      <article className="mobile mw6 bg-white pa3 pa4-ns mv3">
        <div className="tc">
          <img src={Chris} className="br-100 h4 w4 dib" title="" alt="" />
          <h4 className="pt4">Chris Wildmoser</h4>
        </div>
        <p className="tc lh-copy measure center f6 black-70">
          Christian Wildmoser is former partner of CVC Capital Partners and Swiss Startup Group Investor.
        </p>
      </article>
      <article className="mobile mw6 bg-white pa3 pa4-ns mv3">
        <div className="tc">
          <img src={Urs} className="br-100 h4 w4 dib" title="" alt="" />
          <h4 className="pt4">Urs Wietlisbach</h4>
        </div>
        <p className="tc lh-copy measure center f6 black-70">
          Urs Wietlisbach co-founded Partners Group in 1996. He is a member of Partners Group Holding AG’s Board of
          Directors and Chairman of the Markets Committee, based in Zug. He has 28 years of industry experience.
        </p>
      </article>
      <article className="mobile mw6 bg-white pa3 pa4-ns mv3">
        <div className="tc">
          <img src={Strebel} className="br-100 h4 w4 dib" title="" alt="" />
          <h4 className="pt4">Dr. Hans Peter Strebel</h4>
        </div>
        <p className="tc lh-copy measure center f6 black-70">
          Owner of «On Your Marks», the competence center for top athletics and researchMarkets Committee, based in Zug.
          He has 28 years of industry experie
        </p>
      </article>
    </div>
    <div className="mw6 center pa3" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <h3 className="lh-title">
        Switzerland is one of the leading countries of innovation and has a good positioning as a startup hub
      </h3>
      <p className="lh-copy">
        As a member of our investor club you will receive numerous advantages. One of them is that you can extend your
        portfolio. And the SWISS STARTUP GROUP will support you as your partner from the very beginning.
      </p>
      <p className="lh-copy">
        First we have a world-class talent platform with our Swiss universities and our world wide benchmarking
        educational system. Second our home market is a great testing market before scaling globally. Third Switzerland
        has a very strong network of world market player companies such as ABB, Credit Suisse, UBS, Nestlé, Roche,
        Novartis just to mention a few of them. Last but not least Switzerland offers political stability and liberal
        laws.{' '}
      </p>
      <p className="lh-copy">
        We experience a strong push of Switzerland’s next generation to follow an entrepreneurial career and create
        their own startup companies. We are convinced that these ingredients follow in a exclusive Swiss investment
        pipeline of early stage investment opportunities here in Switzerland.
      </p>
      <div className="tc mt5">
      <div className="button -dark center">Join the Investor Club</div>
      </div>
    </div>
  </Layout>
);

export default Investor;
