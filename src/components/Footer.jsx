import React, { Component } from 'react';
import styled from 'react-emotion';
import Logo from '../../static/ss_group_white.svg';
import { Link } from 'gatsby';
import '../styles/footer.css';

const StyledFooter = styled.footer`
  max-width: 100%;
  background-color: grey;
`;

class Footer extends Component {
  render() {
    return <StyledFooter>
    <div className="footerlogo">
      <Link to="/">
        <img className="logofoot" src={Logo} alt="" title="" description=""/>
      </Link>
      </div>
      <div>
        <ul className="footernav" style={{ listStyle: "none", textAlign: 'center'}}>
            <Link to="/">
              <li>Factory</li>
            </Link>
            <Link to="/">
              <li>Investment</li>
            </Link>
            <Link to="/">
              <li>Portfolio</li>
            </Link>
            <Link to="/">
              <li>Growth Services</li>
            </Link>
            <Link to="/">
              <li>Investor Club</li>
            </Link>
            <Link to="/">
              <li>Contact</li>
            </Link>
        </ul>
      </div>
      <div className="container">
      <p className="copyright"><span>2018 Swiss Startup Group</span></p>
      </div>
    </StyledFooter>;
  }
}

export default Footer;

