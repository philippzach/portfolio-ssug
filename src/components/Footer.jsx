import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Logo from '../../static/ss_group_white.svg';
import '../styles/footer.css';
import Twitter from './twitter.svg';
import Facebook from './facebook.svg';

const StyledFooter = styled.footer`
  max-width: 100%;
  background-color: #939393;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="footerlogo">
          <Link to="/">
            <img className="logofoot" src={Logo} alt="" title="" description="" />
          </Link>
        </div>
        <div>
          <ul
            className="footernav"
            style={{ listStyle: 'none', textAlign: 'center', margin: '0', paddingBottom: '2.45em' }}
          >
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
        <div className="socialcontainer">
          <p className="socialfollow">Follow us</p>
          <a href="https://twitter.com">
            <img className="socialicon" src={Twitter} alt="" />
          </a>
          <a href="https://twitter.com">
            <img className="socialicon" src={Facebook} alt="" />
          </a>
        </div>
        <div className="container">
          <p className="copyright">
            <span>©2018 Swiss Startup Group</span>
          </p>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
