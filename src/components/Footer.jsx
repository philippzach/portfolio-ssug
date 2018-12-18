import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Logo from '../../static/ssug_grey.svg';
import '../styles/footer.css';
import Twitter from './twitter.svg';
import Facebook from './facebook.svg';

const StyledFooter = styled.footer`
  max-width: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(127,127,127,1) 90%);
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
          <div className="w-50 flex items-center justify-center mobilebutton2">Contact us</div>
        </div>
        <div>
          <ul
            className="footernav"
            style={{ listStyle: 'none', textAlign: 'center', margin: '0', paddingBottom: '2.45em' }}
          >
              <li className="listitem">
              <Link to="/factory"><span className="topmenu">Factory</span></Link>
                <ul className="list pl0 ma0 pt3">
                  <li className="sublistitem">Startup</li>
                  <li className="sublistitem">Corporate Acceleration</li>
                  <li className="sublistitem">Company Building</li>
                  <li className="sublistitem">Corporate Venturing</li>
                  <li className="sublistitem">Intra Inovation</li>
                </ul>
              </li>
            
              <li className="listitem">
              <Link to="/investmentportfolio"><span className="topmenu">Investment Portfolio</span></Link>
              </li>
            
              <li className="listitem">
              <Link to="/growthservices"><span className="topmenu">Growth Services</span> </Link>
              </li>
            
              <li className="listitem">
              <Link to="/investorclub"> <span className="topmenu">Investor Club</span></Link>
              </li>
            
            
              <li className="listitem">
              <Link to="/aboutus"><span className="topmenu">About Us</span></Link>
                  <ul className="list pl0 ma0 pt3">
                    <li className="sublistitem">Values</li>
                    <li className="sublistitem">Jobs</li>
                    <li className="sublistitem">Partners</li>
                    <li className="sublistitem">News</li>
                  </ul>
              </li>
            
          </ul>
        </div>
        <div className="socialcontainer pa1">
          <address className="adress" itemscope itemtype="http://schema.org/LocalBusiness">
            <span className="adresshover">Swiss Startup Group<br/>Hardturmstrasse 161<br/>8005 Zürich<br/>Switzerland<br /></span>
            <span className="adresshover" itemprop="telephone"><a href="tel:+411111111">+41 1111111111</a></span><br />
            <span className="adresshover"><a href="emailto:office@swissstartupfactory.com">office@swissstartupfactory.com</a></span>
          </address>
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
