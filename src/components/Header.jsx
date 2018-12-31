import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Arrow from '../../static/double-left.svg';

const StyledHeader = styled.header`
  padding-bottom: 2rem;
  a {
    color: ${props => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-weight: 300;
    font-style: normal;
    font-size: 1em;
    :hover {
      text-decoration: underline;
    }
  }
`;

const BackArrow = styled.img`
 height: 15px;
 padding-right: 0.5em;
`

class Header extends Component {
  render() {
    const { invert } = this.props;
    return (
      <StyledHeader invert={invert}>
        <BackArrow src={Arrow} />
        <Link to="/blog">See All Posts</Link>
      </StyledHeader>
    );
  }
}

export default Header;

Header.propTypes = {
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};
