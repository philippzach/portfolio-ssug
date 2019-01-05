import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import { Layout, Listing, Wrapper, Title, Navbar } from 'components';
import Background from '../../static/indexbg.jpg';
import BackgroundMobile from '../../static/indexbgmobile.jpg';
import '../styles/pages/index.css';
import Logo from '../group.svg';
import Carousel from '../components/carousel';
import Acceleration from '../../static/indexacceleration.svg';
import Portfolio from '../../static/indexportfolio.svg';
import Growth from '../../static/indexgrowth.svg';
import Investors from '../../static/indexinvestors.svg';
import LogoSlider from '../components/logoslider';
import FounderSlider from '../components/pictureslider/indexfounders';
import Point from '../../static/point.svg';
import Seo from '../components/SEO/index';

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

const BulletPoint = styled.img`
 height: 10px;
 padding-right: 0.3em;
 `

class Index extends Component {
  render() {
    const {
      data: { posts },
    } = this.props;
    return (
      <Layout>
        <Seo title="SWISS STARTUP GROUP - World Class Venture Builder" desc="Swiss Venture Builder for Startup Scouting, Analysis, Acceleration, Company Building, Corporate Venturing, Growth and Investments in one platform."  />
        <Hero>
          <Navbar />
          <HeroInner>
            <h1 className="headingcolorshadow">
              Switzerland's #1
              <br />
              Venture Builder
            </h1>
            <HeroText>
            A privately financed Swiss venture platform to scout, build, accelerate and invest in the most promising startups.
            </HeroText>
          </HeroInner>
        </Hero>
        <div className="line" />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="logocontainer">
            <h3 className="lh-copy headingcolorshadow tc mt4 mb5">The Power of our Platform</h3>
            <div className="fadeintextrighttop"><BulletPoint src={Point} />Know How</div>
            <div className="fadeintextlefttop"><BulletPoint src={Point} />Network</div>
            <img src={Logo} alt="" title="" description="" className="logoheight"/>
            <div  className="fadeintextrightbottom"><BulletPoint src={Point} />Deal Flow</div>
            <div className="fadeintextleftbottom"><BulletPoint src={Point} />Funding</div>
          </div>
          <div className="containertitle">
            <h2 className="lh-copy headingcolorshadow">
            OUR VISION: BECOME ONE OF THE WORLD’S LEADING VENTURE BUILDER
            </h2>
            <p className="lh-copy"><span className="b">The SWISS STARTUP GROUP is the only market player in Switzerland combining all assets of the venture business on one platform.</span></p>
            <p className="lh-copy">
            With our venture platform you can scout, analyse, accelerate, build and invest in the most promising startups and become part of the fast growing Swiss startup ecosystem.
            </p>
            <p className="lh-copy">As a independent venture builder with proven track record we have built an exclusive skill set and know how. We know the Swiss startup market in-depth and scout actively for the best cases, building a strong bridge between the Swiss and the international markets.</p>
            <p className="lh-copy">Our venture platform combines all different skills of accelerators, angel networks, VC’s, venture builders and innovation consulting. It makes the Swiss Startup Group a unique piece in Switzerland’s startup ecosystem.</p>
            <b className="lh-copy">We are dedicated, passionate and driven by success.</b>
            <br />
            <b className="lh-copy">We have skin in the game.</b>
          </div>
          <Title style={{ marginTop: '4rem', marginBottom: '2em' }}>Our DNA</Title>
        </Wrapper>
        <Carousel />
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
              We develop strategic partnerships with companies and organizations that share important core and strategic
              startup goals and values. These partnerships comprise several areas of execution aiming – ultimately –
              creating value to our partners, the Swiss tartup ecosystem, as well as the Swiss Startup Group at once.
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
                  fluid(maxWidth: 700){
                    ...GatsbyImageSharpFluid
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
