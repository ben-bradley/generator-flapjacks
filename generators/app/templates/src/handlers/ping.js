'use strict';

import Boom from 'boom';
import { ping } from '../controllers';

export default {
  get(request, reply) {
    ping.read()
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  }
};
