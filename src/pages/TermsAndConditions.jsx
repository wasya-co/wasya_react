import React from 'react'

import {
  Container,
  Grid,
} from "@material-ui/core"

import styled from "styled-components"

// import DashboardLayout from '../layouts/Dashboard'

import hero_1 from './hero_1.jpg'
const style = {
  backgroundImage: `url(${hero_1})`,
  height: '500px',
  width: '100%',
};
const HalfHero = styled.div`
  @media screen and (min-width: 960px) {
    width: 448px;
    float: right;
  }
`;
class TermsAndConditions extends React.Component {
  render () {
    return (<React.Fragment>
      <h1>Terms And Conditions</h1>
    </React.Fragment>)
  }
}

export default TermsAndConditions