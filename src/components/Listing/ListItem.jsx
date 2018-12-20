import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Categories, CoverImage } from 'components/Listing';

const Item = styled.li`
  margin-bottom: 1.45rem;
`;

const Headline = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${props => props.theme.colors.grey};
  margin-bottom: .5em;
  font-size: .8em;
  a {
    color: ${props => props.theme.colors.grey};
    font-style: normal;
    font-weight: normal;
  }
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  margin-top: 1em;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`;


export default class ListItem extends Component {
  render() {
    const { node, categories, cover } = this.props;
    return (
      <Item>
        <Headline>
          {node.data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        { console.log(node.data.coverimage) }
        {/*}<CoverImage cover={cover} />{*/}
        <StyledLink to={node.uid}>
          {node.data.title.text}
        </StyledLink>
      </Item>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired
};


