
import React    from 'react'
import ReactDOM from 'react-dom'
import styles   from './_App.scss'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Waypoint from 'react-waypoint'

import { Panel } from 'react-bootstrap'

class Service extends React.Component {

  constructor(props) {
    super(props)

    this.state = { item: '' }

    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleEnter () {
    // console.log('handle enter')
    this.setState({ item:
                         <CSSTransitionGroup
                             transitionName={styles}
                             transitionAppear={true}
                             transitionAppearTimeout={1000}
                             transitionEnterTimeout={0}
                             transitionLeaveTimeout={0}
                         >
                           <div className={ styles.wrap } >
                             <img className={`fade-anim-pre`} src={this.props.image} alt={this.props.title} style={{ maxWidth: '100%' }} />
                             <h3>{this.props.title}</h3>??
                             <div className="dez-separator-outer "><div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div></div>
                             {this.props.descr.map(function(d, idx) {
                                return <p className="text-justify" key={idx} >{d}</p>
                              })}
                           </div>
                         </CSSTransitionGroup>
    })
  }

  handleLeave () {}

  render() {
    return (
      <Panel>
        <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave} />
        { this.state.item }
      </Panel>
    )
  }
}

export default Service
