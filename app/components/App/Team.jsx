import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import Center from '../Center'
import SectionHeader from './SectionHeader'

import victor  from './images/team/victor_500x600.jpg'
import oleg    from './images/team/oleg_500x600.jpg'
import kim     from './images/team/kim_500x600.jpg'
import brad    from './images/team/brad_500x600.jpg'
import steve   from './images/team/steve_500x600.jpg'
import bondar  from './images/team/bondar_500x600.jpg'

class TeamMember extends React.Component {
  render () {
    let description = []
    this.props.member.description.map((p, idx) => {
      description.push(<p key={idx} >{p}</p>)
    })

    let icons = []
    if (this.props.member.links) {
      this.props.member.links.map((icon, idx) => {
        icons.push(<li><a href={icon.link} className={`fa ${icon.icon}`}></a></li>)
      })
    }

    return (
      <div className="dez-box" >
        <div className="dez-media"> <a href="#"><img alt="" src={this.props.member.image} /></a> </div>
        <div className="dez-info p-a20 p-t40 border-1">
          <h4 className="dez-title m-tb0"><a href="#">{this.props.member.name}</a></h4>
          { icons.length > 0 ? <div className="bg-primary skew-content-box"><ul className="dez-social-icon">{ icons }</ul></div> : null }
          <p><em>{this.props.member.title}</em></p>
          { description }
        </div>
        <br /><br />
      </div>
    )
  }
}

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = { team: {
      victor: { image: victor,
                name: 'Victor Pudeyev',
                title: 'Principal Software Developer',
                description: [
                  "Victor Piousbox, the great russian bear rider, owner of wooden rubles, conqueror of rivers and dataflows, fearless thinker and tinker, has been with Operaevent since the beginning. He has been honestly producing the technical foundation on which the platform relies for a while now. Before then, he has rotated many software engineering roles in a variety of companies in the Bay Area and elsewhere. In his spare time, he likes to run around in the forest shooting guns in the manner of a sport exercise, ride his motorcycle into the sunset, and read technical documentation to better his skill in technology bending.",
                  "A full-stack engineer focusing on Ruby on Rails, Javascript, devops, and web application development for startups and agile teams."
                ],
                links: [
                  { icon: 'fa-file-pdf-o', title: 'Resume',   link: 'https://s3.amazonaws.com/ish-archive/2017/hunter/201712-VictorPudeyev-Resume.pdf' },
                  { icon: 'fa-github',     title: 'Github',   link: 'https://github.com/piousbox' },
                  { icon: 'fa-linkedin',   title: 'LinkedIn', link: 'https://www.linkedin.com/in/victor-pudeyev-ba9008107/' },
                ],
      },
      kim: { image: kim,
             name: 'Kim Sinton',
             title: 'Software Developer',
             description: [
               "Kim is a front-end engineer with a vast professional experience. He finds innovative strategic solutions to the growing pains of the team and contributes invaluably to our overall vision."
             ],
             links: [
               { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/kim-sinton-3a8848/', },
             ],
      },
      oleg: { image: oleg,
              name: 'Oleg Pudeyev',
              title: 'Principal Software Developer',
              description: [
                "Full stack engineer and tech lead with 12 years of Web development experience with a focus on Ruby on Rails applications. Experienced in hands-on development, design and architecture, technical leadership, mentoring, project management and planning.",
                "His objective is to write code that is beautiful, maintainable and delights customers when it is deployed."
              ],
              links: [
                { icon: 'fa-file-pdf-o',  title: 'Resume',   link: 'http://olegp.com/resume/oleg-pudeyev-resume.pdf' },
                { icon: 'fa-github',   title: 'Github',   link: 'https://github.com/p' },
                { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/olegpudeyev/' },
              ],
      },
      brad: { image: brad,
              name: 'Bradford Prothman-Roberts',
              title: 'Economic Advisor',
              description: [ 'Brad is a University of South Carolina graduate. He participates in studies of product feasibility, as well as import/export to Latin America.' ],
              links: [
                { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/broadfjord/' },
              ],
      },
      steve: {
        image: steve,
        name: 'Stephen Kim',
        title: 'Legal Advisor',
        description: [ 'Stephen is the legal advisor to the team.' ],
      },
      bondar: {
        image: bondar,
        name: 'Julia Bondar',
        title: 'Cultural Advisor',
        description: [ 'Julia is a cultural advisor to the team. Occasionally, she acts in the role of HR.' ],
      },
    } }
  }

  render () {    
    return (
      <Grid id="teamContent" >
        <Row>
          <Col xs={12}>
            <SectionHeader>Our Team</SectionHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0} ><TeamMember member={this.state.team.victor} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0} ><TeamMember member={this.state.team.oleg} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0} ><TeamMember member={this.state.team.kim} /></Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0} ><TeamMember member={this.state.team.brad} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0} ><TeamMember member={this.state.team.steve} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0} ><TeamMember member={this.state.team.bondar} /></Col>
        </Row>
      </Grid>
    )
  }
}

export default Team

