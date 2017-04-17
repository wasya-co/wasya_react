import React from 'react'
import ReactDom from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss'

import ProductsNavigation from './ProductsNavigation'
import { Footer } from '../Footer'

import bg from './images/noisy_grid.png'

class Products extends React.Component {
  render () {
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className={styles.app}>
          <ProductsNavigation />
        </div>
        <br /><br /><br />
        <h1 style={{ textAlign: 'center' }}>Our Products</h1>
        <Grid>
          <Row>
            <Col xs={6}>
              <h1>Microstes3 Cluster</h1>
              A modern content management system (CMS). It's modular and componentized. Written in ruby on rails.
              <p><a href="http://wiki.wasya.co/index.php/Microsites_Cluster">http://wiki.wasya.co/index.php/Microsites_Cluster</a></p>
            </Col>
            <Col xs={6}>
              <h1>Bootstraps</h1>
              Free to use!
              <ul>
                <li>React bootstrap</li>
                <li>Ruby on Rails bootstrap</li>
              </ul>
              <p><a href="http://wiki.wasya.co/index.php/Bootstraps">http://wiki.wasya.co/index.php/Bootstraps</a></p>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default Products

