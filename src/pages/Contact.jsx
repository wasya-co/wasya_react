import React from 'react'

import {
  Container,
  Grid,
} from "@material-ui/core"

import styled from "styled-components"

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
class Contact extends React.Component {
  render () {
    return (<React.Fragment>
      <Container fixed >
        <h1>Contact</h1>
        <p>Please send me an email to piousbox at gmail dot com.</p>
      </Container>
    </React.Fragment>)
  }
}

export default Contact
