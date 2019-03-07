import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Categories } from 'components/Listing';
import '../../styles/blogpost.css';
import Img from 'gatsby-image';

const Item = styled.div`
@media (min-width: 1500px) {
  max-width: 75%;
  margin: 0 auto;
}
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
  height: 3em;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.3rem;
    height: 4em;
  }
`;


export default class ListItem extends Component {
  render() {
    const { node, categories} = this.props;
    return (
      <Item>
      <Link to={node.uid}>
      <div className="grow blogpost pa3 pa4-m pa5-l">
        <Img className="shadowblog" fluid={node.data.coverimage.localFile.childImageSharp.fluid} alt={node.data.coverimage.alt} />
          <StyledLink className="lh-copy">
          {node.data.title.text}
          </StyledLink>
        <Headline>
          {node.data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        </div>
        </Link>
      </Item>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired
};


