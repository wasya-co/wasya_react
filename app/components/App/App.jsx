import React     from 'react'
import {
  Router, Route, hashHistory, browserHistory,
} from 'react-router'
import { connect } from 'react-redux'

import Home       from './Home'
import { FixedNav, UnfixedNav, Navigation } from '../Navigation'
import OurProcess from './OurProcess'
import Products   from './Products'
import Clients    from './Clients'
import OurStack   from '../Stack/Stack'
import { BizServices, TechServices } from '../Services'
import WRouter from './WasyaRouter'
import { Careers, DesignerCareer } from '../Careers'
import { AbstractPage, TermsPage } from '../Pages'

const routes = [
  { path: WRouter.rootPath,
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/our-process',  component: OurProcess },
      { path: '/products',     component: Products },
      { path: '/clients',      component: Clients },
      { path: '/our-stack',    component: OurStack },
    ],
  },
  { path: WRouter.servicesPath,
    component: FixedNav,
    indexRoute: { component: Home },
    childRoutes: [
      { path: WRouter.bizServicesPath,  component: BizServices },
      { path: WRouter.techServicesPath, component: TechServices },
    ],
  },
  /* { path: WRouter.careersPath,
    component: UnfixedNav,
    indexRoute: { component: Careers },
    childRoutes: [
      { path: WRouter.designerCareersPath, component: DesignerCareer },
    ],
  }, */
  { path: WRouter.pagesPath,
    component: UnfixedNav,
    indexRoute: { component: AbstractPage },
    childRoutes: [
      { path: WRouter.termsPath, component: TermsPage },
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
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0) } />
    );
  }
}

App.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(App)

