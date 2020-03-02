import React from 'react';
import {
  Grid, Row, Col, Button, 
} from 'react-bootstrap'
import { Link } from 'react-router'

import Center from '../Center'
import AppRouter from './AppRouter'

class OurProcess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Grid id="ourProcessContent" >
        <Row style={{ position: 'relative' }} >
          <Col xs={12}>
            <div style={{height: '100px'}} />
            <Center>
              <h2 className="text-uppercase">Our Process</h2>
              <div className="dez-separator-outer "><div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div></div>
            </Center>
          </Col>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
            <h3 >We work in iterative development cycles segmented in 1-week sprints.
              We do daily standups, and quarterly planning.
              We use Redmine as the ticketing system, along with a number of productivity tools.</h3>
            <Center><Link to={AppRouter.ourProcessLink()}><Button bsStyle="success" >Read More</Button></Link></Center>
            <div style={{height: '200px'}} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default OurProcess

