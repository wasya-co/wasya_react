
import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import ui_ux_wireframing from '../../images/400x200/uiux.jpg'
import mvp_prototyping from '../../images/400x200/mvp_prototyping.jpg'
import img_devops from '../../images/400x200/devops.jpg'
import img_ror from '../../images/400x200/ror.jpg'
import img_node from '../../images/400x200/node.jpg'
import img_react from '../../images/400x200/react.jpg'

import Service from './Service'

/*
 * RoR
 * node.js
 * php

 * react.js
 * angular.js

 * ui/ux
 * mvp
 * devops
*/

class Services extends React.Component {
  ror = { descr: "Our preferred framework for rapid prototyping and non-real-time applications is Ruby on Rails. We use it for constructing APIs, providing backend for websites, generating static websites, and many other purposes.",
          image: img_ror,
          title: "Ruby on Rails"
  };

  render () {
    return (
      <Grid >
        <Row>
          <Col xs={12}>
            <h1>Services</h1>
            <p>We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</p>
          </Col>
        </Row>
        <Row >
          <Col xs={4}>
            <Service image={this.ror.image} title={this.ror.title} descr={this.ror.descr} />
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
            <img src={ui_ux_wireframing} alt='ui ux wireframing' />
            <h3>Ui/UX wireframing</h3>
            <p>We offer iterative work on UI/UX to match your spec. You have an idea, you need visuals for it, talk to us and we'll build the visuals for you.</p>
          </Col>
          <Col xs={4}>
            <img src={mvp_prototyping} alt='mvp prototyping' />
            <h3>MVP prototyping</h3>
            <p>We specialize in MVP prototyping. We will iteratively develop an application for you that will prove (or disprove) your business concept in minimal time and budget. Once you have that, you can decide to pivot or continue iterating on that idea. We do this initial critical step for you.</p>
          </Col>
          <Col xs={4}>
            <img src={img_devops} alt='devops' />
            <h3>Devops</h3>
            <p>When development is said and done, it's time to deploy. Arguably, deployments are more difficult than development itself.</p>
            <p>We provide maintainable deployment/automation schemes that make it easy for you to keep the codebase live. Our processes make it easy to make changes in the future, and provide stability while the software is life in production environments.</p>
            <p>Additionally, we solve specific questions regarding performance, resilience, and scaling of applications.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Services
