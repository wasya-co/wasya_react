import React    from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import AppActions from '../../actions/AppActions'
import ItemsStore from '../../stores/ItemsStore'
import Body       from '../Body/Body'
import { Footer0, Footer1, Footer2, Footer3 } from '../Footer/Footer'
import ContactUs  from '../ContactUs/ContactUs'
import OurProcess from '../OurProcess/OurProcess'
import Services   from './Services'
import About      from './About'
import MainNavigation from '../MainNavigation/MainNavigation'

import { Router, Route, hashHistory } from 'react-router'

function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

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
    /* return (
      <div className={styles.app}>
        <Body items={this.state.items} />
        <Footer0 />
        <Footer1 />
        <Footer2 />
      </div>
    ); */
    return (
      <div style={{ backgroundImage: `url(${bg})` }} >
        <div className={styles.app}  >
          <MainNavigation />
        </div>
        <About />
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
