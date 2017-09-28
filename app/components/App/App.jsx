import React     from 'react'
import PropTypes from 'prop-types'
import ReactDOM  from 'react-dom'
import {
  Router, Route, hashHistory, browserHistory 
} from 'react-router'
import { connect } from 'react-redux'

// import 'whatwg-fetch'

import Home       from './Home'
import Navigation from './Navigation'
import OurProcess from './OurProcess'
import Products   from './Products'
import Clients    from './Clients'
import OurStack   from '../Stack/Stack'

const routes = [
  { path: '/',
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/our-process',  component: OurProcess },
      { path: '/products',     component: Products },
      { path: '/clients',      component: Clients },
      { path: '/our-stack',    component: OurStack },
    ]
  }
]

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

// App.propTypes = {
//  children: PropTypes.node.isRequired
//}

function mapStateToProps(state, ownProps) {
  return {
  }
}

export default connect(mapStateToProps)(App)

