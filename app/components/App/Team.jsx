import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import victor from './images/victor.jpg'
import oleg from './images/oleg.jpg'

class Team extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: 'center' }} id='team' >Our Team</h1>
            <p>We are a distributed, agile development team. We operate in several major US cities: San Francisco Bay Area, Los Angeles, Chicago and New York City. We reach out to our network of professionals if a project requires some specific expertise that we don't possess in-house, or if the quantity of work demands so.</p>
            <p>Local teams work with local clients, so a client in Chicago will talk to our Chicago engineers.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <img src={victor} />
            <p>Hi, I'm victor</p>
            <p>San Francisco Bay Area</p>
            <p>see http://piousbox.github.io</p>
          </Col>
          <Col xs={6}>
            <img src={oleg} />
            <p>Hi, I'm Oleg.</p>
            <p>New York City</p>
            <p>See http://bsdpower.net</p>
          </Col>
          <Col xs={6}>
            <img src={oleg} />
            <p>Hi, I'm this other guy from Chicago</p>
            <p>Chicago</p>
            <p>See http://bsdpower.net</p>
          </Col>
          <Col xs={6}>
            <img src={oleg} />
            <p>Hi, I'm this other guy from New York City</p>
            <p>New York City</p>
            <p>See http://bsdpower.net</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Team

