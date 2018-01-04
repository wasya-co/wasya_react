import React     from 'react'
import {
  Router, Route, hashHistory, browserHistory,
} from 'react-router'
import { connect } from 'react-redux'

import Account    from './Account'
import { BlogIndex } from '../Blog'
import Home       from './Home'
import { FixedNav, UnfixedNav, Navigation } from '../Navigation'
import Products   from './Products'
import Clients    from './Clients'
import OurProcess from './OurProcess'
import OurStack   from '../Stack/Stack'
import OurWork    from './OurWork'
import { BizServices, TechServices } from '../Services'
import AppRouter from './AppRouter'
import { Careers, DesignerCareer } from '../Careers'
import { AbstractPage, TermsPage } from '../Pages'

const routes = [
  { path: AppRouter.rootPath,
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/our-process',  component: OurProcess },
      { path: '/products',     component: Products },
      { path: '/clients',      component: Clients },
      { path: '/our-stack',    component: OurStack },
    ],
  },
  { path: AppRouter.servicesPath,
    component: FixedNav,
    indexRoute: { component: Home },
    childRoutes: [
      { path: AppRouter.bizServicesPath,  component: BizServices },
      { path: AppRouter.techServicesPath, component: TechServices },
      { path: '/account',               component: Account },
    ],
  },
  /* { path: AppRouter.careersPath,
    component: UnfixedNav,
    indexRoute: { component: Careers },
    childRoutes: [
      { path: AppRouter.designerCareersPath, component: DesignerCareer },
    ],
  }, */
  { path: AppRouter.pagesPath,
    component: Navigation,
    fixed: 'unfixed',
    indexRoute: { component: AbstractPage },
    childRoutes: [
      { path: AppRouter.termsPath, component: TermsPage },
      { path: '/our-work',     component: OurWork },
      { path: '/blog',         component: BlogIndex },
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

