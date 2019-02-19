import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../../static/ssug_grey.svg';
import '../styles/navbarinverted.css';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 2em;
  width: 100%;
  z-index: 10;
  position: absolute;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 3em 1em 4em 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 3em 1em 2em 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 3em 1em 2em 1em;
  }
  @media (max-width: 600px) {
    background-image: linear-gradient(rgba(255,255,255,.8),rgba(255,255,255,0.2) 58%, transparent);
  }
`;
const Navigation = styled.nav`
  margin: auto 0;
`;

const Navbar = () => (
  <Header className="invertedBar">
    <Link to="/">
      <img src={Logo} alt="Swiss Startup Group Logo" title="Swiss Startup Group Logo" height="55px" />
    </Link>
    <Navigation>
      <ul className="nav__menu">
        <li className="nav__menu-item"><Link to="/factory" className="factory_after inverted">Factory</Link>
          <ul className="nav__submenu factory">

            <li className="nav__submenu-item">
              <a href="https://www.swissstartupfactory.com/startups/accelerator" target="_blank" className="nav_submenu_linkleft">Startups</a>
            </li>
            <li className="nav__submenu-item">
            
            <a href="https://www.swissstartupfactory.com/corporates/corporate-acceleration" target="_blank" className="nav_submenu_linkleft">Corporate Acceleration</a>
            
            </li>
            <li className="nav__submenu-item">
            
            <a href="https://www.swissstartupfactory.com/corporates/company-building" target="_blank" className="nav_submenu_linkleft">Company Building</a>
            
            </li>
            <li className="nav__submenu-item">
            
            <a href="https://ccvs.ch/" target="_blank" className="nav_submenu_linkleft">Corporate Venture Capital</a>
            
            </li>
            <li className="nav__submenu-item">
            
            <a href="https://www.swissstartupfactory.com/corporates/innovation-consulting" target="_blank" className="nav_submenu_linkleft">Intra Innovation</a>
            
            </li>
          </ul>
        </li>
        <li className="nav__menu-item"><Link to="/investmentportfolio"  className="inverted">Investment Portfolio</Link></li>
        <li className="nav__menu-item"><Link to="/growthservices" className="inverted">Growth Services</Link></li>
        <li className="nav__menu-item"><Link to="/investorclub"  className="inverted">Investor Club</Link></li>
        <li className="nav__menu-item"><Link to="/aboutus" className="about_after grey inverted">About</Link>
          <ul className="nav__submenu about">
            <li className="nav__submenu-item"><a href="https://www.swissstartupjobs.com" target="_blank" className="nav_submenu_linkright">Jobs</a>
            </li>
            <li className="nav__submenu-item"><Link to="/blog" className="nav_submenu_linkright">News</Link>
            </li>
          </ul>
        </li>
        <li className="nav__menu-item" style={{paddingBottom: 0,}}><div className="button -dark" style={{boxShadow: "none", backgroundColor: "#e6e6ea", margin: "0"}}><Link to="/join-the-platform" style={{color: "black"}}>Join the Platform</Link></div></li>
      </ul>
      <div>
      <label className="mobilemenu">
        <input type='checkbox'/>
        <span className='menu'>
            <span className='hamburger'></span>
        </span>
        <ul className="list pl0 ma0" style={{paddingTop: "22em"}}>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/factory'>Factory</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/investmentportfolio'>Investment Portfolio</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/growthservices'>Growth Services</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/investorclub'>Investor Club</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/aboutus'>About us</Link></li>
            <li className="mv4"><div className="button -dark" style={{boxShadow: "none", backgroundColor: "#e6e6ea", margin: "0"}}><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/aboutus'>Join the Platform</Link></div></li>
        </ul>
        </label>
        </div>
    </Navigation>
  </Header>
);

export default Navbar;
