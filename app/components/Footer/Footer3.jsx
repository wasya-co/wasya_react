import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import scrollToElement from 'scroll-to-element'
import { Link, browserHistory } from 'react-router'

import wasya_co from './images/wasya_co.png'
import world from './images/world4.jpg'

import AppRouter from '../App/AppRouter'

class Footer3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.goto = this.goto.bind(this)
  }

  goto (where) {
    browserHistory.push(`${AppRouter.rootPath}?scrollTo=${where}`)
  }

  render () {
    var year = (new Date()).getFullYear();
    return (
      <footer className="site-footer trans-footer" style={{ zIndex: -1 }} >
        <div className="footer-top" style={{ background: `black url(${world})`, 
                                             backgroundPosition: 'left center', 
                                             backgroundRepeat: 'no-repeat',
                                             minHeight: '420px' }} >
          <div className="container saf-footer" >

            <Row>
              <Col xs={12} md={8} sm={6} >
                <Row>
                  <Col xs={12} md={6} sm={12} >
                    <div className="widget widget_services" id="footerServices">
                      <h2 className="m-b15">Quick Links</h2>
                      <div className="dez-separator bg-primary"></div>
                      <ul>
                        <li><Link href="javascript:;" onClick={ () => this.goto('home') } >Home</Link></li>
                        { /* <li><Link href="javascript:;" onClick={ () => this.goto('about') } >About</Link></li> */ }
                        { /* <li><Link href="javascript:;" onClick={ () => this.goto('services') } >Services</Link></li> */ }
                        { /* <li><Link to={AppRouter.ourProcessLink()} >Our Process</Link></li> */ }
                        <li><Link to={AppRouter.ourWorkLink()} >Our Work</Link></li>
                        { /* <li><Link to={AppRouter.ourStackLink()} >Our Stack</Link></li> */ }
                        { /* <li><a href="javascript:;" onClick={ () => this.goto('technology') } >Technology</a></li> */ }
                        <li><Link to={AppRouter.careersPath} >Careers</Link></li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} md={6} sm={12} >
                    <div className="widget widget_meta" id="footerMeta" >
                      <h2 className="m-b15">&nbsp;</h2>
                      <div className="dez-separator bg-primary"></div>
                      <ul>
                        <li>
                          <Link to="/account">Account</Link>
                          <Link to="/sitemap.xml">Sitemap</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} sm={6} >
                <div className="widget">
                  <h2 className="m-b15">Contact Us</h2>
                  <div className="dez-separator bg-primary" />
                  <ul>
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-envelope"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">EMAIL</h6>
                        <p>victor@wasya.co</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-phone"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">PHONE</h6>
                        <p>+1 877 216 3525</p>
                      </div>
                    </li>
                  </ul>
                </div>                
              </Col>
            </Row>

          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-left "> 
                <span>Copyright &copy; 2017 &nbsp; 
                  { /* <img style={{ height: '30px' }} src={wasya_co} alt='wasya co' /> */ }
                  Wasya co
                </span> | <Link to={AppRouter.termsPath} >Terms of Service</Link>
                &nbsp;&nbsp;&nbsp; v2.0.13a
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer3
