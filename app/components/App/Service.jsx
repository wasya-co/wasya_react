
import React    from 'react'
import ReactDOM from 'react-dom'
import styles   from './_App.scss'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Waypoint from 'react-waypoint'

import { Panel } from 'react-bootstrap'

class Service extends React.Component {

  constructor(props) {
    super(props)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.state = { item: '' }
  }

  handleEnter() {
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
                             <img src={this.props.image} alt={this.props.title} style={{ maxWidth: '100%' }} />
                             <h3>{this.props.title}</h3>
                             {this.props.descr.map(function(d, idx) {
                                return <p key={idx} >{d}</p>
                              })}
                           </div>
                         </CSSTransitionGroup>
    })
  }

  handleLeave() {}

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
