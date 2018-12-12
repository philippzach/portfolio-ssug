import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'components/Listing';

export default class BlogGrid extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="o-grid">
        {posts.map(post => {
          let categories = false;
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name);
          }
          return <ListItem key={post.node.uid} node={post.node} categories={categories} />;
        })}
      </div>
    );
  }
}

BlogGrid.propTypes = {
  posts: PropTypes.array.isRequired,
};
