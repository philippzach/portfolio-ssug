import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import { Layout, Listing, Wrapper, Title, Navbar } from 'components';
import Background from '../swiss-startup-group-peak-background.jpg';

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

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    &:not(:first-child) {
      margin-left: 2.5rem;
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${props => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`;

const ProjectListing = styled.ul`
  list-style-type: none;
  margin-left: 0;
  margin-top: 4rem;
  li {
    margin-bottom: 1.45rem;
    a {
      font-size: 2.369rem;
      font-style: normal;
      color: ${props => props.theme.colors.black};
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.777rem;
      }
    }
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
            <h1>Switzerland's #1 <br></br> Venture Builder </h1>
            <HeroText>A purely privately financed Swiss startup platform to scout, analyze, accelerate and invest in the most promising early stage startup projects in Switzerland. </HeroText>
          </HeroInner>
        </Hero>
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