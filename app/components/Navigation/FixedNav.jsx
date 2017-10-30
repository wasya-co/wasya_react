import React     from 'react'
import PropTypes from 'prop-types'
import scrollToElement from 'scroll-to-element'

import logo3 from './images/logo-3.png'

import IndustrialHeader from './IndustrialHeader'
import Footer from '../Footer'

class FixedNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  scrollTop () {
    scrollToElement('body')
  }

  render () {
    console.log('+++ fixedNav:', this.props)

    return (
      <div>
        <IndustrialHeader fixed={true} />
        <div style={{ minHeight: '300px', marginTop: '80px', marginBottom: '400px', zIndex: 5, background: 'white' }}>
          { this.props.children }
        </div>
        <button className={`scroltop fa fa-chevron-up`} style={{ display:  this.state.showScrollTop === 'showScrollTop' ? 'block' : 'none' }} onClick={() => this.scrollTop() }></button>
        <Footer />
      </div>
    )
  }
}

FixedNav.propTypes = {
  children: PropTypes.node.isRequired
}

export default FixedNav
