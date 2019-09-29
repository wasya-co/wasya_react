import React, { Component } from "react"
import styled, { withTheme } from "styled-components"
import { connect } from "react-redux"
import { darken } from "polished"
import { Redirect } from 'react-router-dom' 

import {
  Badge, 
  Container,
  Grid,
  Hidden,
  InputBase,
  Link,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Button as MuiButton,
  IconButton as MuiIconButton,
  Toolbar, Typography
} from "@material-ui/core";

import { Menu as MenuIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system"

import {
  Bell,
  MessageSquare,
  Search as SearchIcon,
  Power
} from "react-feather";

const AppBar = styled(MuiAppBar)`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  box-shadow: ${props => props.theme.shadows[1]};

  @media screen and (min-width: 960px) {}

`;

const Button = styled(MuiButton)(spacing);

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${props => props.theme.header.indicator.background};
    color: ${props => props.theme.palette.common.white};
  }
`;

const Search = styled.div`
  border-radius: 2px;
  background-color: ${props => props.theme.header.background};
  display: none;
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${props => darken(0.05, props.theme.header.background)};
  }

  ${props => props.theme.breakpoints.up("md")} {
    display: block;
  }
`;

const SearchIconWrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Input = styled(InputBase)`
  color: inherit;
  width: 100%;

  > input {
    color: ${props => props.theme.header.search.color};
    padding-top: ${props => props.theme.spacing(2.5)}px;
    padding-right: ${props => props.theme.spacing(2.5)}px;
    padding-bottom: ${props => props.theme.spacing(2.5)}px;
    padding-left: ${props => props.theme.spacing(12)}px;
    width: 160px;
  }
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

const MainBar = styled.div`
  display: flex;
  flex-direction: row;
`;

class LanguageMenu extends Component {
  state = {
    anchorMenu: null
  };

  toggleMenu = event => {
    this.setState({ anchorMenu: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorMenu: null });
  };

  render() {
    const { anchorMenu } = this.state;
    const open = Boolean(anchorMenu);

    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.toggleMenu}
          color="inherit"
        >
          <Flag src="/static/img/flags/us.png" alt="English" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorMenu}
          open={open}
          onClose={this.closeMenu}
        >
          <MenuItem
            onClick={() => {
              this.closeMenu();
            }}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.closeMenu();
            }}
          >
            French
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.closeMenu();
            }}
          >
            German
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.closeMenu();
            }}
          >
            Dutch
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

class UserMenu extends Component {
  state = {
    anchorMenu: null
  };

  toggleMenu = event => {
    this.setState({ anchorMenu: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorMenu: null });
  };

  render() {
    const { anchorMenu } = this.state;
    const open = Boolean(anchorMenu);

    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.toggleMenu}
          color="inherit"
        >
          <Power />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorMenu}
          open={open}
          onClose={this.closeMenu}
        >
          <MenuItem
            onClick={() => {
              this.closeMenu();
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.closeMenu();
            }}
          >
            Sign out
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

class Logo extends React.Component {
  render () {
    return (
      <Typography variant="h1" style={{ lineHeight: '100px', height: '100px' }} >Piousbox</Typography>)
  }
}

const MainMenuStyle = styled.div`
  margin-left: 100px;
  line-height: 100px;
  height: 100px;
  > a {
    padding-left: 25px;
  }
`;
class MainMenu extends React.Component {
  render () {
    return (<React.Fragment>
      <MainMenuStyle>
        { this.props.children }
      </MainMenuStyle>
    </React.Fragment>)
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { redirectTo: null }
  }

  goTo = (which) => {
    this.setState({ redirectTo: which })
  }

  render () {
    const { onDrawerToggle } = this.props
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return (
      <React.Fragment>
        <AppBar position="sticky" elevation={0}>
        <Container fixed >
        
          
            <Grid container alignItems="center">
              <Hidden mdUp>
                <Grid item>
                  <IconButton color="inherit" aria-label="Open drawer" onClick={onDrawerToggle} ><MenuIcon /></IconButton>
                </Grid>
              </Hidden>
              <Hidden smDown>
                <MainBar >
                  <Logo />
                  <MainMenu>
                    <Button mr={2} color='secondary' variant='outlined' onClick={()=>this.goTo("/")} >Articles</Button>
                    <Button mr={2} color='secondary' variant='outlined' onClick={()=>this.goTo("/pages/contact")} >Contact</Button>
                  </MainMenu>
                </MainBar>
              </Hidden>
            </Grid>
          
        
        </Container>
        </AppBar>
      </React.Fragment>)
  }
}


export default connect()(withTheme(Header));
