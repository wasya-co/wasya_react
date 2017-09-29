import React from 'react'
class Footer3 extends React.Component {
  render () {
    var year = (new Date()).getFullYear();
    return (
      <footer className="site-footer trans-footer" style={{ display: 'block', height: '843px' }}>
        <div className="footer-top">
          <div className="container p-t20">
            <div className="row">
              <div className="col-md-12 text-center m-b30">
                <div className="section-head text-center text-white">
                  <h2 className="h2"><span className="text-white">Subscribe To Our Newsletter</span></h2>
                  <div className="dez-separator-outer ">
                    <div className="dez-separator bg-primary style-liner"></div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                </div>
                <form className="newsletter m-b30" method="post" role="search">
                  <div className="input-group">
                    <input type="text" placeholder="Write your text" className="form-control" name="text" />
                    <span className="input-group-btn">
                      <button className="site-button m-l10 radius-xl" type="submit">Subscribe</button>
                    </span>
                  </div>
                </form>
                <ul className="list-inline footer-social">
                  <li><a className="fa fa-facebook bg-primary" href="javascript:void(0);"></a></li>
                  <li><a className="fa fa-twitter bg-primary" href="javascript:void(0);"></a></li>
                  <li><a className="fa fa-linkedin bg-primary" href="javascript:void(0);"></a></li>
                  <li><a className="fa fa-google-plus bg-primary" href="javascript:void(0);"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container saf-footer">
            <div className="row">
              <div className="col-md-3 col-sm-6 footer-col-4">
                <div className="widget widget_about">
                  <h2 className="m-b15">About Us </h2>
                  <div className="dez-separator bg-primary"></div>
                  <p><strong>Industry</strong>  Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus.  cons ectetur elit. Vestibulum nec odios Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 footer-col-4">
                <div className="widget  widget_gallery">
                  <h2 className="m-b15">Gallery</h2>
                  <div className="dez-separator bg-primary"></div>
                  <ul>
                    <li className="img-effect2"> <a href="javascript:void(0);"><img alt="" src="images/gallery/pic1.jpg" /></a> </li>
                    <li className="img-effect2"> <a href="javascript:void(0);"><img alt="" src="images/gallery/pic2.jpg" /></a> </li>
                    <li className="img-effect2"> <a href="javascript:void(0);"><img alt="" src="images/gallery/pic3.jpg" /></a> </li>
                    <li className="img-effect2"> <a href="javascript:void(0);"><img alt="" src="images/gallery/pic4.jpg" /></a> </li>
                    <li className="img-effect2"> <a href="javascript:void(0);"><img alt="" src="images/gallery/pic5.jpg" /></a> </li>
                    <li className="img-effect2"> <a href="javascript:void(0);"><img alt="" src="images/gallery/pic6.jpg" /></a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 footer-col-4">
                <div className="widget widget_services">
                  <h2 className="m-b15">Our services</h2>
                  <div className="dez-separator bg-primary"></div>
                  <ul>
                    <li><a href="index.html">Home </a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="about-1.html">About Us</a></li>
                    <li><a href="services-2.html">Our Services</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 footer-col-4">
                <div className="widget widget_getintuch">
                  <h2 className="m-b15">Contact us</h2>
                  <div className="dez-separator bg-primary"></div>
                  <ul>
                    <li><i className="fa fa-map-marker"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                    <li><i className="fa fa-phone"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 text-left "> <span>Copyright &copy; 2017 DexignZone</span> </div>
              <div className="col-md-4 col-sm-4 text-center"> 
                <span> Design With <i className="fa fa-heart text-primary heart"></i> By DexignZone </span> 
              </div>
              <div className="col-md-4 text-right "> 
                <a href="about-2.html"> About</a> 
                <a href="help.html"> Help Desk</a> 
                <a href="privacy-policy.html"> Privacy Policy</a> 
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer3
