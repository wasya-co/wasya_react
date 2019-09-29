import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { spacing } from "@material-ui/system"

import {
  Hidden,
  CssBaseline,
  Paper as MuiPaper,
  withWidth
} from "@material-ui/core"
import { isWidthUp } from "@material-ui/core/withWidth"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

const drawerWidth = 260

const Paper = styled(MuiPaper)(spacing)

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  * .debug {
    border: 1px solid yellow;
  }
`;

const Drawer = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    font-family: Roboto, sans-serif;
  }

  body {
    background: ${props => props.theme.body.background};
  }
`;

const MainContent = styled(Paper)`
  flex: 1;
  background: ${props => props.theme.body.background};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;


const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

const Root2 = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer2 = styled.div``;

class MainLayout extends React.Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  render () {
    const { children, width } = this.props
    return (
      <Root2>
        <CssBaseline />
        <GlobalStyle />
        <Drawer2>
          <Hidden mdUp implementation="js">
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
            />
          </Hidden>
          { /* <Hidden smDown implementation="css">
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
            />
          </Hidden> */ }
        </Drawer2>
        <AppContent>
          <Header onDrawerToggle={this.handleDrawerToggle} />
          <MainContent >
            {children}
          </MainContent>
          <Footer />
        </AppContent>
      </Root2>
    )
  }
}

export default MainLayout;
