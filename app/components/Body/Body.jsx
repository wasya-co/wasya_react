import styles from './_Body.scss';
import React from 'react';

import Menu from '../Menu/Menu';

let { PropTypes } = React;

import { Button, Grid, Row, Col, Nav, NavItem, Tabs, Tab } from 'react-bootstrap'

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  handleServicesSelect(eventKey) {
    event.preventDefault();
  }      

  render() {
    return (
      <div className={styles.body}>
        <Grid>
          <h1 className={styles.header}>About</h1>
          <Row>
            <Col xs={3} >
              <p>We whiteboard, design, prototype, develop, QA, deploy, monitor, scale and maintain web-based SaaS applications and tools that enable & supercharge your business.
                <br /><Button bsStyle="primary" bsSize="xsmall" >Our process</Button></p>
            </Col>
            <Col xs={3} >
              <p>We employ modern agile technology to address your business neeeds. We match the client's requirements to the technology that answers them in the most effective manner.
                <br /><Button bsStyle="primary" bsSize="xsmall">Our Technology</Button></p>
            </Col>
            <Col xs={3} >
              <p>Our small team is agile and effective in the modern landscape of software development.
                <br /><Button bsStyle="primary" bsSize="xsmall">Our People</Button></p>
            </Col>
            <Col xs={3} >
              <p>Are are knowledgable and contribute non-trivially to the global community of engineers and developers.
                <br /><Button bsStyle="primary" bsSize="xsmall">Our Blog</Button></p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={3} >
              <p>We are happy to say that we have solved many non-trivial technical challenges for our clients.
                <br /><Button bsStyle="primary" bsSize="xsmall">Our Clients</Button></p>
            </Col>
            <Col xs={3} >
              <p>Furthermore... here is all the stuff that we've done.
                <br /><Button bsStyle="primary" bsSize="xsmall">Our Projeccts</Button></p>
            </Col>
            <Col xs={3} >
              <p>...And the stuff that we've talked about.
                <br /><Button bsStyle="primary" bsSize="xsmall">Our Wiki</Button></p>
            </Col>
            <Col xs={3} >
              <p>Hear what people say!
                <br /><Button bsStyle="primary" bsSize="xsmall">Testimonials</Button></p>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col xs={12} >
              <h1 className={styles.header} >Services</h1>
              <p>We provide full-cycle software development services.</p>
              <Nav style={{ display: 'none' }}  bsStyle="tabs" activeKey="1" onSelect={this.handleServicesSelect} >
                <NavItem eventKey="0" href="/services/application-development">Application Development</NavItem>
                <NavItem eventKey="1" href="/services/web-design">Web Design</NavItem>
                <NavItem eventKey="2" href="/services/devops">Devops - Build & Release</NavItem>
                <NavItem eventKey="3" href="/services/spa">SPAs - Single Page Apps</NavItem>
                <NavItem eventKey="4" href="/services/project-management">Project Management</NavItem>
                <NavItem eventKey="5" href="/services/ui-ux-wireframes-design">UI/UX Wireframing & Design</NavItem>
              </Nav>

              Application Development
              - RoR
              - node.js
              - need a hybrid stack? we got you
              - react.js or angular.js
              
              What we do
              - web design 
              - devops
              - SPAs
              - project management
              - UI/UX design
              
              <p>Need a good-looking, usable UI? Our team can answer this need with an iterative approach to design and development. We provide multiple drafts for you to approve, and are fleixble in our revision process. Our goal is to deliver to you a UI that not only answers your specification, but can be adapted to the continuous changes in said specification, as well as to the continuous changes in the market needs. We practice the lean approach to development.</p>
              
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
