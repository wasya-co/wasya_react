import React from 'react'
import PropTypes from 'prop-types'

import scrollToElement from 'scroll-to-element'

import IndustrialHeader from './IndustrialHeader'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.scrollTop = this.scrollTop.bind(this)
  }

  scrollTop () {
    scrollToElement('body')
  }

  handleScroll (e) {
    if (window.scrollY > 260) {
      this.setState({ showScrollTop: 'showScrollTop' })
    } else {
      this.setState({ showScrollTop: '' })
    }
  }

  componentDidMount () {
    if (!this.props.fixed) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount () {
    if (!this.props.fixed) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  render () {
    // console.log('+++ Navigation:', this.props)

    return (
      <div>
        <IndustrialHeader location={this.props.location} />
        { this.props.children }
        <button className={`scroltop fa fa-chevron-up ${this.state.showScrollTop}`} onClick={() => this.scrollTop() }></button>
      </div>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
  // location: PropTypes.object.isRequred,
}

export default Navigation
