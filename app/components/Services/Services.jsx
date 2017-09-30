import React    from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Grid, Row, Col,
         Button,
} from 'react-bootstrap'
import scrollToElement from 'scroll-to-element'

import styles from './_App.scss'

import img_ror   from '../../images/400x200/ror.jpg'
import img_node  from '../../images/400x200/nodejs.jpg'
import img_react from '../../images/400x200/react.jpg'
import img_chef  from '../Services/images/chef_400x200.png'

import img_automation from '../Services/images/automation.jpg'

import img_angular   from '../../images/400x200/angular.jpg'
import img_wordpress from '../../images/400x200/wordpress.jpg'
import img_php       from '../../images/400x200/php.jpg'

import img_uiux   from '../../images/400x200/uiux.jpg'
import img_mvp    from '../../images/400x200/mvp_prototyping.jpg'
import img_devops from '../../images/400x200/devops.jpg'

import Service from './Service'
import Center  from '../Center'
import WRouter from './WasyaRouter'


/*
 * RoR
 * node.js
 * react.js
 * chef

 * api
 * mvp
 * UI/UX
 * devops

 * automation
 * project management
 * business development
 * rapid prototyping
 */

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: [
        [
          { title: "Ruby on Rails",
            short: "ruby",
            descr: [ "Our framework for rapid prototyping and non-real-time applications is Ruby on Rails. " +
                     "We use it for constructing APIs, providing backend for websites, generating static websites, and as the tool for general scripting. " ],
          },
          { short: "node",
            title: "Node.js",
            descr: [ "Node.js and Socket.js are our tools of choice for implementing real-time applications, event-driven applications, and microservices. " +
                     "We tend to use Node in combination with websockets. " ],
          },
          { short: "react",
            title: "React.js",
            descr: [ "We write frontend code using the React framework. It is the most popular front-end ecosystem currently available. ",
                     "Previously, we have worked a lot with Backbone and Angular.js. " ],
          },
          { short: "chef",
            title: 'Chef & Virtualization',
            descr: [ "We wire up systems that automate build pipelines using Chef. Simple deployments can be done with chef-zero or standalone chef. For more complex cases, we recommend using the server-client architecture in which a change is propagated to each machine from a central repository. "
            ],
          },
        ], [
          { short: "api",
            title: "API's",
            descr: [ "We are experts at building custom API's (ReSTful as well as event-driven). Documentation with Docs.io (formerly swagger). Test-driven. Deployed at scale. " ],
          },
          { short: "mvp",
            title: "MVP's",
            descr: [ "One of the most important steps in develoing consumer-facing applications is market validation. We employ the lean methologody & iterative development to build versions of the product that effectively validate the market and the concept. " ],
          },
          { short: 'uiux',
            title: "UI/UX",
            desc: [ "Modern software tools are expected to be highly usable, to the degree of not requiring documentation. The user interface should be self-explanatory,  and the user experience intuitive. " ],
          },
          { short: "devops",
            title: "Devops",
            desc: [ "The mythical creature of Devops does not lend itself to being caught easily. ",
                    "As the assembly line revolutionizied manufacture, food, and every other industry, as automation continues to bring about the change in the world, the change that we call Progress and Modernity. ",
                    "Capital creates value faster than labor does. It is the ability of the worker to control (and make use of) incrementally larger shares of capital that brings about efficiency, productivity, and therefor wealth to the society. Automation (and therefore AI) are right on the frontier of this effort. Being able to complete tasks without use of labor, and usitilizing better and more efficient tools to complete the tasks, are the mechanisms by which the society increases its wealth. "
            ],
          },
        ],
    }
  }
        // trash, let's not be repetitive
        /* , [
          { short: "descr: [ 'this is api' ],
            image: img_mvp,
            title: "API's", },
          { descr: [ "We specialize in MVP prototyping. We will iteratively develop an application for you that will prove (or disprove) your " +
                     "business concept in minimal time and budget. Once you have that, you can decide to pivot or continue iterating on that idea. " +
                     "We do this initial critical step for you." ],
            image: img_mvp,
            title: 'MVP Prototyping' },
          { descr: [ "We offer iterative work on UI/UX to match your spec. You have an idea, you need visuals for it, talk to us and we'll " +
                     "build the visuals for you." ],
            image: img_uiux,
            title: "UI/UX Prototyping" },
          { descr: ["We provide maintainable deployment/automation schemes that make it easy for you to keep the codebase live.",
                    "Additionally, we solve specific questions regarding performance, resilience, and scaling of applications."],
            image: img_devops,
            title: 'Devops' },
        ],
      ],
    }
  }*/
  
  componentDidMount () {
  }

  render () {
    let renderRows = []
    this.state.rows.map((item, idx) => {
      renderRows.push(<Col xs={12} sm={6} lg={3} ><Service image={item.image} title={item.title} descr={item.descr} /></Col>)
    })

    return (
      <div className={styles.services} id="servicesContent" ><Grid >
        <Row >
          <Col xs={10} xsOffset={1} >

            <Center>
              <h2 className="text-uppercase">Services</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>

            <p className="text-justify" >We offer two parallel services to our clients. We provide technical solutions to high-tech startups and mid-sized companies. We offer complete software solutions, support of existing solutions, data migrations, feature implementation, iterative development, and training. 
              <Button><Link to={WRouter.techServicesPath}>Read more.</Link></Button>
              { /* <Link to={WRouter.techServicesPath}>Here</Link> */ }
            </p>

            <p className="text-justify" >In this parallel, we perform business analysis, find critical issues & discovery across all areas of business (core value proposition, operations, sales, marketing, and finance) to propose quick wins and elimination of bottlenecks - how a manageable amount of effort can make the most impact on the business's bottom line. Additionally, we provide recommendations on sorporate culture, processes, and tools. High-impact business consulting to startups and companies in emerging markets. <Button><Link to={WRouter.bizServicesPath}>Read more.</Link></Button></p>

          </Col>
        </Row>
        <br /><br /><br />
        <Row>
          <Col xs={8} xsOffset={2} >

            <Center>
              <h3 id="technologyServices" className="text-uppercase">Technology Services</h3>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>

            <p className="text-justify" >We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</p>
          </Col>
        </Row>
        <br /><br />
        <Row >
          { renderRows }
        </Row>
      </Grid></div>
    )
  }
}

export default Services
