import React     from 'react'
import {
  Router, Route, hashHistory, browserHistory,
} from 'react-router'
import { Provider, connect } from 'react-redux'

import Home       from './Home'
import FixedNav   from './FixedNav'
import Navigation from './Navigation'
import OurProcess from './OurProcess'
import Products   from './Products'
import Clients    from './Clients'
import OurStack   from '../Stack/Stack'
import TechServices from './TechServices'
import WRouter from './WasyaRouter'

import store      from '../../stores'
const routes = [
  { path: '/',
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/our-process',  component: OurProcess },
      { path: '/products',     component: Products },
      { path: '/clients',      component: Clients },
      { path: '/our-stack',    component: OurStack },
    ],
  },
  { path: '/f',
    component: FixedNav,
    indexRoute: { component: Home },
    childRoutes: [
      { path: WRouter.techServicesPath, component: TechServices },
    ],
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

App.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(App)

