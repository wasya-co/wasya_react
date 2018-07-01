import React from 'react'
import PropTypes from 'prop-types'
import {
  Navbar, Nav,
} from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import scrollToElement from 'scroll-to-element'
import { connect } from 'react-redux'

import { CONST } from '../../constants'

import logo3 from './images/logo-4.png' // Wásya Co

import AppRouter from '../App/AppRouter'

class IndustrialHeader extends React.Component {
  constructor(props) {
    super(props)
    
    let headerFixed
    if (props.fixed === 'unfixed') {
      headerFixed = ''
    }
    if (props.fixed === true) {
      headerFixed = 'is-fixed'
    }

    this.state = { headerFixed } 

    this.componentDidMOunt    = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleScroll         = this.handleScroll.bind(this)
    this.toggleNav            = this.toggleNav.bind(this)
    this.goto                 = this.goto.bind(this)
  }

  handleScroll (e) {
    if (window.scrollY > 60) {
      this.setState({ headerFixed: 'is-fixed' })
    } else {
      this.setState({ headerFixed: '' })
    }
  }

  componentDidMount () {
    if (this.props.fixed !== true) {
      window.addEventListener('scroll', this.handleScroll)
    }
    if (this.props.location && this.props.location.query && this.props.location.query.scrollTo) {
      this.goto(this.props.location.query.scrollTo)
    }
  }

  componentWillUnmount () {
    if (this.props.fixed !== true) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  toggleNav () {
    this.props.dispatch({ type: CONST.navCollapse, val: !this.props.navCollapse })
  }

  goto (where) {
    if (!this.props.navCollapse) {
      this.props.dispatch({ type: CONST.navCollapse, val: true })
    }
    if (this.props.fixed) {
      browserHistory.push(`${AppRouter.rootPath}?scrollTo=${where}`)
    } else {
      scrollToElement(`#${where}Content`, { offset: -60 })
    }
  }

  render () {
    // console.log('+++ IndustrialHeader render:', this.props, this.state)

    return (
      <header className="site-header header-style-5">
        <div className={`sticky-header main-bar-wraper ${this.state.headerFixed}`}>
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion"><a href="/"><img src={ logo3 } width="193" height="89" alt="" /></a></div>
              <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed" onClick={this.toggleNav} > 
                <span className="sr-only">Toggle navigation</span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
              </button>
              <div className={`header-nav navbar-collapse ${this.props.navCollapse ? 'collapse' : ''}`} >
                <ul className="nav navbar-nav">
                  <li><Link href="javascript:;" onClick={ () => { this.goto('about') } } >About</Link></li>
                  <li><Link href="javascript:;" onClick={() => this.goto('team')}>Team</Link></li>
                  <li><Link href="javascript:;" onClick={() => this.goto('services')} >Services</Link></li>
                  <li><Link to={AppRouter.ourProcessLink()} >Our Process</Link></li>
                  <li><Link to={AppRouter.ourWorkLink()} >Our Work</Link></li>

                  <li><a href="javascript:;">Knowledge Base <i className="fa fa-chevron-down" style={{ display: 'inline' }} ></i></a>
                    <ul className="sub-menu">
                      <li><Link to={AppRouter.caseStudiesLink()}>Case Studies</Link></li>
                      { /* <li><Link to={AppRouter.blogLink()} >Articles</Link></li> */ }
                    </ul>
                  </li>

                  <li><Link href="javascript:;" onClick={() => { this.goto('contactUs') }}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

IndustrialHeader.propTypes = {
  location: PropTypes.object,
}

const mapS = (state, ownProps) => {
  return {
    navCollapse: state.navCollapse,
  }
}

export default connect(mapS)(IndustrialHeader)
