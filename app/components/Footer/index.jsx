import React from 'react'

import { Footer0, Footer1 } from './Footer'
import Footer2 from './Footer2'
import Footer3 from './Footer3'

/**
 * Footer0: just a line
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
        <Footer0 />
        <Footer2 />
        <Footer3 />
      </div>
    )
  }
}

export default Footer
