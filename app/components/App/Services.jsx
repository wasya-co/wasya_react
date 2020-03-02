import React    from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Grid, Row, Col,
  Button,
} from 'react-bootstrap'
import scrollToElement from 'scroll-to-element'

import Service from './Service'
import Center  from '../Center'
import AppRouter from '../App/AppRouter'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {
        swd: { title: "Full-cycle SWD",
          short: "swd",
          descr: [ "The complexity of our solutions ranges from landing pages to trading bots, depending on requirements. ",
            "See our Preferred Technology Stacks. " ],
        },
        marketing: { short: "marketing",
          title: "Marketing",
          descr: [ "Generating leads and business opportunities is as important as delivering a product or service. ", 
            "We offer the lightest solution to improve IRR and the bottom line. "
          ],
        },
        automation: { short: "automation",
          title: "Automation",
          descr: [ "There are optimization opportunities that improve the bottom line without requiring a full-blown woftware system. ", 
            "We work closely with strategy and business to identify and implement such opportunities. " ],
        },
        bizdev: { short: "bizdev",
          title: 'Business Development',
          descr: [ "Fundamentally, technology serves business. ",
            "We work closely with the departments of the client organization to keep technology well-aligned with the overall strategy. "
          ],
        },
      }
    }
  }

  componentDidMount () {
  }
  
  render () {
    let swd        = (<Service service={this.state.items.swd} />)
    let marketing  = (<Service service={this.state.items.marketing} />)
    let automation = (<Service service={this.state.items.automation} />)
    let bizdev     = (<Service service={this.state.items.bizdev} />)

    return (
      <div id="servicesContent" ><Grid >
        <Row >
          <Col xs={10} xsOffset={1} >

            <Center>
              <div className="dez-separator-outer"><div className="dez-separator bg-primary style-skew"></div></div>
              <h2 className="text-uppercase">Services</h2>
              <br /><br />
            </Center>

          </Col>
        </Row>
        
        <Row>
          <Col xs={12} md={6}>{swd}</Col>
          <Col xs={12} md={6}>{marketing}</Col>
          <Col xs={12} md={6}>{automation}</Col>
          <Col xs={12} md={6}>{bizdev}</Col>
        </Row>

      </Grid></div>
    )
  }
}

export default Services
