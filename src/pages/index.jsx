import React, { Component } from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import { Layout, Listing, Wrapper, Title, Navbar } from 'components';
//import MediaQuery from 'react-responsive';
import PageTransition from '../components/pagetransition';
import Background from '../../static/indexbg.jpg';
import BackgroundMobile from '../../static/indexbgmobile.jpg';
import '../styles/pages/index.css';
import Logo from '../group.svg';
//import Fade from 'react-reveal/Fade';
import Carousel from '../components/carousel';
import Founders from '../../static/founders.png';
import Acceleration from '../../static/indexacceleration.svg';
import Portfolio from '../../static/indexportfolio.svg';
import Growth from '../../static/indexgrowth.svg';
import Investors from '../../static/indexinvestors.svg';
import LogoSlider from '../components/logoslider';
import FounderSlider from '../components/pictureslider/indexfounders';

const Hero = styled.header`
 background-image: url("${Background}");
 background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
`;

const HeroMobile = styled.header`
background-image: url("${BackgroundMobile}");
 background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
`;

const HeroInner = styled.div`
  padding-top: 4rem;
  padding-bottom: 23rem;
  margin: 0 2em;
  h1 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 3.45em;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 4rem;
    padding-bottom: 23rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 4rem;
    padding-bottom: 23rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 0rem;
    padding-bottom: 27rem;
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
`;

class Index extends Component {
  render() {
    const {
      data: { posts },
    } = this.props;
    return (
      <Layout>
        <Hero>
          <Navbar />
          <HeroInner>
            <h1>
              Switzerland's #1
              <br />
              Venture Builder
            </h1>
            <HeroText>
              A purely privately financed Swiss venture platform to scout, analyze, accelerate and invest in the most
              promising early stage startup projects in Switzerland.
            </HeroText>
          </HeroInner>
        </Hero>
        <div className="line" />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="logocontainer">
            <img src={Logo} alt="" title="" description="" className="logoheight logoanimation"/>
          </div>
          <div className="measure center">
            <h3 className="lh-title">
            <span className="b">The SWISS STARTUP GROUP provides you the exclusive possibility to get everything from one source thanks to our venture platform.</span>
            </h3>
            <p className="lh-copy">
             With our Swiss venture platform you can scout, accelerate and invest in the most promising early stage startup projects and become a part of the Swiss Startup Ecosystem.
            </p>
            <p className="lh-copy">With our proven track record as independent venture platform, we have built an exclusive skill set and know how in Switzerland. We know the Swiss Startup market in-depth and scout actively for the best cases in all regions, building a strong bridge between the Swiss and the international markets.</p>
            <p className="lh-copy">Our venture platform combines all different skills of accelerators, angel networks, VC’s, venture builders and innovation consulting. It makes the Swiss Startup Group a unique piece in Switzerland’s fast growing ecosystem.</p>
            <b className="lh-copy">We are dedicated, passionate and driven by success.</b>
            <br />
            <b className="lh-copy">We have skin in the game.</b>
          </div>
          <Title style={{ marginTop: '4rem', marginBottom: '4em' }}>Our DNA</Title>
        </Wrapper>
        <Carousel />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>What we do</Title>
        </Wrapper>
        <>
          <div className="cardwrapper">
          <Link to="/factory">
            <div className="card black">
              <img className="svgicons" src={Acceleration} alt="" description="" title="" />
              {/*}<h4>Acceleration</h4>{*/}
              <p className="iconsdescription lh-copy">
                  Our accelerator provides a professional execution platform to corporates and startups through a
                  process that brings their innovation to market fast and lean.
              </p>
              <p className="ttu b">Our Accelerator ></p>
            </div>
            </Link>
            <Link to="/investorclub">
            <div className="card black">
              <img className="svgicons" src={Investors} alt="" description="" title="" />
              {/*}<h4>Investors</h4>{*/}
              <p className="iconsdescription lh-copy">
                Become part of our investors club and invest in startups to extend your portfolio.
              </p>
              <p className="ttu b">Learn More ></p>
            </div>
            </Link>
            <Link to="/investmentportfolio">
            <div className="card black">
              <img className="svgicons" src={Portfolio} alt="" description="" title="" />
              {/*}<h4>Portfolio</h4>{*/}
              <p className="iconsdescription lh-copy">
                We invest in a portfolio of well diversified startups in different stages, industries and countries
              </p>
              <p className="ttu b">Our Portfolio ></p>
            </div>
            </Link>
            <Link to="/growthservices">
            <div className="card black">
              <img className="svgicons" src={Growth} alt="" description="" title="" />
              {/*}<h4>Growth</h4>{*/}
              <p className="iconsdescription lh-copy">
                We offer dedicated and specialized growth service platform for corporate clients, startups and
                investors.
              </p>
              <p className="ttu b">Our Growth Services></p>
            </div>
            </Link>
          </div>
        </>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title className="mb6">Founders</Title>
          <FounderSlider />
        </Wrapper>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>Partners</Title>
          <h3 className="tc pt4">Strategic Partners</h3>
          <p className="lh-copy tc pb4">
            We develop strategic partnerships with companies and organizations that share important core and strategic
            startup goals and values. These partnerships comprise several areas of execution aiming – ultimately –
            sharing value to our partners, the Swiss Startup ecosystem, as well as the Swiss Startup Group at once.
          </p>
          <LogoSlider />
        </Wrapper>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>News & Trending Articles</Title>
          <Listing posts={posts.edges} />
        </Wrapper>
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
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
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
  }
`;

/*
<div className="cf">
            <div className="fl w-100 w-50-ns">
              <img src={Founders} alt="" />
            </div>
            <div className="fl w-100 w-50-ns tc">
              <div>
                <h3>Max Meister, COO</h3>
                <p className="lh-copy">
                  “The last two years are a great proof of concept for us and we are amazed by the market response.
                  Together with our strategic partners we will now focus on internationalization, while corporate
                  acceleration and company building will play an even more important role in our future business model.”
                </p>
              </div>
            </div>
          </div>




{social.edges.map(s => (
                <li key={s.node.primary.label.text}>
                  <a href={s.node.primary.link.url}>{s.node.primary.label.text}</a>
                </li>
              ))}
<Title style={{ marginTop: '8rem' }}>Recent projects</Title>
          <ProjectListing>
            {projects.edges.map(project => (
              <li key={project.node.primary.label.text}>
                <a href={project.node.primary.link.url}>{project.node.primary.label.text}</a>
              </li>
            ))}
          </ProjectListing>
          */

/*
projects: allPrismicProjectsBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }

homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }


              */
