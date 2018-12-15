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
        <div className="flex mobilecta">
          <div className="w-50 mobilebutton1 pa3">
            Switzerlands #1 <br /> Venture Builder
          </div>
          <div className="w-50 flex items-center justify-center mobilebutton2">Learn more</div>
        </div>
        <div>
          <ul
            className="footernav"
            style={{ listStyle: 'none', textAlign: 'center', margin: '0', paddingBottom: '2.45em' }}
          >
            <Link to="/">
              <li className="listitem">
                <span className="topmenu">Factory</span>
                <ul className="list pl0 ma0 pt3">
                  <li className="sublistitem">Startup</li>
                  <li className="sublistitem">Corporate Acceleration</li>
                  <li className="sublistitem">Company Building</li>
                  <li className="sublistitem">Corporate Venturing</li>
                  <li className="sublistitem">Intra Inovation</li>
                </ul>
              </li>
            </Link>
            <Link to="/">
              <li className="listitem">
                <span className="topmenu">Investment</span>
              </li>
            </Link>
            <Link to="/">
              <li className="listitem">
                <span className="topmenu">Portfolio</span>
              </li>
            </Link>
            <Link to="/">
              <li className="listitem">
                <span className="topmenu">Growth Services</span>
              </li>
            </Link>
            <Link to="/">
              <li className="listitem">
                <span className="topmenu">Investor Club</span>
              </li>
            </Link>
            <Link to="/">
              <li className="listitem">
                <span className="topmenu">About Us</span>
                  <ul className="list pl0 ma0 pt3">
                    <li className="sublistitem">Values</li>
                    <li className="sublistitem">Jobs</li>
                    <li className="sublistitem">Partners</li>
                    <li className="sublistitem">News</li>
                  </ul>
              </li>
            </Link>
          </ul>
        </div>
        <div className="socialcontainer pa1">
          <div className="adress">
            Swiss Startup Group<br/>Hardturmstrasse 161<br/>8005 Zürich<br/>Switzerland<br /><a href="tel:00411111111">+41 1111111111</a><br /><a href="emailto:office@swissstartupfactory.com">office@swissstartupfactory.com</a>
          </div>
          <div className="pv3">
          <a href="https://twitter.com">
            <img className="socialicon" src={Twitter} alt="" />
          </a>
          <a href="https://twitter.com">
            <img className="socialicon" src={Facebook} alt="" />
          </a>
          </div>
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
