import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import { Layout, Listing, Wrapper, Title, Navbar } from 'components';
import Background from '../swiss-startup-group-peak-background.jpg';
import '../styles/index.css';
import Logo from '../group.svg';
import Dna from '../components/dna';

const Hero = styled.header`
 background-image: url("${Background}");
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
              A purely privately financed Swiss startup platform to scout, analyze, accelerate and invest in the most
              promising early stage startup projects in Switzerland.
            </HeroText>
          </HeroInner>
        </Hero>
        <div className="line" />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="logocontainer">
            <img src={Logo} alt="" title="" description="" />
          </div>
          <div>
            <h2>
              With our proven track record as independent Startup platform, we have built an exclusive skill set and
              know how in Switzerland.
            </h2>
            <p>
              We know the Swiss Startup market in-depth and scout actively for the best cases in all regions, building a
              strong bridge between the Swiss and the international markets. Our integrated service platform combines
              all different skills of accelerators, angel networks, VC’s, venture builders and innovation consulting. It
              makes the Swiss Startup Group a unique piece in Switzerland’s fast growing ecosystem.
            </p>
            <b>We are dedicated, passionate and driven by success.</b>
            <br />
            <b>We have skin in the game.</b>
          </div>
          <Title style={{ marginTop: '4rem' }}>Our DNA</Title>
        </Wrapper>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>Blog & News</Title>
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
            cover {
              alt
              url
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
