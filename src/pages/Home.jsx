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
    width: 464px;
    float: right;
  }
`;
class Home extends React.Component {
  render () {
    return (<React.Fragment>
      <Grid spacing={0} container >
        <Grid item md={6}>
          <HalfHero >
            <h1>Welcome!</h1>
          </HalfHero>
        </Grid>
        <Grid item md={6} style={style}>
        </Grid>
      </Grid>
    </React.Fragment>)
  }
}

export default Home
