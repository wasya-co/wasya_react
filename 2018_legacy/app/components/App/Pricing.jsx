import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import SectionHeader from './SectionHeader'

let styles = {
  lite: { background: '#eaf7fe' },
  original: { background: '#c1e6fb' },
  heavy: { background: '#8ec4e2' },
}

class Pricing extends React.Component {
  render () {
    return (
      <div className="pricing" >
        <SectionHeader>Pricing</SectionHeader>
        <Grid>
          <Row>
            <Col xs={12} md={6} mdOffset={3} >
              <p>We offer three tiers of consulting or technical development / support for new clients. <br />
              Hours exceeding the minimum hours of the tier are billed at the hourly rate of that tier.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={4}>
              <div className="tier lite" style={styles.lite} >
                <h3>Lite</h3>
                <ul>
                  <li>Minimum 10 hr/mo</li>
                  <li>$120/hr</li>
                </ul>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="tier original" style={styles.original} >
                <h3>Original</h3>
                <ul>
                  <li>Minimum 30 hr/mo</li>
                  <li>$100/hr</li>
                </ul>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="tier heavy" style={styles.heavy} >
                <h3>Heavy</h3>
                <ul>
                  <li>Minimum 50 hr/mo</li>
                  <li>$80/hr</li>
                </ul>
              </div>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}

export default Pricing
