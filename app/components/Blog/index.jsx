import React from 'react'

import { 
  Grid, Row, Col,
} from 'react-bootstrap'

import blogImg from './images/bg/blog.jpg'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Wasya Blog</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              <br />
              <h1 className="m-b20 m-t0">Blog Title</h1>
              <div className="dez-separator bg-primary"></div>
              <div><em>blog metadata</em></div>
              <h2>blog subhead</h2>
              <p className="text-justify" >
                By accessing this web site, you are agreeing to be bound by these 
                web site Terms and Conditions of Use, all applicable laws and regulations, 
                and agree that you are responsible for compliance with any applicable local 
                laws. If you do not agree with any of these terms, you are prohibited from 
                using or accessing this site. The materials contained in this web site are 
                protected by applicable copyright and trade mark law.
              </p>
              <p className="text-justify" >
                By accessing this web site, you are agreeing to be bound by these 
                web site Terms and Conditions of Use, all applicable laws and regulations, 
                and agree that you are responsible for compliance with any applicable local 
                laws. If you do not agree with any of these terms, you are prohibited from 
                using or accessing this site. The materials contained in this web site are 
                protected by applicable copyright and trade mark law.
              </p>
              <br /><br /><br />

              <br />
              <h1 className="m-b20 m-t0">Blog Title</h1>
              <div className="dez-separator bg-primary"></div>
              <h2>blog subhead</h2>
              paragraphs of blog description
              <p className="text-justify" >
                By accessing this web site, you are agreeing to be bound by these 
                web site Terms and Conditions of Use, all applicable laws and regulations, 
                and agree that you are responsible for compliance with any applicable local 
                laws. If you do not agree with any of these terms, you are prohibited from 
                using or accessing this site. The materials contained in this web site are 
                protected by applicable copyright and trade mark law.
              </p>
              <p><em>blog metadata</em></p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default {
  BlogIndex,
}
