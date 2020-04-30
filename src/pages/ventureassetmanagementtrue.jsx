import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import useLocalStorage from 'react-use-localstorage';
// import Background from '../../static/investorclub.jpg';
import '../styles/pages/investorclub.css';
import { Link, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import Icons from '../components/ssuc/icons';
import Companies from '../components/capital-companies';
import CompaniesPast from '../components/capital-companies-past';
import InvestTeam from '../components/ssuc/team/team-slider';
import Footer from '../components/ssuc/footer';
import SSUC from '../images/ssuc.svg';
import Seo from '../components/SEO/index';
import Advisors from '../components/ssuc/advisors';

const Test = styled.div`
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  max-height: 450px;
`;
const Background = styled.div`
  background-color: #ebecee;
`;
const Header = styled.span`
  font-size: 50px;
  font-family: poppins;
  font-weight: bold;
  line-height: 1em;
`;
const Paragraph = styled.p`
  font-family: roboto;
  font-weight: 200;
  font-size: 1em;
  padding-top: 1em;
  max-width: 18em;
`;
const Spacer = styled.div`
  padding: 1rem 0;
`;

const Venture = ({ data }) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('terms');
    console.log(item);
    if (item === null) {
      navigate('/ventureassetmanagement');
      return null;
    }
    return (
      <Layout>
        <Seo
          title='SWISS STARTUP GROUP – Venture Asset Mangement'
          desc='The Swiss Startup Group has founded Swiss Startup Capital AG as a Venture Asset Management division. Direct Investments - Indirect Investments - Corporate Venture Capital.'
        />
        <Navbar />
        <Test>
          <Img
            fluid={data.investorclub.childImageSharp.fluid}
            className='w-100'
          />
        </Test>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title>About</Title>
          <div className='flex-ns mt5 mb5'>
            <div className='w-100 w-third-ns flex items-center justify-center justify-start-ns '>
              <img src={SSUC} alt='Swiss Startup Capital Logo' width='300px' />
            </div>
            <div className='w-100 w-two-thirds-ns pl0 pl4-ns pt4 tc tl-ns'>
              <h2 className='lh-copy ttu headingcolorshadow'>
                Swiss Startup Capital
              </h2>
              <p className='lh-copy b'>
                Swiss Startup Capital AG, a fully owned subsidiary of Swiss
                Startup Group AG, is the investment arm of the group. The
                dedicated unit offers exclusive access to venture capital
                investments, unlocking new opportunities in the early stage
                venture asset class.
              </p>
              <p className='lh-copy'>
                Our investment capabilities are tailored to the individual needs
                of wealthy private clients and institutional investors,
                featuring our own venture capital fund, an exclusive investors
                club as well as professional corporate venture capital services.
              </p>
            </div>
          </div>
          <Title>Investment Funds - SSUG Flagship Fund I</Title>
          {/* <h3 className='mw6 lh-copy pt4 tr'>SSUG Flagship Fund I</h3> */}
          <p className='lh-copy b'>
            As a leading professional venture platform, the Swiss Startup Group
            has structured and raised its own venture investment fund, the SSUG
            Flagship Fund I, with the aim of making promising early stage
            investments and conducting follow-on investments in our existing
            portfolio.
          </p>
          <p className='lh-copy'>
            This fund is dedicated to qualified private and institutional
            investors who want to invest in early stage ventures through a
            diversified approach and on a discretionary basis. It is a suitable
            solution for all investors who wish to delegate investment decisions
            to a skilled team of venture professionals.
          </p>
          <p className='lh-copy'>
            SSUG Flagship Fund I invests in early stage startups with high
            growth potential in Switzerland, Europe, Israel and the US. It
            invests mainly in startups developing disruptive technologies with
            focus on scalable ICT business models as well as in health-tech
            companies on a selective basis. As part of the Swiss Startup Group,
            the SSUG Flagship Fund I benefits from a unique access to its
            venture platform.
          </p>
          <Icons />
          <Title>Investor Club</Title>
          <p className='lh-copy b'>
            The Investor Club presents qualified investors a hand-picked
            selection of venture investment opportunities on a regular basis and
            supports individual investment decisions with a professional due
            diligence process.
          </p>
          <p className='lh-copy'>
            This service is designed for experienced private investors,
            multi-family offices, asset managers as well as banks who would like
            to offer a professional access to the attractive venture asset class
            to their clients. Our specialists accompany each investment process
            and actively support our clients with ongoing monitoring and
            reporting.
          </p>
          <p className='lh-copy'>
            In case investors already own a portfolio of investments, clients
            can benefit from our comprehensive venture experience through a
            managed account setup. Our professional investors will analyze the
            individual portfolio companies, manage the major investments and
            ensure a regular reporting.
          </p>
          <p className='lh-copy'>
            Thanks to our proprietary deal flow paired with the due diligence
            process and the portfolio support, we create true value for
            investors and companies alike.
          </p>
          <div className='mb5' style={{ textAlign: 'center' }}>
            <Link to='/investorclub'>
              <div className='button -dark center'>Join our Investor Club</div>
            </Link>
          </div>
          <Spacer />
          <Title>Corporate Venture Capital</Title>
          <p className='lh-copy b'>
            In recent years, the Swiss Startup Group has been increasingly
            mandated by companies to manage and accompany transactions for their
            corporate investments. Such transactions can include spin-offs, the
            creation of joint ventures, third party funds, the implementation of
            own investment structures or the preparation and execution of exit
            transactions.
          </p>
          <p className='lh-copy mb5'>
            Corporations can rely on skilled experts with a comprehensive
            knowledge who can advise and support clients effectively throughout
            the range of corporate venturing services required.
          </p>
          <Spacer />
          <Title>Companies</Title>
          <p className='lh-copy b'>
            Swiss Startup Capital has been active in the market since 2018 and
            has already funded the following companies:
          </p>
          <Companies />
          <p className='lh-copy mb2'>
            Prior to launching Swiss Startup Capital, the Swiss Startup Group’s
            team has supported and funded a number of startups that came out of
            the Acceleration and Company Building programs run by the Swiss
            Startup Factory since 2015.
          </p>
          <div className='mb4' style={{ textAlign: 'center' }}>
            <Link to='/investmentportfolio'>
              <div className='button -dark center'>
                check the Swiss Startup Group's portfolio
              </div>
            </Link>
          </div>
          <p className='lh-copy tc'>
            Previously, our team invested in and helped build successful
            companies in various sectors:
          </p>
          <CompaniesPast />
          <Title>Team</Title>
        </Wrapper>
        <Background>
          <Wrapper>
            <h3 className='mw6 lh-copy pt4'>
              A team of dedicated professionals committed to exceeding your
              expectations
            </h3>
            <div className='testimonialmobile'>
              <article className='mobile mw6  pa3 pa4-ns mv3'>
                <div className='tc'>
                  <a href='https://www.linkedin.com/in/max-meister-268a168/'>
                    <Img
                      fixed={data.max.childImageSharp.fixed}
                      alt='Swiss Startup Capital Team'
                      className='shadow-5'
                    />
                  </a>
                  <h4 className='pt4 mb1'>Max Meister</h4>
                </div>
                <p className='tc measure center f6 black-70'>
                  Managing Director
                </p>
              </article>
              <article className='mobile mw6  pa3 pa4-ns mv3'>
                <div className='tc'>
                  <a href='https://www.linkedin.com/in/grwaser/'>
                    <Img
                      fixed={data.waser.childImageSharp.fixed}
                      alt='Swiss Startup Capital Team'
                      className='shadow-5'
                    />
                  </a>
                  <h4 className='pt4 mb1'>Guillaume Waser</h4>
                </div>
                <p className='tc measure center f6 black-70'>
                  Managing Director
                </p>
              </article>
              <article className='mobile mw6  pa3 pa4-ns mv3'>
                <div className='tc'>
                  <a href='https://www.linkedin.com/in/philippsteinberger/'>
                    <Img
                      fixed={data.philipp.childImageSharp.fixed}
                      alt='Swiss Startup Capital Team'
                      className='shadow-5'
                    />
                  </a>
                  <h4 className='pt4 mb1'>Philipp Steinberger</h4>
                </div>
                <p className='tc measure center f6 black-70'>
                  Investment Director
                </p>
              </article>
            </div>
            <div className='testimonialmobile'>
              <article className='mobile mw6  pa3 pa4-ns mv3'>
                <div className='tc'>
                  <a href='https://www.linkedin.com/in/emanuelelarocca/'>
                    <Img
                      fixed={data.flavio.childImageSharp.fixed}
                      alt='Swiss Startup Capital Team'
                      className='shadow-5'
                    />
                  </a>
                  <h4 className='pt4 mb1'>Emanuele Larocca</h4>
                </div>
                <p className='tc  measure center f6 black-70'>
                  Investment Associate
                </p>
              </article>
              <article className='mobile mw6  pa3 pa4-ns mv3'>
                <div className='tc'>
                  <a href='https://www.linkedin.com/in/jingling-tu-42810691/'>
                    <Img
                      fixed={data.jingling.childImageSharp.fixed}
                      alt='Swiss Startup Capital Team'
                      className='shadow-5'
                    />
                  </a>
                  <h4 className='pt4 mb1'>Jingling Tu</h4>
                </div>
                <p className='tc measure center f6 black-70'>
                  Investment Analyst
                </p>
              </article>
              <article className='mobile mw6  pa3 pa4-ns mv3'>
                <div className='tc'>
                  <a href='https://www.linkedin.com/in/elena-orbetsova-6151a310b/'>
                    <Img
                      fixed={data.elena.childImageSharp.fixed}
                      alt='Swiss Startup Capital Team'
                      className='shadow-5'
                    />
                  </a>
                  <h4 className='pt4 mb1'>Elena Orbetsova</h4>
                </div>
                <p className='tc measure center f6 black-70'>
                  Investment Analyst
                </p>
              </article>
            </div>
          </Wrapper>
        </Background>
        <Spacer />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title>Investment Committee</Title>
          <InvestTeam data={data} />
          <Title>Advisory Board</Title>
          <Advisors data={data} />
        </Wrapper>
        <Footer />
        {/*  <Wrapper>
         <Title className='mv5'>Services</Title>
          <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className='row mt4'>
              <div className='w-100 w-50-ns'>
                <Header>
                  Investments
                  <br />& Support
                </Header>
                <Paragraph>
                  through our proprietary dealflow, due diligence process and
                  portfolio support we create value for our companies and investors.
                </Paragraph>
              </div>
              <div className='w-100 w-50-ns'>
                <h3>1. Direct Investments</h3>
                <p className='lh-copy b'>
                  In the area of direct investments, we present qualified investors
                  a carefully selected pipeline of promising investment
                  opportunities and support individual investment decisions with a
                  professional due diligence.
                </p>
                <p className='lh-copy'>
                  At the request of investors, we accompany the investments,
                  actively support them and regularly report on their development.
                  With this competent offer, we address experienced private
                  investors as well as multi-family offices and asset managers and
                  banks who would like to give their customers professional access
                  to an attractive venture asset class.
                </p>
                <p className='lh-copy'>
                  In the form of managed accounts, we offer our vast venture
                  investment experience to investors who already own a portfolio of
                  venture investments. We analyze the individual portfolio
                  companies, manage the most important investments and report to the
                  investor on a regular basis. Like this, we support our clients so
                  they can focus on their other core asset classes, creating value
                  efficiently.
                </p>
              </div>
            </div>
            <div className='row mv6'>
              <div className='w-100 w-50-ns'>
                <Header>
                  SSUG Flagship
                  <br /> Fund I
                </Header>
                <Paragraph>
                  The first fund will start operations in Q3 2019.
                </Paragraph>
              </div>
              <div className='w-100 w-50-ns'>
                <h3>2. Indirect Investments</h3>
                <p className='lh-copy'>
                  In order to invest into new and promising growth companies, but
                  also to conduct follow-on investments in our existing portfolio,
                  the Swiss Startup Group has decided to set up its own fund - The
                  SSUG Flagship Fund I, will be operational as of Q3 2019.
                </p>
                <p className='lh-copy'>
                  This fund is dedicated to qualified private and institutional
                  investors who want to invest in venture with an indirect
                  investment approach and on a discretionary base. It is a suitable
                  solution for all investors who wish to delegate the investment
                  decisions.
                </p>
              </div>
            </div>
            <div className='row mb4'>
              <div className='w-100 w-50-ns'>
                <Header>
                  Corporate
                  <br />
                  Venture
                  <br />
                  Capital
                </Header>
                <Paragraph>
                  will be a major topic of interest for the Swiss Startup Capital
                  AG.
                </Paragraph>
              </div>
              <div className='w-100 w-50-ns'>
                <h3>3. Corporate Venturing</h3>
                <p className='lh-copy'>
                  In recent years, the Swiss Startup Group has been increasingly
                  mandated by its partners to manage and accompany transactions for
                  their investments. In particular, these included spin-offs, the
                  setting-up of joint ventures and the preparation and execution of
                  exit transactions. Swiss Startup Capital AG has experienced
                  experts at its disposal who can support clients going forward.
                </p>
                <p className='lh-copy'>
                  <a
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                    href='https://ccvs.ch/'
                  >
                    Corporate Venture Capital
                  </a>{' '}
                  will also be a core focus for Swiss Startup Capital AG. We support
                  companies in setting up and implementing their own structures
                  (internal - external - fund structures).
                </p>
              </div>
            </div>
            <p className='mw6 center tc lh-copy pt5 b'>
              We are convinced that these ingredients make up an exclusive Swiss
              pipeline of early-stage investment opportunities here in Switzerland.
            </p>
            <div className="tc mv3">
            <Link to="/investorclub">
              <div className="button -dark center">Join the Investor Club</div>
            </Link>
          </div> 
          </div> 
        </Wrapper> */}
      </Layout>
    );
  }
  return null;
};

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
    flavio: file(relativePath: { eq: "images/emanuele-ssuc.jpg" }) {
      childImageSharp {
        fixed(
          height: 350
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    elena: file(relativePath: { eq: "images/elena-ssuc-new.jpg" }) {
      childImageSharp {
        fixed(
          height: 350
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    jingling: file(relativePath: { eq: "images/jingling-ssuc-new.jpg" }) {
      childImageSharp {
        fixed(
          height: 350
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    waser: file(relativePath: { eq: "images/waser-ssuc.jpg" }) {
      childImageSharp {
        fixed(
          height: 350
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    urs: file(relativePath: { eq: "images/urs.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    peter: file(relativePath: { eq: "images/peternew.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    patrick: file(relativePath: { eq: "images/patrick.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    christian: file(relativePath: { eq: "images/christian.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iurchristian: file(relativePath: { eq: "images/iurchristian.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    david: file(relativePath: { eq: "images/davidallemann.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pfister: file(relativePath: { eq: "images/pfister.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    brouhard: file(relativePath: { eq: "images/brouhard-new.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mike: file(relativePath: { eq: "images/mike_baur.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stucky: file(relativePath: { eq: "images/stuky_new.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ebner: file(relativePath: { eq: "images/ebner_new.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    francis: file(relativePath: { eq: "images/francis.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
