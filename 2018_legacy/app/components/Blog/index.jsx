/*
 * Blog component
 */

import React from 'react'
import { Link } from 'react-router'

import config from 'config'
import AppRouter from '../App/AppRouter'

import { 
  Grid, Row, Col,
} from 'react-bootstrap'

import blogImg from './images/bg/blog.jpg'
import w       from './images/w.jpg'

let Items = {
  'case-study-creek': {
    name: 'Case Study: an Invoice Management System for Creek Enterprise',
    slug: 'case-study-creek',
    created_at: '2018-06-30',
    subhead: '', 
    photo: w,
    description: (
      <div>
        <p>Creek Enterprise is in construction space: they manage multiple construction projects, and each such project can have hundreds of subcontractors submitting estimates and invoices.</p>
        <p>To manage invoices and the work done by the subcontractors, Creek uses "Subcontractor Management Tool", or SMT. The previous version of it was written 8 years ago, and while robust and reliable, it was getting obsolete and in need of a redesign.</p>
        <p>My team was approached to do the redesign and rewrite of the existing tool. We chose a different stack - went from Python and SQL to Ruby and MongoDB. We chose to implement the frontend in jQuery, rather than React for this client. We deployed on CenturyLink cloud using lean custom deploy scripts. AWS S3 was used in this stack for object storage.</p>
        <p>The project took several months and was completed successfully. It's in maintenance mode, and my team does rolling feature augmentation and bug fixes.</p>
        <p>Since the SMT is performing well in the company, there are plans to license it out to Creek's peers and companies that need a similar-functioning tool. The architecture of the tool is modular enough that it will make licensing, and even on-premise installation (for audit and security reasons) a breeze.</p>
    </div>),
  },
  'sturfee-build-pipeline': {
    name: 'Sturfee Build Pipeline',
    slug: 'sturfee-build-pipeline',
    created_at: '2018-07-01',
    subhead: '',
    photo: w,
    description: (
      <div>
        <p>Overview</p>
        <p>I consulted for Sturfee in 2016.</p>
        <p>Sturfee is an engineering-heavy small startup team developing products in AI space. As data scientists and scientists, the team was is knowledgable about AI and ML, however they lack experience in software development, and knowledge of best practices. Sturfee reached out to me to setup process for building their software, managing environments, codebases and versions, and implement an agile development cycle.</p>
        <p>The Problem</p>
        <ul>
          <li>Multiple environments, multiple versions, multiple branches of multiple codebases</li>
          <li>Microservice architecture necessitates a higher degree of infrastructure management than monolithic applications</li>
          <li>Junior team members not following naming conventions</li>
          <li>Hard-coded environmental variable in the codebase</li>
        </ul>
        <p>The Stack</p>
        <ul>
          <li>Angular Frontend</li>
          <li>Go microservices</li>
          <li>Node microservices</li>
          <li>Python microservices</li>
          <li>All hosted on AWS</li>
        </ul>
        <p>The Solution</p>
        <p>It was critical to separate configuration from the codebase. I saw that some variables, such as database names and port numbers, were actually hard-coded into production code, sometimes with if-then statements that got clumsy and unmaintainable extremely rapidly. I modularized the configuration, moved it to separate data containers (json files files),&nbsp; removed these files from code repositories, and started managing these config files with infra orchestration tool (chef).</p>
        <p>I introduced naming conventions and semantic versioning. Version number of every codebase became semantic and readable: just by looking at the branch name (correlated to the version), one is able to see what branch is the latest, and belongs to which proposed release. My methodology is losely based on git flow and semver, however see &lt;this-article&gt; for the complete description of git versioning that I recommend.</p>
        <ul>
          <li>Opscode Chef</li>
          <li>Jenkins</li>
          <li>Semantic Versioning</li>
          <li>Custom build scripts that allow push-button, repeatable &amp; accountable deploy process</li>
          <li>Branching strategy that involved a stable master branch and rolling release branches, plus feature braches that get merged into release branches (that are tracked by the master branch, which is presumably the latest stable).</li>
        </ul>
        <p>See the <a href="https://s3.amazonaws.com/ish-archive/2016/201603Q1_sturfee_build_pipeline.pdf">Sturfee Build Pipeline whitepaper</a> for additional information on this project.</p>
    </div>
    ),
  },
}

