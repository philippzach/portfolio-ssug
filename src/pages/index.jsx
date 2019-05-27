import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import { Layout, Listing, Wrapper, Title, Navbar } from 'components';
import Img from 'gatsby-image';
//import Background from '../../static/indexbg.jpg';
//import BackgroundMobile from '../../static/indexbgmobile.jpg';
import '../styles/pages/index.css';
import Logo from '../group.svg';
import DnaSlider from '../components/pictureslider/indexdna';
import Acceleration from '../../static/indexacceleration.svg';
import Portfolio from '../../static/indexportfolio.svg';
import Growth from '../../static/indexgrowth.svg';
import Investors from '../../static/indexinvestors.svg';
import LogoSlider from '../components/logoslider';
import FounderSlider from '../components/pictureslider/indexfounders';
import Point from '../../static/point.svg';
import Seo from '../components/SEO/index';
import SocialBanner from '../../static/socialsharing.jpg'

/*
const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 900px;
`

 const HeroInner = styled.div`
  h1 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 3em;
  }
  @media (min-width: 1000px) {
    position: absolute;
    top: 150px;
    left: 50px;
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    position: absolute;
    top: 133px;
    left: 50px;
  }
  @media (max-width: 700px) {
    text-align: center;
    h1{
      padding-top: 2rem;
    }
  }
`;

const HeroText = styled.div`
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  max-width: 41%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
    max-width: 81%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
    max-width: 81%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin-bottom: 5em;
    padding: 1em;
  }
`; */
const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 750px;
`

const HeroInner = styled.div`
  h1 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 3em;
    white-space: nowrap;
    color: white;
    text-shadow: 1px 2px 4px rgba(0,0,0,.75);
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 400px;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    text-align: center;
    transform: translate(-50%, -50%);
    line-height: 65px;
  }
  @media (min-width: 950px) and (max-width: 1200px){
    position: absolute;
    top: 350px;
    left: 50%; 
    text-align: center;
    transform: translate(-50%, -50%);
    line-height: 65px;
  }
  @media (min-width: 700px) and (max-width: 950px) {
    position: absolute;
    top: 275px;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 700px) {
    text-align: center;
    h1{
      padding-top: 2rem;
      white-space: unset;
      color: #333333;
      text-shadow: 1px 1px 1px #666;
    }
  }
`;

const HeroText = styled.div`
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    padding-bottom: 2em;
    max-width: 100%;
    color: white;
    text-shadow: 1.5px 1.5px 3.5px #666;
}
  @media (max-width: 950px) {
    font-size: 1.4rem;
    max-width: 100%;
    padding-bottom: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
    max-width: 100%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin-bottom: 5em;
    padding: 1em;
    color: black;
    text-shadow: none;
    margin-bottom: 0;
    padding-bottom: 2em;
  }
