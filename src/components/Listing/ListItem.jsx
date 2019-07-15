import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Categories } from 'components/Listing';
import '../Blog/blog.css';
import Img from 'gatsby-image';

const List = styled.article`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    background: #fff;
    position: relative;
    margin-bottom: 4rem;
    box-shadow: 2px 2px 30px #949e9b35;   
:hover {
    box-shadow: 2px 2px 30px #949e9b;
    transform: translateY(-1px);
    transition: all .2s ease;
}
`

const Footer = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: rgb(55, 55, 54);
  margin-bottom: 0;
  font-size: .75em;
  padding: 1.5rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`;

const StyledLink = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0;
  color: rgb(55, 55, 54);
  font-style: normal;
  margin-bottom: 1.3rem;
  line-height: 1.35em;
  font-weight: 600;
`;
const Description = styled.p`
color: rgb(55, 55, 54);
line-height: 25px;
font-size: 1rem;
margin-bottom: 0;
`
const Text = styled.div`
padding: 1.5em;
`


export default class ListItem extends Component {
  render() {
    const { node, categories} = this.props;
    return (
      <List className="blogpost">
            <Link className="blogitemlink" to={node.uid}>
            <Img className="shadowblog" fluid={node.data.coverimage.localFile.childImageSharp.fluid} alt={node.data.coverimage.alt} />
              </Link>
              <Text>      
              <Link className="blogitemlink" to={node.uid}>
                <StyledLink>
                {node.data.title.text}
                </StyledLink>
                </Link>
                <Link className="blogitemlink" to={node.uid}>
                <Description>
                  {node.data.description}
                </Description>
                </Link>
        </Text>        
        <Footer>
        {node.data.date} · by <b>{categories && <Categories categories={categories} />}</b>
        </Footer>
        </List>

      
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired
};


{/* <Item>
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
      </Item> */}