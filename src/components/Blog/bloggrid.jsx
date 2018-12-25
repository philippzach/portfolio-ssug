import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { ListItem } from 'components/Listing';
import '../../styles/pages/blog.css';

const List = styled.ul`
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
  @media only screen and (max-width: 650px) {
    columns: 1;
  }
  @media only screen and (min-width: 650px) {
    columns: 2;
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
