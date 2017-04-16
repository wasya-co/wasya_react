import React from 'react'
import ReactDom from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss'

import ProductsNavigation from './ProductsNavigation'

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
              Product 1
            </Col>
            <Col xs={6}>
              Product 2
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Products

