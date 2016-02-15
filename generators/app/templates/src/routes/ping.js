'use strict';

import { ping } from '../handlers';

export default [{
  method: 'get',
  path: '/ping',
  config: {
    description: 'A simple connectivity test route',
    handler: ping.get
  }
}];
