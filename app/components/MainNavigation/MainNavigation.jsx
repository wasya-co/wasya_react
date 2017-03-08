
// import styles from './_Footer.scss';
import React from 'react';

import { AppBar, Tabs, Tab } from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class MainNavigation extends React.Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <AppBar title="My App" >
              <div>
                Wasya co [About] [Knowledge Base] [Services] [Our Process] [Our Technology] [Clients] [Contact]
        </div>
        
      </AppBar>
    );
  }
}

MainNavigation.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
