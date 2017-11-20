import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

class Testimonials extends React.Component {
  render () {
    return(
      <div className="section-full bg-white bg-img-fix content-inner">
        <div className="container">
          <SectionHeader>What Clients Are Saying</SectionHeader>
          <Grid>
            <Row>
              <Col sm={12} md={4}>
                <div className="testimonial-3">
                  <div className="quote-left"></div>
                  <div className="testimonial-text">
                    <p>Victor build the application quickly and according to spec. Great communication, great leader.</p>
                  </div>
                  <div className="testimonial-detail"> <strong className="testimonial-name">Stephen Kim</strong> <span className="testimonial-position">Business Owner</span> </div>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="testimonial-3">
                  <div className="quote-left"></div>
                  <div className="testimonial-text">
                    <p>Victor provided the necessary technical guidance for the team to succeed, in tight deadlines. Victor was a pleasure to work with.</p>
                  </div>
                  <div className="testimonial-detail"> <strong className="testimonial-name">Operaevent</strong> <span className="testimonial-position">Bay Area Startup</span> </div>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="testimonial-3">
                  <div className="quote-left"></div>
                  <div className="testimonial-text">
                    <p>Wasya Co delivered a great-looking mobile site, just what we wanted.</p>
                  </div>
                  <div className="testimonial-detail"> <strong className="testimonial-name">Marchesi Design</strong> <span className="testimonial-position">Furniture Store</span> </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Testimonials
