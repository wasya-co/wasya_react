import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Grid, Row, Col } from 'react-bootstrap'

import wImg      from './images/w_30x30.png'
import chicagoImg from './images/map/chicago.fin.jpg'

import SectionHeader from './SectionHeader'

class Map extends React.Component {
  render () {
    // console.log('+++ rendering map')

    return (
      <div>
        <SectionHeader>Our Location</SectionHeader>
        <Row>
          <Col xs={12} md={6}>
            <br /><br /><br />
            <h3 style={{ padding: '60px', textAlign: 'right' }} >
              We are located in Chicago, IL <br /><br />
              Our list of clients includes <br />
              companies on East and West coast, <br />
              as well as the Midwest.
            </h3>
          </Col>
          <Col xs={12} md={6}>
            <img src={chicagoImg} alt='' />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Map
export {
  Map,
}


