import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { ListItem } from 'components/Listing';
import '../../styles/pages/blog.css';

const List = styled.div`
  margin-bottom: 4rem;
  margin-left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default class BlogGrid extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List >
        {posts.map(post => {
          let categories = false;
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name);
          }
          return <ListItem key={post.node.uid} node={post.node} categories={categories} />;
        })}
      </List>
    );
  }
}

BlogGrid.propTypes = {
  posts: PropTypes.array.isRequired,
};
