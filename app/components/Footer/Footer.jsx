import styles from './_Footer.scss';
import React from 'react';

import { Grid, Row, Col, 
         Panel, Button, 
         FormGroup, FieldGroup, FormControl } from 'react-bootstrap';

import facebook from "./images/facebook.png"
import github from "./images/github.png"
import google_plus from "./images/google_plus.png"
import instagram from "./images/instagram.png"
import linkedin from "./images/linkedin.png"
import youtube from "./images/youtube.png"

export default class Footer extends React.Component {

  static FieldGroup = function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  render() {
    var year = (new Date()).getFullYear();
    return (
      <footer className={styles.footer}>
        <Grid >
          <Row className="show-grid" >
            <Col xs={6}>
              <Panel>
                <h2>Keep in Touch!</h2>
                <p>Subscribe to our occasional newsletter.</p>
                <form>
                  <input type="text" name="subscribe" placeholder="Your email" />&nbsp;&nbsp;
                  <Button type="submit" bsStyle="primary" bsSize="small" >Subscribe</Button>
                </form>
              </Panel>
            </Col>
            <Col xs={6}>
      &copy; Wasya co&nbsp;{year}
      <ul className={styles.socialMediaIcons}>
        <li><img src={instagram} /></li>
        <li><img src={facebook} /></li>
        <li><img src={github} /></li>
        <li><img src={google_plus} /></li>
        <li><img src={linkedin} /></li>
        <li><img src={youtube} /></li>
      </ul>
      
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
