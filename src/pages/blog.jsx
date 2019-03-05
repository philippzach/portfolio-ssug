import React, { Component } from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Wrapper, Title, Navbar } from 'components';
import BlogGrid from '../components/Blog/bloggrid';
//import Background from '../../static/blog.jpg';
import '../styles/pages/blog.css';
import Seo from '../components/SEO/index';
import Img from 'gatsby-image';
import Form from '../components/formblog';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`

class Blog extends Component {
  render() {
    const {
      data: { posts },
      data: { factory }
    } = this.props;
    return (
      <Layout>
      <Seo title="SWISS STARTUP GROUP – News" desc="What's going on at the Swiss Startup Group and ecosystem?  News and background information on investments, startups and VC" />
        <Navbar />
          <Test> 
              <Img fluid={factory.childImageSharp.fluid} className="w-100" />
          </Test>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Form />
        {/* <div className="subscribe">
        <h1>Subscribe to get the latest <span>news &amp; updates</span>.</h1>
      
        <form className="ph6-l">
          <input type="email" placeholder="Your email address" />
          <input className="button -dark" style={{margin: "0"}} type="submit" value="Subscribe" />
        </form>
      </div> */}
      <Title style={{ marginTop: '4rem' }}>Blog & News</Title>
      </Wrapper>
          <div className="ph3-s ph4-m ph5-l mb5"> 
          <BlogGrid posts={posts.edges} />
          </div>
      </Layout>
    );
  }
}

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogQuery {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            coverimage {
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
    factory: file(relativePath: { eq: "images/blog.jpg" }) {
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
