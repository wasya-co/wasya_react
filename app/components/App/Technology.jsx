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
        ruby: { title: "Ruby on Rails",
                short: "ruby",
                descr: [ "Our framework for rapid prototyping and non-real-time applications is Ruby on Rails. " +
                         "We use it for constructing APIs, providing backend for websites, generating static websites, and as the tool for general scripting. " ],
        },
        angular_react: { short: "angular_react",
                title: "React or Angular",
                descr: [ "Node.js and Socket.js are our tools of choice for implementing real-time and event-driven applications. ",
                         "React and Angular are our top choices for front-end work." ],
        },
        api: { short: "api",
               title: "API's",
               descr: [ "We are experts at building custom API's (ReSTful as well as event-driven), well documented, test-driven, and deployed at scale. " ],
        },
        wp: { short: "wordpress",
               title: "Wordpress",
               descr: [ "We recommend Wordpress for landing pages and marketing pages. " ],
        },
        uiux: { short: 'uiux',
                title: "UI/UX",
                descr: [ "Modern software tools are expected to be highly usable, to the degree of not requiring documentation. The user interface should be self-explanatory,  and the user experience intuitive. " ],
        },
        mobile: { short: 'mobile',
          title: "Hybrid Mobile & <br />PWA's",
          descr: [ "We use Ionic Cordova for mobile development. ",
            "Ionic allows publishing to all platforms simultaneously: Android, iOS, and the Web." ],
        },
      }
    }
  }

  componentDidMount () {
  }
  
  render () {
    let ruby   = (<Service service={this.state.items.ruby} />)
    let angular_react   = (<Service service={this.state.items.angular_react} />)
    let api  = (<Service service={this.state.items.api} />)

    let wp    = (<Service service={this.state.items.wp} />)
    let uiux    = (<Service service={this.state.items.uiux} />)
    let mobile   = (<Service service={this.state.items.mobile} />)

    return (
      <div id="servicesContent" ><Grid >
        <Row >
          <Col xs={8} xsOffset={2} >

            <br /><br /><br />
            
            <Center>
              <br /><br /><br /><br />
              <div className="dez-separator-outer"><div className="dez-separator bg-primary style-skew"></div></div>
              <h2 className="text-uppercase">Preferred Technology Stacks</h2>
            </Center>

            { /* <h3 className="text-justify" >
              Although technology-agnistic, we largely work with interpreted languages in the cloud. 
              For backend, we prefer Ruby on Rails. For frontend, any JavaScript framework, such as React or Angular.
              For data science, undoubtedly Python.
              We primarily use AWS for hosting.
            </h3> */ }

          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col xs={12} md={4}>{ruby}</Col>
          <Col xs={12} md={4}>{angular_react}</Col>
          <Col xs={12} md={4}>{api}</Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>{wp}</Col>
          <Col xs={12} md={4}>{uiux}</Col>
          <Col xs={12} md={4}>{mobile}</Col>
        </Row>
      </Grid></div>
    )
  }
}

export default Services
