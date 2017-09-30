import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import Center from '../Center'

import victor  from './images/team/victor_500x600.jpg'
import oleg    from './images/team/oleg_500x600.jpg'
import kim     from './images/team/kim_500x600.jpg'

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = { team: [
      { image: victor,
        name: 'Victor Pudeyev',
        title: 'Engineer',
        description: [
          "A full-stack engineer focusing on Ruby on Rails, Javascript, devops, and web application development for startups and agile teams."
        ],
      },
      { image: kim,
        name: 'Kim Sinton',
        title: 'Advisor',
        description: [
          "An advisor to our team in technology field."
        ],
      },
      { image: oleg,
        name: 'Oleg Pudeyev',
        title: 'Engineer',
        description: [
          "Full stack engineer and tech lead with 12 years of Web development experience with a focus on Ruby on Rails applications. Experienced in hands-on development, design and architecture, technical leadership, mentoring, project management and planning.",
          " My objective is to write code that is beautiful, maintainable and delights customers when it is deployed."
        ],
      },

    ] }
  }

  render () {
    let cols = []
    this.state.team.map((i, p) => {
      let descr = []
      i.description.map((j, k) => {
        descr.push(<p key={k} className="m-t10 m-b0 text-justify">{j}</p>)
      })
      cols.push(          
        <Col key={p} 
             xs={8} xsOffset={2} 
             sm={6} smOffset={0} 
             md={4} >
          <div className="dez-box">
            <div className="dez-media"> <a href="#"><img alt="" src={i.image} /></a> </div>
            <div className="dez-info p-a20 p-t40 border-1">
              <h4 className="dez-title m-tb0"><a href="#">{i.name}</a></h4>
              <div className="bg-primary skew-content-box">
                <ul className="dez-social-icon">
                  <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                  <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                  <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                  <li><a href="javascript:void(0);" className="fa fa-google-plus"></a></li>
                  <li><a href="javascript:void(0);" className="fa fa-pinterest-p"></a></li>
                  <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                </ul>
              </div>
              <span>{i.title}</span>
              { descr }
            </div>
          </div>
          <br /><br />
        </Col>
      )
    })
    
    return (
      <Grid id="teamContent" >
        <Row>
          <Col xs={12}>
            <Center>
              <h2 className="text-uppercase">Our Team</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>
          </Col>
          { cols }
        </Row>
      </Grid>
    )
  }
}

export default Team

