import React, {Component} from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../../static/ssug_grey.svg';
import '../styles/navbarinverted.css';
import '../styles/hovermenu.css';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 1.5em;
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
const NavItem = {
  fontFamily: "roboto",
  fontSize: "1em",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#555",
  }


  class NavbarInverted extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        sidebarOpen: false
      };
      this.handleMouseDown =this.handleMouseDown.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      
    }
    handleMouseDown(e) {
      this.toggleMenu();
      console.log("clicked");
    }
    toggleMenu() {
      this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }
    
    
  render() {
    return(
  <Header className="invertedBar">
    <Link to="/">
      <img src={Logo} alt="Swiss Startup Group Logo" title="Swiss Startup Group Logo" height="55px" />
    </Link>
    <Navigation>
      <ul className="nav__menu">
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/factory" className="hovereffect" style={NavItem}>Factory</Link>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="triangle" style={{right: "5%"}}/>
                        <ul style={{right: "-119px"}}>
                        <a className="hoversubmenu" href="https://www.swissstartupfactory.com/startups/accelerator"><li>Accelerator</li></a>
                        <a className="hoversubmenu" href="https://www.swissstartupfactory.com/corporates/corporate-acceleration"><li>Corporate Acceleration</li></a>
                        <a className="hoversubmenu" href="https://www.swissstartupfactory.com/corporates/company-building"><li>Company Building</li></a>
                        <a className="hoversubmenu" href="https://ccvs.ch/"><li>Corporate Venture Capital</li></a>
                        <a className="hoversubmenu" href="https://www.swissstartupfactory.com/corporates/innovation-consulting"><li style={{ paddingBottom: "5px"}}>Innovation Consulting</li></a>
                        </ul>
                </li>
              </ul>
          </div>
        </li>
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/investmentportfolio" className="hovereffect" style={NavItem}>Investment Portfolio</Link>
                </li>
              </ul>
          </div>
        </li>
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/growthservices" className="hovereffect" style={NavItem}>Growth Services</Link>
                </li>
              </ul>
          </div>
        </li>
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/ventureassetmanagement" className="hovereffect" style={NavItem}>Venture Asset Management</Link>
                </li>
              </ul>
          </div> 
        </li>
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/aboutus" className="hovereffect" style={NavItem}>About Us</Link>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="triangle" style={{right: "5%"}}/>
                        <ul style={{right: "-41px"}}>
                        <a className="hoversubmenu" href="https://www.swissstartupjobs.com/"><li>Jobs</li></a>
                        <Link className="hoversubmenu" to="/blog"><li style={{ paddingBottom: "5px"}}>News</li></Link>
                        </ul>
                </li>
              </ul>
          </div>
        </li>
      </ul>
      <div>
      <div className={"mobilemenu" + this.state.sidebarOpen} >
        <span className='menu' onClick={() => this.handleMouseDown()}>
            <span className='hamburger'></span>
        </span>
        <ul className="list pl0 ma0" style={{paddingTop: "22em"}}>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/factory'>Factory</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/investmentportfolio'>Investment Portfolio</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/growthservices'>Growth Services</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/ventureassetmanagement'>Venture Asset Management</Link></li>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/aboutus'>About us</Link></li>
            <li className="mv4"><div className="button -dark" style={{boxShadow: "none", backgroundColor: "#e6e6ea", margin: "0"}}><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/join-the-platform'>Join the Platform</Link></div></li>
        </ul>
        </div>
        </div>
    </Navigation>
    <div id="cta-menu" className="button-white" style={{boxShadow: "none", margin: "0"}}><Link to="/join-the-platform">Join the Platform</Link></div>
  </Header>
);
}
}

export default NavbarInverted;


