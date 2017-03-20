import styles from './_App.scss';

// import bg from './images/bg2.png'
import bg from './images/noisy_grid.png'

import React from 'react'

import AppActions from '../../actions/AppActions'
import ItemsStore from '../../stores/ItemsStore'
import Body from '../Body/Body'
import ContactUs from '../ContactUs/ContactUs'
import OurProcess from '../OurProcess/OurProcess'
import { Footer0, Footer1, Footer2 } from '../Footer/Footer'
import MainNavigation from '../MainNavigation/MainNavigation'

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
    return (
      <div>
        <div className={styles.app} style={{ backgroundImage: `url(${bg})` }} >
          <MainNavigation />
          <Body items={this.state.items} />
        </div>
        <OurProcess />
        <ContactUs />
        <Footer0 />
        <Footer1 />
        <Footer2 />
      </div>
    );
  }
}
