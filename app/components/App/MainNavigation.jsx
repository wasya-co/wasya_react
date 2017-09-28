/* eslint no-script-url: 0 */

// import styles from './_Footer.scss';
import React from 'react'
import ReactDOM from 'react-dom'

import { AppBar, Tabs, Tab, IconButton, NavigationClose, FlatButton } from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

import Scroll from 'react-scroll'

const styles = {
  title: {
    cursor: 'pointer',
  },
};

import scrollToElement from 'scroll-to-element'

class Nav2 extends React.Component {

  handleSelect (selectedKey) {
    switch (selectedKey) {
      // case 'blog':
      //  window.location = 'http://blog.wasya.co'
      //  break
      case 'wiki':
        window.location = 'http://wiki.wasya.co'
        break
      default:
        scrollToElement('#'+selectedKey)
    }
  }

  /* <header className="site-header header-style-5">
  <div className={`sticky-header main-bar-wraper ${this.state.headerFixed}`} >
  <div className="main-bar clearfix ">
  <div className="container clearfix">
  <div className="logo-header mostion">
  <a href="/">
  <img src={ logo3 } width="193" height="89" alt="" />
  </a>
  </div>
  <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
  <div className="header-nav navbar-collapse collapse">
  <ul className=" nav navbar-nav">
  <li className="active"> <a href="javascript:;" className="scroltop" >Home</a></li>
  <li><a id="aboutLink" href="javascript:;">About<i className="fa fa-chevron-down"></i></a>
  <ul className="sub-menu">
  <li><a href="javascript:;" id="servicesLink" >Services</a></li>
  <li><a href="javascript:;">Process</a></li>
  <li><a href="javascript:;">Stack</a></li>
  <li><a href="javascript:;">Team</a></li>
  </ul>                    
  </li>
  <li><a href="javascript:;">Portfolio<i className="fa fa-chevron-down"></i></a>
  <ul className="sub-menu">
  <li><a href="javascript:;">Case Studies</a></li>
  <li><a href="javascript:;">Clients</a></li>
  <li><a href="javascript:;">Articles</a></li>
  </ul>
  </li>
  <li><a href="#contactUs">Contact</a></li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </header> */

  render () {
    return (
      <Navbar className="ite-header header-style-5" >
        <div className="main-bar clearfix" >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Wasya co</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight onSelect={this.handleSelect}>
              <NavItem eventKey={'about'} href="javascript:void(0);" >About</NavItem>
              <NavItem eventKey={'services'} href="/#/">Services</NavItem>
              { /* this is fine, but I don't have that much space, and the products are ugly from design point of view */ }
              { /* <li role="presentation"><Link to="/products">Products</Link></li> */ }
              <NavItem eventKey={'process'} href="#" >Process</NavItem>
              <li><Link to="/stack">Stack</Link></li>
              <NavItem eventKey={'team'} href="#" >Team</NavItem>
              <NavItem eventKey={'blog'} href="javascript:void(0);" >Blog</NavItem>
              { /* <NavItem eventKey={'wiki'} href="#" >Wiki</NavItem> */ }
              { /* <li><a href="http://wiki.wasya.co/index.php/List_of_Clients">Clients</a></li> */ }
              <li><Link to="/clients">Clients</Link></li>
              <NavItem eventKey={'contact'} href="#" >Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

export default Nav2
