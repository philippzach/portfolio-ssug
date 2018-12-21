import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Wrapper, Title, Navbar } from 'components';
import BlogGrid from '../components/Blog/bloggrid';

class Blog extends Component {
  render() {
    const {
      data: { posts },
    } = this.props;
    return (
      <Layout>
        <Navbar />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>Blog & News</Title>
          <BlogGrid posts={posts.edges} />
        </Wrapper>
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
