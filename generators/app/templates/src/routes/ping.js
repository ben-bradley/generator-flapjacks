'use strict';

import handlers from '../handlers';
const { ping } = handlers;

export default [{
  method: 'get',
  path: '/ping',
  config: {
    description: 'A simple connectivity test route',
    handler: ping.get
  }
}];
