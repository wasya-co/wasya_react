import React from 'react'

import { Row, Col, Grid } from 'react-bootstrap'

import Center from '../Center'

import handshake from './images/handshake.jpg'
// import world     from './images/background/world.jpg'
// import world2 from './images/background/world2.png'
import world3 from './images/background/world3.jpg'
const world = world3

class ContactUs2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="page-content" id="contactUsContent">
        
        <div className="dez-bnr-inr overlay-black-middle bg-img-fix" style={{ backgroundImage: `url(${handshake})` }}>
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Contact Us</h1>
              <p className="text-white">We are commited to replying to your request within 90 minutes</p>  
            </div>
          </div>
        </div>
        
        <div className="content-area">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <h4>Contact form</h4>
                <div className="dzFormMsg"></div>
                <div className="p-a30 bg-white clearfix m-b30">
                  <form method="post" className="dzForm" id="contactForm" action="/contact_us.php" >
                    <input type="hidden" value="Contact" name="dzToDo" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon"><i className="fa fa-user"></i></span>
                              <input name="name" type="text" required="" className="form-control" placeholder="Your Name" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                              <input name="email" type="email" className="form-control" required="" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                What is 7 + 5?
                              </span>
                              <input name="verification" type="number" className="form-control" required="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                              <input name="phone" type="text" className="form-control" placeholder="Phone" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon v-align-t"><i className="fa fa-pencil"></i></span>
                              <textarea name="descr" rows="4" className="form-control" required="" placeholder="Your Message"></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button name="submit" type="submit" value="Submit" className="site-button"> <span>Submit</span> </button>
                        </div>
                      </div>
                  </form>
                </div>
              </div>
              
              <div className="col-md-3">
                <h4>Contact Info</h4>
                <div className="p-a30 bg-white m-b30">
                  <ul className="no-margin">
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
                    {/*<li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-map-marker"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">Mailing Address</h6>
                        <p>Wasya co <br />
                          P O Box 2119<br />
                          San Jose, CA 95109</p>
                      </div>
                    </li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-img-fix" style={{ backgroundImage: `url(${world})` }} >
            <div className="content-area">
              <div className="container">
                <div class="row">
                  <div className="col-sm-12">
                    <h4>Our Location</h4>
                  </div>
                  <div className="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10671.067348341838!2d-121.89124455979633!3d37.33002320510599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1505428038490" width="100%" height="450" frameBorder="0" style={{ border: '0' }} allowFullScreen></iframe>
                  </div>
                  <div className="col-md-6" >
                    <ul className="no-margin" style={{ paddingTop: '1em' }} >
                      <li className="icon-bx-wraper left m-b30">
                        <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-map-marker"></i></a> </div>
                        <div className="icon-content">
                          <h6 className="text-uppercase m-b0 dez-tilte">Mailing Address</h6>
                          <p style={{ background: 'white', padding: '1em 1em 1em 1em' }} >Wasya co <br />
                            P O Box 2119<br />
                            San Jose, CA 95109</p>
                        </div>
                      </li>
                      <li className="icon-bx-wraper left m-b30">
                        <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-map-marker"></i></a> </div>
                        <div className="icon-content">
                          <h6 className="text-uppercase m-b0 dez-tilte">We Do Business In</h6>
                          <br /><br />
                          <p><Center><b>
                            San Francisco &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Los Angeles &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; San Diego 
                            <br />Chicago &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; New York &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Boston &nbsp;&nbsp;&nbsp;</b></Center></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs2
