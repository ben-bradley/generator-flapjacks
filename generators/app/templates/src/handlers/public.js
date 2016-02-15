'use strict';

import config from 'config';
import Debug from 'debug';

const debug = new Debug('webapp:/handlers/public');
const { browserGlobals } = config;

debug('browserGlobals: ' + JSON.stringify(browserGlobals));

export default {
  index(request, reply) {
    reply.view('index', browserGlobals);
  },
  directory: {
    path: __dirname + '/../public'
  }
};
