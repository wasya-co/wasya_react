import React     from 'react'
import PropTypes from 'prop-types'

import logo3 from './images/logo-3.png'

import IndustrialHeader from './IndustrialHeader'

class FixedNav extends React.Component {
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

FixedNav.propTypes = {
  children: PropTypes.node.isRequired
}

export default FixedNav
