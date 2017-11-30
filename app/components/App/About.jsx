import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import logo3 from './images/logo-3.png'

/* import styles from './_App.scss'
import clouds from "./images/clouds.png"
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import ScrollEffect from 'react-scroll-effects'

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
      <Grid id="aboutContent" >
        <Row >
          <Col xs={12}>
            <div id="about"></div>
            <CSSTransitionGroup
                transitionName={styles}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}
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
            <CSSTransitionGroup
                transitionName={styles}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={true}
                transitionEnterTimeout={1000}
                transitionLeave={false}
                transitionLeaveTimeout={1000} 
            >
            </CSSTransitionGroup>
          </Col>
        </Row>

      </Grid>
    )
  }
}
*/

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.componentDidMount = this.componentDidMount(this)
  }

  componentDidMount () {
    console.log('+++ About componentDidMount:', this.props)

    /* if (this.props.location && this.props.location.query && this.props.location.query.scrollTo) {
       this.goto(this.props.location.query.scrollTo)
       } */
  }

  render () {
    // console.log('+++ About render:', this.props, this.state)

    return (
      <div id="aboutContent" className="p-a30 bg-white m-b40">
        <div className="section-head text-center">
          <h2 className="text-uppercase"><img src={ logo3 } alt='wasya co' /></h2>
          <div className="dez-separator-outer "><div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div></div>
          <br />
          <p className="justify">We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with cost-effective and performant tools.</p>
        </div>
        <div className="section-content"></div>
      </div>
    )
  }
}

export default About
