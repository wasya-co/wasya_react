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

  render () {
    return (
      <Navbar fixedTop>
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
      </Navbar>
    )
  }
}

export default Nav2
