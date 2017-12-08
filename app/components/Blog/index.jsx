import React from 'react'

import { 
  Grid, Row, Col,
} from 'react-bootstrap'

import blogImg from './images/bg/blog.jpg'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state= { items: [ { name: 'Loading...' } ] }
  }

  componentWillMount () {
    fetch("http://localhost:3000/api/sites/view/wasya.co/reports", {}).then(r => r.json()).then(_data => {
      console.log('+++ data:', _data)
      this.setState({ items: _data })
    }).catch(_e => {
      console.log('+++ problem:', _e)
    })
  }

  render () {
    let items = []
    this.state.items.map((item, idx) => {
      items.push(
        <div>
          <br />
          <h1 className="m-b20 m-t0">{ item.name }</h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <h2>{ item.subhead }</h2>
          <div dangerouslySetInnerHTML={{__html: item.description }} />
          <br /><br /><br />
        </div>)
    })

    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Wasya Blog</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              { items }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default {
  BlogIndex,
}
