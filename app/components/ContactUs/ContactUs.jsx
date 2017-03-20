import React from 'react';
import styles from './_ContactUs.scss';

import { Grid, Row, Col,
         Form, FormGroup, FormControl, 
         Button } from 'react-bootstrap'

import bg from './images/green_dust_scratch.png'

class ContactUs extends React.Component {
  render () {
    return (
      <div className={styles.contactUs} style={{ backgroundImage: `url(${bg})` }} >
        <Grid  >
          <Form>
            <Row>
              <Col xs={12}>
                <h1 className={styles.center} >Contact Us</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} mdOffset={2} >
                <FormGroup controlId="name">
                  <FormControl type="text" placeholder="Your Name" />
                </FormGroup>
                <FormGroup controlId="email">
                  <FormControl type="email" placeholder="Your Email" />
                </FormGroup>
                <FormGroup controlId="phone">
                  <FormControl type="text" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup controlId="captcha">
                  <FormControl type="text" placeholder="What's 5 + 9?" />
                </FormGroup>
              </Col> 
              <Col xs={12} md={4} >
                <FormGroup controlId="description">
                  <FormControl componentClass="textarea" placeholder="A Brief Description of your project" />
                </FormGroup>
                <Button bsStyle="primary" bsSize="small">Send</Button>
              </Col>
            </Row>
          </Form>
        </Grid>
      </div>
    )
  }
}

export default ContactUs

