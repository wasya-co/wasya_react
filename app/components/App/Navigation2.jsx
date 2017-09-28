import React from 'react'
import ReactDOM from 'react-dom'

import logo3 from './images/logo-3.png'

class Navigation2 extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = { headerFixed: '' }

    this.componentDidMOunt = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    
  }

  handleScroll (e) {
    if (window.scrollY > 60) {
      this.setState({ headerFixed: 'is-fixed' })
    } else {
      this.setState({ headerFixed: '' })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <header className="site-header header-style-5">
        <div className={`sticky-header main-bar-wraper ${this.state.headerFixed}`} >
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion">
                <a href="/">
                  <img src={ logo3 } width="193" height="89" alt="" />
                </a>
              </div>
              <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <div className="header-nav navbar-collapse collapse">
                <ul className=" nav navbar-nav">
                  <li className="active"> <a href="javascript:;" className="scroltop" >Home</a></li>
                  <li><a id="aboutLink" href="javascript:;">About<i className="fa fa-chevron-down"></i></a>
                    <ul className="sub-menu">
                      <li><a href="javascript:;" id="servicesLink" >Services</a></li>
                      <li><a href="javascript:;">Process</a></li>
                      <li><a href="javascript:;">Stack</a></li>
                      <li><a href="javascript:;">Team</a></li>
                    </ul>                    
                  </li>
                  <li><a href="javascript:;">Portfolio<i className="fa fa-chevron-down"></i></a>
                    <ul className="sub-menu">
                      <li><a href="javascript:;">Case Studies</a></li>
                      <li><a href="javascript:;">Clients</a></li>
                      <li><a href="javascript:;">Articles</a></li>
                    </ul>
                  </li>
                  <li><a href="#contactUs">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navigation2
