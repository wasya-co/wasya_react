import React from 'react';
import styles from './_OurProcess.scss';

import { Grid } from 'react-bootstrap'

import bg from './images/noisy_grid.png'

class OurProcess extends React.Component {
  render () {
    return (
      
      <div style={{ backgroundImage: `url(${bg})` }} className={styles.process} id="process" >
        <h1 style={{ textAlign: 'center' }} >Our Process</h1>
        <Grid>
          <ul className={styles.timeline}>
            <li className={styles.normal}>
              <div className={styles.badge}><i className="glyphicon glyphicon-blackboard"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="title">Step 1 - Whiteboard</h4>
                  { /* <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p> */ }
                </div>
                <div className={styles.body}>
                  <p>We sit down with product managers and stake holders and strategize on the approach to take. The results of this step are:</p>
                  <ul>
                    <li>An Actionable specification / user stories</li>
                    <li>A sketch of design & functionality of all pages</li>
                  </ul>
                  <p>This establishes the common language to communicate with for the duration of the project.</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.badge}><i className="glyphicon glyphicon-modal-window"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="title">Step 2 - Wireframe</h4>
                </div>
                <div className={styles.body}>
                  <p>Next, we create a more precise mockup / wireframe of all UI elements and all the pages. This document is signed off by the stake holders before implementation starts</p>
                </div>
              </div>
            </li>
            <li className={styles.normal}>
              <div className={styles.badge +' '+ styles.info}><i className="glyphicon glyphicon-wrench"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="title">Step 3 - Prototype</h4>
                </div>
                <div className={styles.body}>
                  <p>Next, we create the prototype application that has the basic functionality implemented. This prototype is used to validate initial hypotheses, and to further guide the development effort: which areas need to be refined? Which need to be massively altered? Which have been implemented just right?</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.badge +' '+ styles.info}><i className="glyphicon glyphicon-refresh"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 4 - Iterate</h4>
                </div>
                <div className={styles.body}>
                  <p>Depending on the needs of the client, there could be several iteration steps in which the application is polished according to the customer's needs. We use the industry-standard, iterative, agile approach to development. Our sprint cycles are two weeks long.</p>
                </div>
              </div>
            </li>
            <li className={styles.normal}>
              <div className={styles.badge +' '+ styles.info}><i className="glyphicon glyphicon-hand-right"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 5 - QA / signoff</h4>
                </div>
                <div className={styles.body}>
                  <p>Once the customer is happy with the application, we do final Quality Assurance round to make sure all the bugs are caught, and confirm with the client that the spec has been completely implemented.</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.badge +' '+ styles.success}><i className="glyphicon glyphicon-plane"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 6 - Deploy</h4>
                </div>
                <div className={styles.body}>
                  <p>We deploy the applicaton on the production environment of your choice - Digital Ocean, AWS, or on premises. We provide the tooling needed to continue support of the application, and redeploy as necessary.</p>
                </div>
              </div>
            </li>
            <li className={styles.normal}>
              <div className={styles.badge +' '+ styles.success}><i className="glyphicon glyphicon-thumbs-up"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 7 - Monitor</h4>
                </div>
                <div className={styles.body}>
                  <p>Optionally, we scale and monitor the application and provide support after it went live.</p>
                </div>
              </div>
            </li>
          </ul>
        </Grid>
      </div>
    )
  }
}

export default OurProcess

