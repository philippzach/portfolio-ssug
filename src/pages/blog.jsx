import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Wrapper, Title, Navbar } from 'components';
import BlogGrid from '../components/Blog/bloggrid';
import Background from '../../static/imprint.jpg';
import '../styles/pages/blog.css';

const Hero = styled.header`
 background-image: url("${Background}");
 background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:top;
height: 400px;
`;

class Blog extends Component {
  render() {
    const {
      data: { posts },
    } = this.props;
    return (
      <Layout>
      <Hero>
        <Navbar />
        </Hero>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="subscribe">
        <h1>Subscribe to get the latest <span>news &amp; updates</span>.</h1>
      
        <form className="ph6-l">
          <input type="email" placeholder="Your email address" />
          <input className="button -dark" style={{margin: "0"}} type="submit" value="Subscribe" />
        </form>
      </div>
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
  }
`;
