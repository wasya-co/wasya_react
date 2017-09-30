import React from 'react';

import { Grid, Row, Col, } from 'react-bootstrap'

import Center from '../Center'

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
            <Center>
              <h2 className="text-uppercase">Our Process</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>
          </Col>
          <ul className="timeline">
            <Col xs={11} xsOffset={1} md={6} mdOffset={6} >
              <li className="inverted" >
                <div className="badge"><i className="glyphicon glyphicon-blackboard"></i></div>
                <div className="panel">
                  <div className="timeline-heading">
                    <h4 className="title">Step 1 - Whiteboard</h4>
                  </div>
                  <div className="body">
                    <p>We sit down with product managers and stake holders and strategize on the approach to take. 
                      The results of this step are: (1) An Actionable specification / user stories, and
                      (2) A sketch of design & functionality of all pages
                    </p>
                    <p>This establishes the common language to communicate with for the duration of the project.</p>
                  </div>
                </div>
              </li>
              <li className="inverted" >
                <div className="badge" ><i className="glyphicon glyphicon-modal-window"></i></div>
                <div className=' panel' >
                  <div className="timeline-heading">
                    <h4 className="title">Step 2 - Wireframe</h4>
                  </div>
                  <div className='body' >
                    <p>Next, we create a more precise mockup / wireframe of all UI elements and all the pages. This document is signed off by the stake holders before implementation starts</p>
                  </div>
                </div>
              </li>
              <li className='inverted' >
                <div className="badge info"><i className="glyphicon glyphicon-wrench"></i></div>
                <div className='panel' >
                  <div className="timeline-heading">
                    <h4 className="title">Step 3 - Prototype</h4>
                  </div>
                  <div className="body">
                    <p>Next, we create the prototype application that has the basic functionality implemented. This prototype is used to validate initial hypotheses, and to further guide the development effort: which areas need to be refined? Which need to be massively altered? Which have been implemented just right?</p>
                  </div>
                </div>
              </li>
              <li className="inverted">
                <div className="badge info"><i className="glyphicon glyphicon-refresh"></i></div>
                <div className="panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Step 4 - Iterate</h4>
                  </div>
                  <div className="body">
                    <p>Depending on the needs of the client, there could be several iteration steps in which the application is polished according to the customer's needs. We use the industry-standard, iterative, agile approach to development. Our sprint cycles are two weeks long.</p>
                  </div>
                </div>
              </li>
              <li className="inverted">
                <div className="badge info"><i className="glyphicon glyphicon-hand-right"></i></div>
                <div className='panel'>
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Step 5 - QA / signoff</h4>
                  </div>
                  <div className="body">
                    <p>Once the customer is happy with the application, we do final Quality Assurance round to make sure all the bugs are caught, and confirm with the client that the spec has been completely implemented.</p>
                  </div>
                </div>
              </li>
              <li className="inverted">
                <div className="badge success" ><i className="glyphicon glyphicon-plane"></i></div>
                <div className='panel' >
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Step 6 - Deploy</h4>
                  </div>
                  <div className="body">
                    <p>We deploy the applicaton on the production environment of your choice - Digital Ocean, AWS, or on premises. We provide the tooling needed to continue support of the application, and redeploy as necessary.</p>
                  </div>
                </div>
              </li>
              <li className="inverted">
                <div className="badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
                <div className='panel' >
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Step 7 - Monitor</h4>
                  </div>
                  <div className="body">
                    <p>Optionally, we scale and monitor the application and provide support after it went live.</p>
                  </div>
                </div>
              </li>
            </Col>
            <div className="clearfix" />
          </ul>
        </Row>
      </Grid>
    )
  }
}

export default OurProcess

