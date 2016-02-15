'use strict';

import config from 'config';

import handlers from '../handlers';

const { directory, index } = handlers.public;

export default [{
  method: 'get',
  path: '/',
  config: {
    description: 'This returns the main app view/page',
    handler: index
  }
}, {
  method: 'get',
  path: '/' + config.name + '/{p*}',
  config: {
    description: 'This returns the main app view/page',
    handler: index
  }
}, {
  method: 'get',
  path: '/{p*}',
  config: {
    description: 'This is the default public route',
    handler: { directory }
  }
}];
