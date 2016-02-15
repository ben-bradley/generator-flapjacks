'use strict';

import React from 'react';

export default class User extends React.Component {
  render() {
    let { userID } = this.props.params;
    let { query } = this.props.location;
    let age = query && query.showAge ? '33' : '';

    return (
      <div className="User">
        <h1>User id: {userID}</h1>
        {age}
      </div>
    );
  }
}
