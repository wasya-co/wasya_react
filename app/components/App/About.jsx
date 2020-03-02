import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import logo3 from './images/logo-4.png' // Wásya Co

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swipeAnim: 'swipe-anim-pre',
    }
    this.componentDidMount    = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleScroll         = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if (window.scrollY > 10) {
      this.setState({ swipeAnim: 'swipe-anim', })
    }
  }

  render () {
    return (
      <div id="aboutContent" className="p-a30 bg-white m-b40">
        <div className="section-head text-center">
          <h2 className={`text-uppercase ${this.state.swipeAnim}`} ><img src={ logo3 } alt='wasya co' /></h2>
          
          <h3 style={{ maxWidth: '768px', textAlign: 'justify', margin: 'auto' }} >Wasya Co is a software development consultancy for small and medium Enterprises. 
            We offer innovative technical solutions to complex and domain-specific business needs. See our Case Studies. 
            We are proponents of agile, iterative development - see Our Process.</h3>

          <br /><div className="dez-separator-outer ">
            <div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div>
          </div><h3 className='center'>Est. 2013</h3>

        </div>
        <div className="section-content"></div>
      </div>
    )
  }
}

export default About

