import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import victor from './images/victor3.jpg'
import oleg from './images/oleg.jpg'
import team_bg from './images/bg/seamless-damask.jpg'

class Team extends React.Component {
  render () {
    return (
      <div id='team'>
        <br /><br /><br />
        <Grid>
          <Row>
            <Col xs={12} xsOffset={0} sm={10} smOffset={1} >
              <h1 style={{ textAlign: 'center', backgroundImage: `url(${team_bg})`, color: 'white', padding: '.5em 0' }} ><span style={{ background: 'none' }} >Our Team</span></h1>
              <p>We are a distributed, agile development team. We operate in several major US cities: San Francisco Bay Area, Los Angeles, Chicago and New York City. We reach out to our network of professionals if a project requires some specific expertise that we don't possess in-house, or if the quantity of work demands so.</p>
              <p>Local teams work with local clients, so a client in Chicago will talk to our Chicago engineers.</p>
              <p>&nbsp;</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} lg={6}>
              <Panel>
                <img src={victor} style={{ textAlign: 'center' }} />
                <h3>Hi, I'm Victor</h3>
                <p>San Francisco Bay Area</p>
                <p>A full-stack engineer focusing on Ruby on Rails, Javascript, devops, and web application development for startups and agile teams.</p>
                <p>Resume: <a href="http://piousbox.github.io">http://piousbox.github.io</a></p>
                <p>Blog: <a href="http://blog.piousbox.com">http://blog.piousbox.com</a></p>
              </Panel>
            </Col>
            <Col xs={12} sm={6} lg={6}>
              <Panel>
                <img src={oleg} style={{ textAlign: 'center' }} />
                <h3>Hi, I'm Oleg.</h3>
                <p>New York City</p>
                <p>Full stack engineer and tech lead with 12 years of Web development experience with a focus on Ruby on Rails applications. Experienced in hands-on development, design and architecture, technical leadership, mentoring, project management and planning. My objective is to write code that is beautiful, maintainable and delights customers when it is deployed.</p>
                <p>Resume: <a href="http://olegp.com/resume/">http://olegp.com/resume/</a></p>
                <p>Blog: <a href="http://bsdpower.com/">http://bsdpower.com/</a></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Team