class CaseStudies extends React.Component {
  constructor(props) {
    super(props)

    let items = []
    Object.keys(Items).forEach( k => {
      items.push(Items[k])
    })

    this.state= { items, }
  }

  componentWillMount () {
    /* fetch(`${config.apiUrl}/api/tags/view/case-studies.json`, {}).then(r => r.json()).then(_data => {
      console.log('+++ case studies data:', _data)

      this.setState({ items: _data.reports })
    }).catch(_e => {
      console.log('+++ cannot fetch case studies::', _e)
    }) */
  }

  render () {
    let items = []
    this.state.items.map((item, idx) => {
      items.push(
        <div key={idx} >
          <br />
          <Link to={AppRouter.blogItemLink(item)}>
            <div style={{ float: 'left', margin: '0 1rem 1rem 0', width: '100px', height: '100px',
            backgroundImage: `url(${w})` }} />
          </Link>
          <h1 className="m-b20 m-t0"><Link to={AppRouter.blogItemLink(item)}>{ item.name }</Link></h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <div style={{ clear: 'both', height: '3rem' }} />
        </div>
      )
    })

    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Case Studies</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              { items }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state= { items: [ 
      { name: 'Loading...' },
    ] }
  }

  componentWillMount () {
    fetch(`${config.apiUrl}/api/sites/view/wasya.co/reports.json`, {}).then(r => r.json()).then(_data => {
      // console.log('+++ data:', _data)
      this.setState({ items: _data })
    }).catch(_e => {
      console.log('+++ problem:', _e)
    })
  }

  render () {
    let items = []
    // These are entire entries. I want only titles. _vp_ 20180417
    /* this.state.items.map((item, idx) => {
      items.push(
        <div>
          <br />
          <h1 className="m-b20 m-t0">{ item.name }</h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <h2>{ item.subhead }</h2>
          <div dangerouslySetInnerHTML={{__html: item.description }} />
          <br /><br /><br />
        </div>)
    }) */
    this.state.items.map((item, idx) => {
      items.push(
        <div key={idx} >
          <br />
          <h1 className="m-b20 m-t0"><Link to={AppRouter.blogItemLink(item)}>{ item.name }</Link></h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <br /><br /><br />
        </div>
      )
    })

    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Articles</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              { items }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

class BlogItem extends React.Component {
  constructor(props) {
    super(props)
    this.state= { item: { name: 'Loading...', photo: {} } }
  }

  componentWillMount () {
    // console.log('+++ BlogItem will mount:', this.props)

    if (Items[this.props.params.reportname]) {
      this.setState({ item: Items[this.props.params.reportname] })
    } else {
      fetch(`${config.apiUrl}/api/reports/view/${this.props.params.reportname}.json`, {}).then(r => r.json()).then(_data => {
        this.setState({ item: _data.report })
      }).catch(_e => {
        console.log('+++ cannot fetch articles:', _e)
      })
    }
  }

  render () {
    // console.log('+++ +++ BlogItem:', this.props, this.state)
    let item = this.state.item
    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">{item.name}</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              <br />
              <h1 className="m-b20 m-t0">{ item.name }</h1>
              <div className="dez-separator bg-primary"></div>
              <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
              <img style={{ padding: '1rem' }} src={item.photo && item.photo.large_url} alt='' />
              <h2>{ item.subhead }</h2>
              { typeof item.description === 'string' ? <div dangerouslySetInnerHTML={{__html: item.description }} /> : item.description }
              <br /><br /><br />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default {
  CaseStudies,

  BlogIndex,
  BlogItem,
}
