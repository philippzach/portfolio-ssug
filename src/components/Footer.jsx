import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Logo from '../../static/ssug_grey.svg';
import '../styles/footer.css';
import Twitter from './twitter.svg';
import Facebook from './facebook.svg';

const StyledFooter = styled.footer`
  max-width: 100%;
  background: linear-gradient(180deg, #949494 0%, #565656 90%);
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
            style={{ listStyle: 'none', textAlign: 'center', margin: '0' }}
          >
              <li className="listitem">
              <Link to="/factory"><span className="topmenu">Factory</span></Link>
                <ul className="mobileonly list pl0 ma0 pt3 light-gray">
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
              <Link to="/blog"> <span className="topmenu">News</span></Link>
              </li>
              <li className="listitem">
              <Link to="/aboutus"><span className="topmenu">About Us</span></Link>
                  <ul className="mobileonly list pl0 ma0 pt3 light-gray">
                    <li className="sublistitem">Values</li>
                    <li className="sublistitem">Jobs</li>
                    <li className="sublistitem">Partners</li>
                    <li className="sublistitem">News</li>
                  </ul>
              </li>
            
          </ul>
        </div>
        <div className="socialcontainer pa1">
          {/*}<address className="adress" itemscope itemtype="http://schema.org/LocalBusiness">
            <span className="adresshover">Swiss Startup Group<br/>Hardturmstrasse 161<br/>8005 Zürich<br/>Switzerland<br /></span>
            <span className="adresshover" itemprop="telephone"><a href="tel:+411111111">+41 1111111111</a></span><br />
            <span className="adresshover"><a href="emailto:office@swissstartupfactory.com">office@swissstartupfactory.com</a></span>
          </address>{*/}
          <div className="pv3">
          <a href="https://twitter.com/S_S_UF?lang=de">
          <svg className="socialicon" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg" height="20px"><path fill="lightgrey" d="m29.55 2.85c-.841 1.224-1.848 2.26-3.004 3.106l-.036.025q.018.262.018.787c-.004 1.736-.264 3.41-.745 4.987l.032-.122c-.534 1.773-1.272 3.32-2.206 4.724l.04-.065c-.989 1.509-2.132 2.808-3.435 3.927l-.024.02c-1.372 1.153-2.978 2.083-4.73 2.704l-.108.033c-1.765.648-3.803 1.022-5.928 1.022-.045 0-.09 0-.134 0h.007c-.038 0-.082 0-.127 0-3.41 0-6.584-1.015-9.234-2.76l.063.039c.419.048.904.075 1.396.075h.07-.004c.037 0 .082.001.126.001 2.807 0 5.386-.975 7.417-2.606l-.023.018c-2.639-.05-4.861-1.777-5.65-4.157l-.012-.043c.342.057.738.091 1.141.094h.003c.567 0 1.116-.075 1.637-.216l-.044.01c-1.412-.284-2.615-1.034-3.47-2.08l-.008-.011c-.858-1.011-1.379-2.331-1.379-3.773 0-.028 0-.056.001-.084v.004-.075c.788.452 1.726.732 2.727.768h.011c-.822-.553-1.487-1.279-1.953-2.129l-.016-.031c-.46-.835-.731-1.83-.731-2.889 0-1.126.306-2.18.84-3.084l-.015.028c1.5 1.839 3.337 3.341 5.425 4.427l.095.045c2.022 1.067 4.402 1.743 6.927 1.864l.038.001c-.093-.415-.147-.892-.149-1.382v-.001c.004-3.345 2.717-6.055 6.062-6.055 1.74 0 3.309.733 4.415 1.908l.003.003c1.448-.284 2.735-.792 3.893-1.492l-.053.03c-.455 1.431-1.4 2.596-2.635 3.323l-.028.015c1.294-.148 2.475-.479 3.569-.967l-.077.031z"/></svg>
          </a>
          <a href="https://www.facebook.com/SwissStartUpFactory/">
          <svg className="socialicon" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg" height="20px"><path fill="lightgrey" d="m12.462.173v3.808h-2.265c-.079-.011-.171-.017-.264-.017-.542 0-1.036.203-1.411.538l.002-.002c-.275.384-.439.863-.439 1.381 0 .062.002.124.007.185v-.008 2.726h4.229l-.56 4.27h-3.663v10.946h-4.417v-10.947h-3.68v-4.269h3.68v-3.145c-.007-.102-.011-.222-.011-.342 0-1.478.575-2.822 1.513-3.82l-.003.003c.972-.92 2.288-1.485 3.735-1.485.09 0 .18.002.27.007h-.013c.118-.002.256-.003.395-.003 1.02 0 2.025.064 3.011.188l-.117-.012z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/swiss-startup-group/about/">
          <svg className="socialicon" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24"><path fill="lightgrey" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </a>
          </div>
        </div>
        <div className="container">
          <p className="copyright">
            <span className="impressum">©2018 Swiss Startup Group</span>
          </p>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
