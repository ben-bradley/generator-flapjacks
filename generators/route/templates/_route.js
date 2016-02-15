'use strict';

import { <%= items %> } from '../handlers';

export default [{
  method: 'post',
  path: '/<%= items %>',
  config: {
    description: 'The "create" route for <%= items %>',
    handler: <%= items %>.post
  }
}, {
  method: 'get',
  path: '/<%= items %>/{id*}',
  config: {
    description: 'The "read" route for <%= items %>',
    handler: <%= items %>.get
  }
}, {
  method: 'put',
  path: '/<%= items %>/{id}',
  config: {
    description: 'The "update" route for <%= items %>',
    handler: <%= items %>.put
  }
}, {
  method: 'delete',
  path: '/<%= items %>/{id}',
  config: {
    description: 'The "delete" route for <%= items %>',
    handler: <%= items %>.delete
  }
}];
