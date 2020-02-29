import React     from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col,
} from 'react-bootstrap'
import { Link } from 'react-router'

import graffiti from './images/graffiti.jpg'

import AppRouter from '../App/AppRouter'
import Contact from '../App/ContactUs2'

class WasyaCoPage extends React.Component {
  render () {
    return (
      <div>
        <div style={{ backgroundImage: `url(${graffiti})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">WasyaCo</h1>
            </div>
          </div>
        </div>

        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              <br />
              <h1 className="m-b20 m-t0">WasyaCo</h1>
              <div className="dez-separator bg-primary"></div>
              <p>WasyaCo offers consulting services in software development in a number of disciplines, from infrasturcture automation to fine-tuning UI's. WasyaCo is a full-cycle software development consultancy.</p>
              <p>To us, full-cycle means that we work with you, the client, from analyzing the business need, to whiteboarding a potential solution, iterating on the architecture of the proposed system, implementation and design, testing, all the way to deploy, support, and beyond. After the project has been successfully delivered, we make sure that monitoring and alerting works, we verify the disaster recovery mechanism, and optionally do performance tuning, cost optimization, and further feature augmentation as requested by you, the client.</p>
              <p>We hope you give us a chance to prove that the solutions we built are robust, scalable, cost-efficient, and answer your business needs. Use the form below to start a conversation!</p>
            </Col>
          </Row>
        </Grid>
        <Contact />
      </div>
    )
  }
}

export default WasyaCoPage