`;

const BulletPoint = styled.img`
 height: 10px;
 padding-right: 0.3em;
 `

class Index extends Component {
  render() {
    const {
      data: { posts },
      data: { index }
    } = this.props;
    return (
      <Layout>
        <Seo title="SWISS STARTUP GROUP - World Class Venture Builder" desc="Swiss Venture Builder for Startup Scouting, Analysis, Acceleration, Company Building, Corporate Venturing, Growth and Investments in one platform." banner={SocialBanner} />
          <Navbar />
          <Test> 
            <Img fluid={index.childImageSharp.fluid} className="w-100" />
          </Test>
          <HeroInner>
            <h1 className="headingcolorshadow">
              Switzerland's 
              #1
              <br/>
              Venture Builder
            </h1>
            <HeroText>
            A privately financed Swiss venture platform for scouting, building, accelerating and investing in the most promising startups.
            </HeroText>
          </HeroInner>
        <div className="line" />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="logocontainer">
            <h3 className="lh-copy headingcolorshadow tc mt4 mb5">The Power of our Platform</h3>
            {/* <div className="fadeintextrighttop"><BulletPoint src={Point} />Know How</div>
            <div className="fadeintextlefttop"><BulletPoint src={Point} />Network</div> */}
            <img src={Logo} alt="" title="" description="" className="logoheight"/>
            {/* <div  className="fadeintextrightbottom"><BulletPoint src={Point} />Deal Flow</div>
            <div className="fadeintextleftbottom"><BulletPoint src={Point} />Funding</div> */}
          </div>
          <div className="containertitle">
            <h2 className="lh-copy headingcolorshadow">
            OUR AMBITION: TO BE ONE OF THE WORLD’S LEADING VENTURE BUILDERS
            </h2>
            <p className="lh-copy"><span className="b">The SWISS STARTUP GROUP  is the only market player in Switzerland that combines all assets of the venture business on one platform.</span></p>
            <p className="lh-copy">
            Our venture platform allows you to scout, analyze, accelerate, build and invest in the most promising startups and to become part of the rapidly growing Swiss startup ecosystem.
            </p>
            <p className="lh-copy">As a independent venture builder with proven track record we have an exclusive skill set and know-how. We have in-depth knowledge of the Swiss startup market and scout actively for the best cases, building a strong bridge between the Swiss and the international markets.</p>
            <p className="lh-copy">Our venture platform combines all different skills of accelerators, angel networks, VCs, venture builders and innovation consulting. It makes the Swiss Startup Group a unique part of Switzerland’s startup ecosystem.</p>
            <b className="lh-copy">We are dedicated, passionate and driven by success.</b>
            <br />
            <b className="lh-copy">We have skin in the game.</b>
          </div>
          <Title style={{ marginTop: '4rem', marginBottom: '2em' }}>Our DNA</Title>
        </Wrapper>
        <DnaSlider />
        <Wrapper style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <Title style={{ marginTop: '4rem' }}>What we do</Title>
        </Wrapper>
        <>
          <div className="cardwrapper">
          <Link to="/factory">
            <div className="card black">
              <img className="svgicons" src={Acceleration} alt="" description="" title="" />
              {/*}<h4>Acceleration</h4>{*/}
              <p className="iconsdescription lh-copy">
                  Our <b>Accelerator</b> provides a professional execution platform to corporates and startups.
              </p>
              <p className="ttu b">Our Accelerator ></p>
            </div>
            </Link>
            <Link to="/investorclub">
            <div className="card black">
              <img className="svgicons" src={Investors} alt="" description="" title="" />
              {/*}<h4>Investors</h4>{*/}
              <p className="iconsdescription lh-copy">
                Become part of our <b>Investors Club</b> and invest in startups to extend your portfolio.
              </p>
              <p className="ttu b">Learn More ></p>
            </div>
            </Link>
            <Link to="/investmentportfolio">
            <div className="card black">
              <img className="svgicons" src={Portfolio} alt="" description="" title="" />
              {/*}<h4>Portfolio</h4>{*/}
              <p className="iconsdescription lh-copy">
                We invest in a <b>Portfolio</b> of well diversified startups in different stages, industries and countries.
              </p>
              <p className="ttu b">Our Portfolio ></p>
            </div>
            </Link>
            <Link to="/growthservices">
            <div className="card black">
              <img className="svgicons" src={Growth} alt="" description="" title="" />
              {/*}<h4>Growth</h4>{*/}
              <p className="iconsdescription lh-copy">
                We offer a dedicated and specialized <b>Growth Service Platform</b> for corporate clients, startups and
                investors.
              </p>
              <p className="ttu b">Our Growth Services></p>
            </div>
            </Link>
          </div>
        </>
        <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
          <Title className="mb4-l mb5">Founders</Title>
        </Wrapper>
          <FounderSlider />
        <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
          <Title>Partners</Title>
          </Wrapper>
            <div className="backgroundpartners">
            <Wrapper>
            <h3 className="tc pt4">Strategic Partners</h3>
            <p className="lh-copy tc pb4">
            We develop strategic partnerships with companies and organizations that share important core and strategic startup goals and values. These partnerships comprise several areas expertise and execution, ultimately aiming at creating value for our partners, the Swiss startup ecosystem as well as the Swiss Startup Group.
            </p>
            <LogoSlider />
          </Wrapper>
        </div>
        <Wrapper style={{ paddingTop: '5rem' }}>
          <Title style={{ marginTop: '4rem' }}>News & Trending Articles</Title>
        </Wrapper>
        <div className="ph4-s ph5-m ph6-l mb3"> 
          <Listing posts={posts.edges} />
        </div> 
        <div className="w100 flex justify-center mb6">
        <div className="button -dark"><a style={{ fontWeight: "600", lineHeight: "1.3em" }} href="/blog" target="_blank">NEWS</a></div>
        </div>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(limit: 4, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            coverimage {
              url
              alt
              localFile {
                id
              	childImageSharp {
                  fluid(
                    maxWidth: 800
                    traceSVG: { background: "#fff", color: "lightgrey" }
                    )
                  {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    index: file(relativePath: { eq: "images/indexbg.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
  }
  }
`;
