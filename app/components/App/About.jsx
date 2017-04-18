import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss';

import clouds from "./images/clouds.png"

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [ 'hello', 'world', 'click', 'me' ] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ])
    this.setState({items: newItems})
  }

  handleRemove(i) {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({items: newItems})
  }

  render () {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ))

    return (
      <Grid >
        <Row >
          <Col xs={12}>
            <div id="about"></div>
            <CSSTransitionGroup
                transitionName={styles}
                transitionAppear={true}
                transitionAppearTimeout={1000}
            >
              <div className={styles.cloudWrapper} >
                <img src={clouds} alt="" className={styles.cloud} />
              </div>
            </CSSTransitionGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <p className={styles.bigDescr}>We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with the most effective tooling possible.</p>
            <br />
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            { /* <button onClick={this.handleAdd}>Add Item</button> */ }
            <CSSTransitionGroup
                transitionName={styles}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={true}
                transitionEnterTimeout={1000}
                transitionLeave={false}
                transitionLeaveTimeout={1000} 
            >
              { /* items */ }
            </CSSTransitionGroup>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About
