import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss'
// import bg3 from "./images/background/bg3-1.jpg"
import bg5 from './images/circuit-boards/1.jpg'
import bg6 from './images/circuit-boards/2.jpg'
import bg7 from './images/circuit-boards/3.jpg'
import bg8 from './images/circuit-boards/4.jpg'

// import bg4 from './images/background/colorGrid.jpg'
import bg9 from './images/background/fire_2-short.jpg'

import logo3 from './images/logo-3.png'

import FA from 'react-fontawesome'

import MainNavigation from './MainNavigation'
import Navigation2    from './Navigation2'
import Services       from './Services'
import OurProcess     from './OurProcess'
import Team           from './Team'
import ContactUs2     from './ContactUs2'
import Footer         from '../Footer'

class MainBanner extends React.Component {
  render () {
    return (
      <div>
        <div className="dez-bnr-inr dez-bnr-inr-lg overlay-black-middle" style={{ backgroundImage: `url(${bg8})` }}>
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Software Development & Consulting in South Bay Area</h1>
              <h5 className="text-white">Implementing performant, efficient processes & tools</h5>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${bg9})`, height: '20px', width: '100%', backgroundSize: "100%, 100%" }} className="bg-img-fix" />
      </div>
    )
  }
}

class About extends React.Component {
  render () {
    return (
      <div id="aboutContent" className="p-a30 bg-white m-b40">
        <div className="section-head text-center">
          <h2 className="text-uppercase"><img src={ logo3 } alt='wasya co' /></h2>
          <div className="dez-separator-outer ">
            <div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div>
          </div>
          <p className="justify">We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with cost-effective and performant tools.</p>
        </div>
        <div className="section-content"></div>
      </div>
    )
  }
}

class Home extends React.Component {
  render () {
    // console.log('+++ render home:', this.props)

    return (
      <div className="page-content" >
        <MainBanner />
        <About />
        <Services />
        <OurProcess />
        <Team />
        <ContactUs2 />
      </div>
    )
  }
}

export default Home
