import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss'

import MainNavigation from '../MainNavigation/MainNavigation'
import About      from './About'
import Services   from './Services'
import OurProcess from '../OurProcess/OurProcess'
import Team       from './Team'
import ContactUs  from '../ContactUs/ContactUs'
import { Footer0, Footer1, Footer2, Footer3 } from '../Footer/Footer'

class Home extends React.Component {
  render () {
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className={styles.app}>
          <MainNavigation />
        </div>
        <About />
        <Services />
        <OurProcess />
        <Team />
        <ContactUs />
        <Footer0 />
        <Footer1 />
        <Footer2 />
      </div>
    )
  }
}

export default Home
