
import React from 'react'

class Service extends React.Component {
  render () {
    return (
      <div>
        <img src={this.props.image} alt={this.props.title} style={{ maxWidth: '300px' }} />
        <h3>{this.props.title}</h3>
        <p>{this.props.descr}</p>
      </div>
    )
  }
}

export default Service
