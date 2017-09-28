import React from 'react'
import PropTypes from 'prop-types'

import IndustrialHeader from './IndustrialHeader'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <IndustrialHeader />
        { this.props.children }
      </div>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navigation
