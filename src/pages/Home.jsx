import React from 'react'

import {
} from "@material-ui/core";

// import DashboardLayout from '../layouts/Dashboard'

class Home extends React.Component {
  render () {
    return (<React.Fragment>
      <h1>this is Home of {this.props.name}.</h1>
    </React.Fragment>)
  }
}

export default Home
