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

const Paper = styled(MuiPaper)(spacing)

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
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
const Root2 = styled.div``;

class MainLayout extends React.Component {
  render () {
    const { children, width } = this.props
    return (
      <Root2>
        <CssBaseline />
        <GlobalStyle />
        <AppContent>
          <Header />
          <MainContent p={isWidthUp("lg", width) ? 10 : 8}>
            {children}
          </MainContent>
          <Footer />
        </AppContent>
      </Root2>
    )
  }
}

export default MainLayout;
