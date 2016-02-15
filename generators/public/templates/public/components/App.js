'use strict';

// Import Libraries
import React from 'react';
import { Link } from 'react-router';
import MUI from 'material-ui';
import Nes from 'nes';

const { ThemeManager } = MUI.Styles;

// Import Components
import Theme from './Theme';
import AppBar from './AppBar';
import Clock from './Clock';

export default class App extends React.Component {

  constructor() {
    super();

    let sock = new Nes.Client(WEBSOCKET);

    this.state = {
      time: 'connecting...'
    };

    sock.connect((err) => {
      if (err)
        return console.error(err.message);

      console.log('connected!');

      /* This handles server.broadcast() */
      sock.onUpdate = (time) => this.setState({ time });

      /* This handles server.publish() */
      sock.subscribe('/ws/time', (time) => this.setState({ time }));

    });
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  }

  render() {
    return (
      <div>
        <AppBar />
        <Clock time={this.state.time} />
        <ul>
          <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
          <li><Link to="/user/bob" query={{ showAge: true }} activeClassName="active">Bob With Query Params</Link></li>
          <li><Link to="/user/sally" activeClassName="active">Sally</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
