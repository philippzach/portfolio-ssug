import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
// import Background from '../../static/investorclub.jpg';
import '../styles/pages/investorclub.css';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Strebel from '../../static/hanspeter_strebel.jpg';
import Urs from '../../static/urs_wietlisbach.jpg';
import Chris from '../../static/chris_wildmoser.jpg';
import Seo from '../components/SEO/index';

const Test = styled.div`
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  max-height: 450px;
`;

const Investor = ({ data }) => (
  <Layout>
    <Seo
      title='SWISS STARTUP GROUP – Investor Club'
      desc='Exclusive Investor Club for qualified private early stage venture investors that offers great investment opportunities'
    />
    <Navbar />
    <Test>
      <Img
        fluid={data.investorclubold.childImageSharp.fluid}
        className='w-100'
      />
    </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Investor Club</Title>
      <div className='containertitle'>
        <h2 className='lh-copy ttu headingcolorshadow'>
          For Private Venture Investors{' '}
        </h2>
        <p className='lh-copy'>
          We set a new standard in the selection process of early-stage venture
          investment opportunities for qualified investors. Together with our
          advisory board members and some of the most renowned ultra-high
          net-worth individuals in Europe we create a powerful and efficient
          startup investor club.
        </p>
        <p className='lh-copy'>
          The SWISS STARTUP GROUP combines unique startup know-how, an in-depth
          view of the Swiss startup market and a strong platform to allow for a
          fast, efficient and straightforward process.
        </p>
        <p className='lh-copy'>
          With our Investor Club we are positioned in the sweet spot between
          business angels and venture capital funds. We source, analyze and
          review due diligences and structure and negotiate the investment terms
          before presenting investment opportunities to the members of the
          Investor Club.
        </p>
        <p className='lh-copy b'>
          As a member of our Investor Club you will join an exclusive circle of
          very active, private venture investors and the SWISS STARTUP GROUP
          will become your venture office.
        </p>
      </div>
      <Title>Testimonials</Title>
    </Wrapper>
    <div className='testimonialmobile'>
      <article className='mobile mw6  pa3 pa4-ns mv3'>
        <div className='tc'>
          <img src={Chris} className='br-100 h4 w4 dib' title='' alt='' />
          <h4 className='pt4'>Chris Wildmoser</h4>
        </div>
        <p className='tc lh-copy measure center f6 black-70'>
          Christian Wildmoser is a former partner of CVC Capital Partners, one
          of the leading private equity firms in the world. He has more than 25
          years of investment experience and today is an active venture
          investor.
        </p>
      </article>
      <article className='mobile mw6  pa3 pa4-ns mv3'>
        <div className='tc'>
          <img src={Urs} className='br-100 h4 w4 dib' title='' alt='' />
          <h4 className='pt4'>Urs Wietlisbach</h4>
        </div>
        <p className='tc lh-copy measure center f6 black-70'>
          Urs Wietlisbach is co-founder of Partners Group based in Zug,
          Switzerland. He is a member of Partners Group Holding AG’s Board of
          Directors and Chairman of the Markets Committee. He has more than 25
          years of industry experience and is an active venture investor.
        </p>
      </article>
      <article className='mobile mw6  pa3 pa4-ns mv3'>
        <div className='tc'>
          <img src={Strebel} className='br-100 h4 w4 dib' title='' alt='' />
          <h4 className='pt4'>Dr. Hans Peter Strebel</h4>
        </div>
        <p className='tc lh-copy measure center f6 black-70'>
          Dr. Hans-Peter Strebel is the creator and owner of the competence
          center for top athletics and interdiciplinary sports research „On your
          marks“ - OYM AG - based in Cham, Switzerland.{' '}
          <a className='black' href='http://www.oym.ch/vision/'>
            www.oym.com
          </a>
        </p>
      </article>
    </div>
    <div
      className='mw7 center pa3'
      style={{ paddingTop: '2rem', paddingBottom: '4rem' }}
    >
      <h3 className='mw6 center lh-copy lcenter tc pt4'>
        Switzerland – The world leader in innovation and top startup hub.
      </h3>
      <h4 className='center mw6 tc'>Why?</h4>
      <div className='row'>
        <article className='shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column '>
          <div className='tc'>
            <h3 className='f4 lh-copy' style={{ color: 'rgb(0, 71, 107)' }}>
              World Class Talent Platform
            </h3>
          </div>
          <p className='lh-copy measure center f6 black-70'>
            Thanks to our Swiss universities and our worldwide benchmarking
            educational system, we have a world-class talent platform.
          </p>
        </article>
        <article className='shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column '>
          <div className='tc'>
            <h3 className='f4' style={{ color: 'rgb(0, 71, 107)' }}>
              Liberal Governance
            </h3>
          </div>
          <p className='lh-copy measure center f6 black-70'>
            The Swiss economy is one of the most liberal and competitive
            economies in the world. Low capital costs, a stable currency,
            moderate taxation, a federal state system, and economic and
            political stability guarantee a high level of security for
            investments in Switzerland.
          </p>
        </article>
      </div>
      <div className='row'>
        <article className='shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column '>
          <div className='tc'>
            <h3 className='f4' style={{ color: 'rgb(0, 71, 107)' }}>
              World Market Players
            </h3>
          </div>
          <p className='lh-copy measure center f6 black-70'>
            Switzerland has a very strong network of world market player
            companies such as ABB, Credit Suisse, UBS, Nestlé, Roche, or
            Novartis, to mention just a few. Last but not least, Switzerland
            offers political stability and liberal laws.
          </p>
        </article>
        <article className='shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column '>
          <div className='tc'>
            <h3 className='f4' style={{ color: 'rgb(0, 71, 107)' }}>
              Entrepreneurial Mindset
            </h3>
          </div>
          <p className='lh-copy measure center f6 black-70'>
            We experience a strong push of Switzerland’s next generation to
            follow an entrepreneurial career and create own startup companies.
          </p>
        </article>
      </div>
      <p className='mw6 center tc lh-copy pt5 b'>
        We are convinced that these ingredients make up an exclusive Swiss
        pipeline of early-stage investment opportunities here in Switzerland.
      </p>
      <div className='tc mt5'>
        <a href='mailto:philipp.steinberger@ssuc.ch'>
          <div className='button -dark center'>Join the Investor Club</div>
        </a>
      </div>
    </div>
  </Layout>
);

export default Investor;

export const query = graphql`
  query {
    investorclubold: file(relativePath: { eq: "images/investorclub-old.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
