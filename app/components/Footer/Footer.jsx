import styles from './_Footer.scss';
import React from 'react';

import Moment from 'moment';

import { Grid, Row, Col, 
         Panel, Button, 
         FormGroup, FieldGroup, FormControl } from 'react-bootstrap';

import facebook from "./images/facebook.png"
import github from "./images/github.png"
import google_plus from "./images/google_plus.png"
import instagram from "./images/instagram.png"
import linkedin from "./images/linkedin.png"
import youtube from "./images/youtube.png"

import bg from './images/bg1.png'
import bgTriangular from './images/triangular.png'
import f0_bg from './images/weather.png'

class Footer0 extends React.Component {
  render () {
    return (
      <footer style={{ backgroundImage: `url(${f0_bg})` }} >
      &nbsp;
      </footer>
    )
  }
}

class Footer1 extends React.Component {

  constructor () {
    super();
    this.state = {
      data: [],
      name: 'this name'
    };
  }

  componentDidMount () {
    fetch("http://crossorigin.me/http://blog.wasya.co/?feed=json").then( (response) => {
      return response.json()
    }).then( (json) => {
      json = json.slice(0,5)
      window.data = json;
      this.setState({data: json});
    });
  };

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
    var blogTitles = [];
    
    this.state.data.forEach(function(blogItem) {
      blogTitles.push(
        <div key={blogItem.title}>
          <hr />
          <h4 ><a href="#" dangerouslySetInnerHTML={{__html: blogItem.title}} ></a></h4>
          <i>{Moment(blogItem.date).format('YYYY-MM-DD')}</i><p dangerouslySetInnerHTML={{__html:blogItem.excerpt}} ></p>
        </div>);
    });
    return (
      <footer className={styles.footer} style={{ backgroundImage: `url(${bg})` }}>
        <Grid >
          <Row className="show-grid" >
            <Col xs={6}>
              <Panel>
                <h2>From our Blog</h2>
                {blogTitles}
              </Panel>
            </Col>
            <Col xs={6}>
              <ul className={styles.socialMediaIcons}>
                <li key={1}><img src={instagram} /></li>
                <li key={2}><img src={facebook} /></li>
                <li key={3}><img src={github} /></li>
                <li key={4}><img src={google_plus} /></li>
                <li key={5}><img src={linkedin} /></li>
                <li key={6}><img src={youtube} /></li>
              </ul>
              <br /><br />
              <Panel>
                <h2>Keep in Touch!</h2>
                <p>Subscribe to our occasional newsletter.</p>
                <form>
                  <input type="text" name="subscribe" placeholder="Your email" />&nbsp;&nbsp;
                  <Button type="submit" bsStyle="primary" bsSize="small" >Subscribe</Button>
                </form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

class Footer2 extends React.Component {
  render () {
    var year = (new Date()).getFullYear();

    return (
      <footer className={styles.footer2} style={{backgroundImage: `url(${bgTriangular})` }}>
        <Grid>
          <Row>
            <Col xs={6} xsOffset={6}>
              &copy; Wasya co&nbsp;{year}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              New York City &nbsp; | &nbsp; Chicago &nbsp; | &nbsp; San Francisco Bay Area
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export { Footer0, Footer1, Footer2 }
