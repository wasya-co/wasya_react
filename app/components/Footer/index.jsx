import React from 'react'

import Footer3 from './Footer3'

/**
 * Footer1: social, subscribe
 * Footer2: world, flags, cities
 * footer3: Industrial fixed
 */

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Footer3 />
      </div>
    )
  }
}

export default Footer
