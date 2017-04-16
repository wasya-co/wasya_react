import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import PropTypes from 'prop-types'

import 'whatwg-fetch'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import AppActions from '../../actions/AppActions'
import ItemsStore from '../../stores/ItemsStore'
import Body       from '../Body/Body'
import Team       from './Team'
import Home       from './Home'
import { Footer0, Footer1, Footer2, Footer3 } from '../Footer/Footer'
import ContactUs  from '../ContactUs/ContactUs'
import OurProcess from '../OurProcess/OurProcess'
import Services   from './Services'
import About      from './About'
import MainNavigation from '../MainNavigation/MainNavigation'

function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${bg})` }} >
        <div className={styles.app}  >
          <MainNavigation />
        </div>
        <About />

        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/team' component={Team} />
        </Router>

        <Services />
        <OurProcess />
        <ContactUs />
        <Footer0 />
        <Footer1 />
        <Footer2 />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
