
import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss';

import clouds from "./images/clouds.png"

class About extends React.Component {
  render () {
    return (
      <Grid >
        <Row >
          <Col xs={12}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={clouds} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <p className={styles.bigDescr}>We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with the most effective tooling possible.</p>
            <br />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About
