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
        node: { short: "node",
                title: "Node.js",
                descr: [ "Node.js and Socket.js are our tools of choice for implementing real-time applications, event-driven applications, and microservices. " +
                         "We tend to use Node in combination with websockets. " ],
        },
        react: { short: "react",
                 title: "React.js",
                 descr: [ "We write frontend code using the React framework. It is the most popular front-end ecosystem currently available. ",
                          "Previously, we have worked a lot with Backbone and Angular.js. " ],
        },
        chef: { short: "chef",
                title: 'Chef',
                descr: [ "We wire up build/deploy pipelines using Chef. Simple deployments are done with standalone chef. For more complex cases we use server-client architecture., in which a change is propagated to each machine from a central repository. " ],
        },
        api: { short: "api",
               title: "API's",
               descr: [ "We are experts at building custom API's (ReSTful as well as event-driven). Documentation with Docs.io (formerly swagger). Test-driven. Deployed at scale. " ],
        },
        mvp: { short: "mvp",
               title: "MVP's",
               descr: [ "One of the most important steps in develoing consumer facing applications is market validation. We employ the lean methologody & iterative development to build versions of the product that effectively validate the market and the concept. " ],
        },
        uiux: { short: 'uiux',
                title: "UI/UX",
                descr: [ "Modern software tools are expected to be highly usable, to the degree of not requiring documentation. The user interface should be self-explanatory,  and the user experience intuitive. " ],
        },
        devops: { short: "devops",
                  title: "Devops",
                  descr: [ "The mythical creature of Devops does not lend itself to being caught easily. ",
                           "We script repetitive maintenance tasks, automate build/deploy pipelines, and enable efficient operation." ],
        },
      }
      /** 
       * automation, 
       * project management, 
       * business development,
       * rapid prototyping 
       */
    }
  }
  
  componentDidMount () {
  }
  
  render () {
    let ruby   = (<Service service={this.state.items.ruby} />)
    let node   = (<Service service={this.state.items.node} />)
    let react  = (<Service service={this.state.items.react} />)
    let chef   = (<Service service={this.state.items.chef} />)

    let api    = (<Service service={this.state.items.api} />)
    let mvp    = (<Service service={this.state.items.mvp} />)
    let uiux   = (<Service service={this.state.items.uiux} />)
    let devops = (<Service service={this.state.items.devops} />)

    let row1 = (
      <Row>
        <Col xs={12} md={12} lg={6} >
          <Row>
            <Col xs={12} md={6}>{ruby}</Col>
            <Col xs={12} md={6}>{node}</Col>
          </Row>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <Row>
            <Col xs={12} md={6}>{react}</Col>
            <Col xs={12} md={6}>{chef}</Col>
          </Row>
        </Col>
      </Row>)
    let row2 = (
      <Row>
        <Col xs={12} md={12} lg={6} >
          <Row>
            <Col xs={12} md={6}>{api}</Col>
            <Col xs={12} md={6}>{mvp}</Col>
          </Row>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <Row>
            <Col xs={12} md={6}>{uiux}</Col>
            <Col xs={12} md={6}>{devops}</Col>
          </Row>
        </Col>
      </Row>)
    
    return (
      <div id="servicesContent" ><Grid >
        <Row >
          <Col xs={10} xsOffset={1} >

            <Center>
              <h2 className="text-uppercase">Services</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>

            <p className="text-justify" >We offer two parallel services to our clients. We provide technical solutions to high-tech startups and mid-sized companies. We offer complete software solutions, support of existing solutions, data migrations, feature implementation, iterative development, and training. &nbsp;
              { /* <Button><Link to={AppRouter.techServicesPath}>Read more.</Link></Button> */ }
            </p>

            <p className="text-justify" >In this parallel, we perform business analysis, find critical issues & discovery across all areas of business (core value proposition, operations, sales, marketing, and finance) to propose quick wins and elimination of bottlenecks - how a manageable amount of effort can make the most impact on the business's bottom line. Additionally, we provide recommendations on sorporate culture, processes, and tools. High-impact business consulting to startups and companies in emerging markets. &nbsp;
              { /* <Button><Link to={AppRouter.bizServicesPath}>Read more.</Link></Button> */ }
            </p>

          </Col>
        </Row>
        <br /><br /><br />
        <Row>
          <Col xs={8} xsOffset={2} >

            <Center>
              <h3 id="technologyServices" className="text-uppercase">Software Development</h3>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>

            <p className="text-justify" >We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</p>
          </Col>
        </Row>
        <br /><br />
        { row1 }{ row2 }
      </Grid></div>
    )
  }
}

export default Services
