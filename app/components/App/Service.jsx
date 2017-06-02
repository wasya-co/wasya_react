
import React    from 'react'
import ReactDOM from 'react-dom'
import styles   from './_App.scss'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Waypoint from 'react-waypoint'

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
                         >
                           <div className={ styles.wrap } >
                             <img src={this.props.image} alt={this.props.title} style={{ maxWidth: '300px' }} />
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
      <span>
        <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave} />
        { this.state.item }
      </span>
    )
  }
}

export default Service
