'use strict';

import React from 'react';

export default class Clock extends React.Component {
  render() {
    let { time } = this.props;

    return (
      <pre>{time}</pre>
    );
  }
}
