import React from 'react'

import { Grid, Row, Col,
  Panel,
} from 'react-bootstrap'

import styles from './_Stack.scss'

import { Footer } from '../Footer'
import Center from '../Center'

import bg      from './images/noisy_grid.png'

import jenkins from './images/jenkins.png'
import nagios  from './images/nagios.png'
import chef    from './images/chef.png'

import ui_2       from './images/ui_2.png'
import engine     from './images/engine.png'
import foundation from './images/foundation.png'
import iterative  from './images/iterative.png'
import database   from './images/database.png'

import Item from './Item'

class Stack extends React.Component {
  render () {
    let per_row = 2
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <br /><br /><br />
        <Grid>
          <Row>
            <Col xs={12}>
              <Panel>
                <h1 style={{ textAlign: 'center' }}>The Stack</h1>
                <p>We have the preference for using the following technologies.</p>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={9}>
              <Row>
                <Col lg={6} lgOffset={3}>
                  <Item title='Front-End' image={ui_2} alt='UI/UX' items={['React.js, bootstrap, materialize', 'npm, webpack, es6/7', 'karma, phantom.js']} />
                </Col>
                <Col lg={6}>
                  <Item title='Methodology' image={iterative} alt='Iterative Methodology' items={['Iterative', 'Agile']} />
                </Col>
                <Col lg={6}>
                  <Item title='Business Logic' image={engine} alt='Business Logic Layer' items={['Ruby on Rails Ecosystem', 'Rspec, Rack']} />
                </Col>
                <Col lg={8} lgOffset={2}>
                  <Item title='Data Layer' image={database} alt='Database: mongodb, redis' items={['Mongodb', 'Redis']} />
                </Col>
                <Col lg={8} lgOffset={2}>
                  <Item title='Foundation' image={foundation} alt='AWS Amazon Web Services' description={['We rely heavily on Amazon Web Services (AWS), although all our infrastructure is actually provider-agnostic.']} />
                </Col>
              </Row>
              <br /><br />
            </Col>
            <Col xs={12} lg={3}>
              <Row>
                <Col lg={12} xs={6} xsOffset={3} lgOffset={0}>
                  <Panel>
                    <Center><h1>Auxiliary Services</h1></Center>

                    <Center><img style={{ maxWidth: '100%' }} src={jenkins} alt='Jenkins' /><h2>Jenkins</h2></Center>
                    <p>Jenkins is our preferred tool for continuous integration / continuous delivery, as well as running a number of periodic tasks.</p>
                    <br /><br />

                    <Center><img style={{ maxWidth: '100%' }} src={nagios} alt='Nagios' /><h2>Nagios</h2></Center>
                    <p>Nagios is our service / server monitoring tool.</p>
                    <br /><br />

                    <Center><img style={{ maxWidth: '100%' }} src={chef} alt='Chef' /><h2>Chef</h2></Center>
                    <p>We use Chef as the infrastructure automation framework.</p>
                    <br /><br />

                  </Panel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        <br /><br /><br />
        <Footer />
      </div>
    )
  }
}

export default Stack
