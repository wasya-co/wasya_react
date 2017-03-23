
// import styles from './_Footer.scss';
import React from 'react';

import { AppBar, Tabs, Tab, IconButton, NavigationClose, FlatButton } from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Nav, NavItem, Navbar } from 'react-bootstrap';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class MainNavigation extends React.Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <AppBar 
                title="Wasya co" 
                onTitleTouchTap={handleTouchTap}
                iconElementRight={<FlatButton label="About" />}
            >
              <div>
                Wasya co [About] [Knowledge Base] [Services] [Our Process] [Our Technology] [Clients] [Contact]
        </div>
        
      </AppBar>
    );
  }
}

MainNavigation.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

// can I have completely custom nav, no mui, no material-ui?
class Nav2 extends React.Component {
  render () {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Wasya co</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="pills" pullRight>
          <NavItem eventKey={0} href="#" >About</NavItem>
          <NavItem eventKey={1} href="#" >Services</NavItem>
          { /* <NavItem eventKey={2} href="#" >People</NavItem> */ }
          <NavItem eventKey={3} href="#" >Process</NavItem>
          <NavItem eventKey={4} href="#" >Blog</NavItem>
          <NavItem eventKey={5} href="#" >Wiki</NavItem>
          <NavItem eventKey={6} href="#" >Contact</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Nav2
