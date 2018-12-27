import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Categories } from 'components/Listing';
import '../../styles/blogpost.css';

const Item = styled.li`
margin-bottom: 1.5em;
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

const StyledLink = styled.p`
  font-size: 1rem;
  margin: 1em 0 .5em;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`;


export default class ListItem extends Component {
  render() {
    const { node, categories} = this.props;
    return (
      <Link to={node.uid}>
      <Item>
      <div className="blogpost pa3 pa4-m pa5-l">
        <img className="shadowblog" src={node.data.coverimage.url} />
          <StyledLink className="lh-copy">
          {node.data.title.text}
          </StyledLink>
        <Headline>
          {node.data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        </div>
      </Item>
      </Link>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired
};


