'use strict';

import Boom from 'boom';
import controllers from '../controllers';
const { ping } = controllers;

export default {
  get(request, reply) {
    ping.read()
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  }
};
