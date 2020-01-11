import React from 'react'

import { Grid, Row, Col,
  Panel,
} from 'react-bootstrap'

import Center from '../Center'

class Item extends React.Component {
  render () {
    let items = []
    if (this.props.items) {
      this.props.items.forEach( item => {
        items.push(<li>{item}</li>)
      })
    }

    let description = []
    if (this.props.description) {
      this.props.description.forEach( d => {
        description.push(<p>{ d }</p>)
      })
    }

    return (
      <Row>
        <Col lg={12}><Center><h2>{ this.props.title }</h2></Center></Col>
        <Col lg={6} xs={6}>
          <div style={{ textAlign: 'right' }}>
            <img style={{ maxWidth: '100%' }} src={this.props.image} alt={this.props.alt} />
          </div>
        </Col>
        <Col lg={6} xs={6}>
          <ul style={{ margin: 0, padding: 0 }} >
            { description }
            { items }
          </ul>
        </Col>
      </Row>
    )
  }
}

export default Item
