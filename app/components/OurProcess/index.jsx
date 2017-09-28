
import React from 'react'

import BackNavigation from '../MainNavigation/BackNavigation'
import OurProcess from './OurProcess'
import { Footer } from '../Footer'

class ProcessWrapped extends React.Component {
  render () {
    return (
      <div>
        <BackNavigation />
        <OurProcess />
        <Footer />
      </div>
    )
  }
}

export default {
  OurProcess,
  Process: OurProcess,
  ProcessWrapped
}
