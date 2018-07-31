import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import gray from './images/gray.png'

import SectionHeader from './SectionHeader'

/**
 * medical, management, entertainment
 * education, construction, publishing
 */

class Industries extends React.Component {
  render () {
    return (
      <div>
        <SectionHeader>Industries</SectionHeader>
        <Grid>
          <Row xs={12}>
            <p>While primarily we help high-tech startups grow from zero to one, find product-market fit, release the first product or service, establish a viable project management pattern, or embrace a tried and true development methodology -- our technical development services are uniformly applicable across the board.</p>
            <p>We develop applications for the cunstruction indistry just as rapidly and effectively as for any other. We enjoy and strive in the challenges of security and privacy necessitated for achieving HIPAA compliance. Addressing the goal of cotinuous innovation in SaaS is our bread and butter.</p>
          </Row>
          <Row>
            <Col xs={6} md={4} >
              <img src={gray} alt='' />
              <h5 className="center" >Medical</h5>
            </Col>
            <Col xs={6} md={4} >
              <img src={gray} alt='' />
              <h5 className="center" >Management</h5>
            </Col>
            <Col xs={6} md={4} >
              <img src={gray} alt='' />
              <h5 className="center" >Publishing</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} >
              <img src={gray} alt='' />
              <h5 className="center" >Education</h5>
            </Col>
            <Col xs={6} md={4} >
              <img src={gray} alt='' />
              <h5 className="center" >Construction</h5>
            </Col>
            <Col xs={6} md={4} >
              <img src={gray} alt='' />
              <h5 className="center" >Entertainment</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} >
              <h5></h5>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Industries
