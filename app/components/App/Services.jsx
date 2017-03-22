
import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import ui_ux_wireframing from './images/ui_ux_wireframing.jpg'
import mvp_prototyping from './images/mvp_prototyping.jpg'

class Services extends React.Component {
  render () {
    return (
      <Grid >
        <Row>
          <Col xs={12}>
            <p>We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</p>
          </Col>
        </Row>
        <Row >
          <Col xs={4}>
            <h3>Ruby on Rails</h3>
            Our preferred framework for rapid prototyping and non-real-time applications is Ruby on Rails. We use it for constructing APIs, 
          </Col>
          <Col xs={4}>
            <h3>Node.js</h3>
            <p>Node.js and Socket.js are our tools of choice for implementing real-time applications, event-driven applications, and some microservices. Node is generally our go-to technology for implementing websockets.</p>
          </Col>
          <Col xs={4}>
            <h3>React.js</h3>
            <p>React.js is our preferred frontend technology. While we have extensive experience in Angular.js and Backbone.js, in 2017 we feel that the winner for starting new frontend projects is react.js. We still support existing codebases written in Angular.js and Backbone.js, however.</p>
          </Col>
          <Col xs={4}>
            <h3>PHP</h3>
            <p>PHP may not be glamorous but it certainly gets the job done! And with the number of sites being powered by Wordpress, it is a market segment certainly not to be missed.</p>
            <p>We offer Wordpress plugin development, eCommerce site building, as well as building custom PHP applications in CakePHP or a framework of your choice. We will also update and expand on your existing PHP codebase, and implement features necessary for your business to grow.</p>
          </Col>
        </Row>
        <Row >
          <Col xs={4}>
            <img src={ui_ux_wireframing} alt='' />
            <h3>Ui/UX wireframing</h3>
            <p>We offer iterative work on UI/UX to match your spec. You have an idea, you need visuals for it, talk to us and we'll build the visuals for you.</p>
          </Col>
          <Col xs={4}>
            <img src={mvp_prototyping} alt='mvp prototyping' />
            <h3>MVP prototyping</h3>
            <p>We specialize in MVP prototyping. We will iteratively develop an application for you that will prove (or disprove) your business concept in minimal time and budget. Once you have that, you can decide to pivot or continue iterating on that idea. We do this initial critical step for you.</p>
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
