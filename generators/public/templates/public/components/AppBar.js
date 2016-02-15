'use strict';

import React from 'react';
import MUI from 'material-ui';

export default class AppBar extends React.Component {

  render() {
    return (
      <MUI.AppBar
        zDepth={0}
        showMenuIconButton={false}
        title={ TITLE } />
    );
  }

}
