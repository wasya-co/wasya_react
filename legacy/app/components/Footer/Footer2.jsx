import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_Footer.scss'

import bg1 from './images/triangular.png'
import co  from './images/co.png'
import ru  from './images/ru.png';
import br  from './images/br.png'

/**
 * world stuff: cities, flags
 */
class Footer2 extends React.Component {
  render () {
    var year = (new Date()).getFullYear();
    return (
      <footer className={styles.footer2} style={{ backgroundImage: `url(${bg1})` }}>
        <Grid>
          <Row>
            <Col xs={6} xsOffset={6}>
              <span className="pull-right" >Wasya co &copy; {year}<br />v0.0.9</span>
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div style={{ textAlign: 'center' }} >New York City &nbsp; | &nbsp; Chicago &nbsp; | &nbsp; Los Angeles &nbsp; | &nbsp; San Francisco
                &nbsp; | &nbsp; San Diego &nbsp; | &nbsp;
              </div>
            </Col>
            <Col xs={12}>
              <Center>
                <img src={us} alt='usa' />
      &nbsp;
      <img src={co} alt='colombia' />
      &nbsp;
      <img src={ru} alt='russia' />
      &nbsp;
      <img src={br} alt='brasil brazil' />
              </Center>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer2
