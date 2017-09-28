import React from 'react'
import PropTypes from 'prop-types'

import IndustrialHeader from './IndustrialHeader'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log('+++ Navigation:', this.props)

    return (
      <div>
        <IndustrialHeader location={this.props.location} />
        { this.props.children }
        <button className="scroltop fa fa-chevron-up" style={{ display: 'block' }}></button>
      </div>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
  // location: PropTypes.object.isRequred,
}

export default Navigation
