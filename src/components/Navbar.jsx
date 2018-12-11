import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../../static/ss_group_white.svg';
import '../styles/navbar.css';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 4em;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 3em 4em 4em 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 3em 4em 4em 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 3em 4em 4em 1em;
  }
`;
const Navigation = styled.nav`
  margin: auto 0;
`;

const Navbar = () => (
  <Header>
    <Link to="/">
    <img src={Logo} alt="Swiss Startup Group Logo" title="Swiss Startup Group Logo" height="55px" />
    </Link>
    <Navigation>
      <ul className="nav__menu">
        <li className="nav__menu-item"><a className="factory_after blue">Factory</a>
          <ul className="nav__submenu factory">
            <li className="nav__submenu-item"><div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>🚀</span></div>
            
              <a className="nav_submenu_linkleft">Startups</a>
            
            </li>
            <li className="nav__submenu-item"><div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>🧭</span></div>
            
            <a className="nav_submenu_linkleft">Corporate Acceleration</a>
            
            </li>
            <li className="nav__submenu-item"><div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>🏗</span></div>
            
            <a className="nav_submenu_linkleft">Company Building</a>
            
            </li>
            <li className="nav__submenu-item"><div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>📈</span></div>
            
            <a className="nav_submenu_linkleft">Corporate Venture Capital</a>
            
            </li>
            <li className="nav__submenu-item"><div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>💡</span></div>
            
            <a className="nav_submenu_linkleft">Intra Innovation</a>
            
            </li>
          </ul>
        </li>
        <li className="nav__menu-item"><a className="purple">Investment Portfolio</a></li>
        <li className="nav__menu-item"><a className="orange">Growth Services</a></li>
        <li className="nav__menu-item"><a className="green">Investor Club</a></li>
        <li className="nav__menu-item"><a className="about_after grey">About</a>
          <ul className="nav__submenu about">
            <li className="nav__submenu-item"><a className="nav_submenu_linkright">Values</a>
            <div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>💯</span></div></li>
            <li className="nav__submenu-item"><a className="nav_submenu_linkright">Jobs</a>
            <div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>👩‍💻</span></div></li>
            <li className="nav__submenu-item"><a className="nav_submenu_linkright">Partner</a>
            <div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>🌐</span></div></li>
            <li className="nav__submenu-item"><a className="nav_submenu_linkright">News</a>
            <div className="containeremoji"><span style={{ paddingLeft: ".5em", paddingRight: ".25em" }}>🗞</span></div></li>
          </ul>
        </li>
      </ul>
      <div>
      <label className="mobilemenu">
        <input type='checkbox'/>
        <span className='menu'>
            <span className='hamburger'></span>
        </span>
        <ul>
            <li><a href='/'>Factory</a></li>
            <li><a href='/'>Investment Portfolio</a></li>
            <li><a href='/'>Growth Services</a></li>
            <li><a href='/'>Investor Club</a></li>
            <li><a href='/'>About us</a></li>
        </ul>
        </label>
        </div>
    </Navigation>
  </Header>
);

export default Navbar;
/*

*/