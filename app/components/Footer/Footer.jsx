
import React    from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'
let moment = Moment

import { Grid, Row, Col, 
         Panel, Button, 
         FormGroup, FieldGroup, FormControl } from 'react-bootstrap'

import styles       from './_Footer.scss'
import facebook     from "./images/facebook.png"
import github       from "./images/github.png"
import google_plus  from "./images/google_plus.png"
import instagram    from "./images/instagram.png"
import linkedin     from "./images/linkedin.png"
import youtube      from "./images/youtube.png"
import bg           from './images/bg1.png'
import bgTriangular from './images/triangular.png'
import f0_bg        from './images/weather.png'
import Center       from '../Center'

import us from './images/us.png'
import co from './images/co.png'
import ru from './images/ru.png'
import br from './images/br.png'

/**
 * just a line
 */
class Footer0 extends React.Component {
  render () {
    return (
      <footer style={{ backgroundImage: `url(${f0_bg})` }} >
      &nbsp;
      </footer>
    )
  }
}

/**
 * keep in touch, social, from our blog
 */
class Footer1 extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      name: 'this name'
    };
  }

  render() {
    var blogTitles = [];

    this.state.data.forEach(function(blogItem) {
      blogTitles.push(
        <div key={blogItem.title}>
          <hr />
          <h4 ><a href="#" dangerouslySetInnerHTML={{__html: blogItem.title}} ></a></h4>
          <i>{moment(blogItem.date).format('YYYY-MM-DD')}</i><p dangerouslySetInnerHTML={{__html: blogItem.excerpt}} ></p>
        </div>);
    });

    return (
      <footer className={styles.footer} style={{ backgroundImage: `url(${bg})`, paddingTop: '3em' }} id="blog" >
        <Grid >
          <Row className="show-grid" >
            <Col xs={12} sm={6} id="fromOurBlog" >
              <Panel>
                <h2>From our Blog</h2>
                {blogTitles}
                <hr />
                <div className={styles.center} ><a href="http://blog.wasya.co">Read More</a></div>
              </Panel>
            </Col>
            <Col xs={12} sm={6} >
              <ul className={styles.socialMediaIcons}>
                <li key={1}><img src={instagram} /></li>
                <li key={2}><img src={facebook} /></li>
                <li key={3}><img src={github} /></li>
                { /* <li key={4}><img src={google_plus} /></li> */ }
                <li key={5}><img src={linkedin} /></li>
                <li key={6}><img src={youtube} /></li>
              </ul>
              <br /><br />
              <Panel id="keepInTouch" >
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

export { Footer0, Footer1 }
