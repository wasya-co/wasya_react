import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

import nexentaLogo from './images/clients-logos/nexenta2.jpg'
import creekLogo from './images/clients-logos/creek.png'
import liatrioLogo from './images/clients-logos/liatrio.jpg'
import mediatekLogo from './images/clients-logos/mediatek.jpg'
import operaeventLogo from './images/clients-logos/operaevent.png'
import signvoxLogo from './images/clients-logos/signvox2.png'
import zmdigitalLogo from './images/clients-logos/zmdigital.png'
import redesLogo from './images/clients-logos/redes.png'

class Testimonials extends React.Component {
  render () {
    return(
      <div className="section-full bg-white bg-img-fix content-inner">
        <div className="container">
          <SectionHeader>Our Clients</SectionHeader>
          <Grid>
            <Row>
              <Col sm={6} md={3}><img src={nexentaLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
              <Col sm={6} md={3}><img src={creekLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
              <Col sm={6} md={3}><img src={liatrioLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
              <Col sm={6} md={3}><img src={mediatekLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
            </Row>
            <Row>
              <Col sm={6} md={3}><img src={operaeventLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
              <Col sm={6} md={3}><img src={signvoxLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
              <Col sm={6} md={3}><img src={zmdigitalLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
              <Col sm={6} md={3}><img src={redesLogo} alt="Nexenta" style={{ width: '100%' }} /></Col>
            </Row>
          </Grid>

          <SectionHeader>What People Are Saying</SectionHeader>
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
