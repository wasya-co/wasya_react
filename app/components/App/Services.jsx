
import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

class Services extends React.Component {
  render () {
    return (
      <Grid >
        <Row >
          <Col xs={4}>
            RoR
          </Col>
          <Col xs={4}>
            Node.js
          </Col>
          <Col xs={4}>
            React.js
          </Col>
        </Row>
        <Row >
          <Col xs={4}>
            Ui/UX wireframing
          </Col>
          <Col xs={4}>
            MVP prototyping
          </Col>
          <Col xs={4}>
            Devops
            (deployments, integration, scaling)
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Services
