import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import scrollToElement from 'scroll-to-element'

import wasya_co from './images/wasya_co.png'
import world from './images/world4.jpg'

import WRouter from '../App/WasyaRouter'

class Footer3 extends React.Component {
  constructor(props) {
    super(props)
    this.goto = this.goto.bind(this)
  }

  goto (where) {
    scrollToElement(`#${where}Content`, { offset: -60 })
  }

  render () {
    var year = (new Date()).getFullYear();
    return (
      <footer className="site-footer trans-footer" style={{ zIndex: -1 }} >
        <div className="footer-top" style={{ background: `url(${world})`, 
                                             backgroundPosition: 'left center', 
                                             backgroundRepeat: 'repeat-x',
                                             height: '420px' }} >
          <div className="container saf-footer" >

            <Row>
              <Col xs={12} md={4} >
                <div className="widget widget_services">
                  <h2 className="m-b15">Quick Links</h2>
                  <div className="dez-separator bg-primary"></div>
                  <ul>
                    <li><Link href="javascript:;" onClick={ () => this.goto('home') } >Home</Link></li>
                    <li><Link href="javascript:;" onClick={ () => this.goto('about') } >About</Link></li>
                    <li><Link href="javascript:;" onClick={ () => this.goto('services') } >Services</Link></li>
                    { /* <li><a href="javascript:;" onClick={ () => this.goto('clients') } >Clients</a></li> */ }
                    <li><Link href="javascript:;" onClick={ () => this.goto('ourProcess') }>Process</Link></li>
                    { /* <li><a href="javascript:;" onClick={ () => this.goto('technology') } >Technology</a></li> */ }
                    { /* <li><Link to={WRouter.careersPath} >Careers</Link></li> */ }
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={4}>
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
              <Col xs={12} md={4}>
                <div className="widget widget_services">
                  <h2 className="m-b15">&nbsp;</h2>
                  <div className="dez-separator bg-primary"></div>
                  <ul>
                    <li>
                      <Link to="/account">Account</Link>
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
                <span>Copyright &copy; 2017 
                  <img style={{ height: '30px' }} src={wasya_co} alt='wasya co' />
                </span> | <Link to={WRouter.termsPath} >Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer3
