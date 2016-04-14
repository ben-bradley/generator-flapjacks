'use strict';

import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';
import RaisedButton from 'material-ui/RaisedButton';

export default class AppToolbar extends React.Component {

  constructor(props) {
    super();

    this.state = {};
  }

  awesome() {
    alert('yup!');
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={NAME} />
        </ToolbarGroup>
        <ToolbarGroup float='right'>
          <RaisedButton
            label='Awesome'
            primary={true}
            onClick={this.awesome.bind(this)}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }

}
