'use strict';

import Boom from 'boom';
import { <%= items %> } from '../controllers';

export default {
  post(request, reply) {
    <%= items %>.create(request.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
  get(request, reply) {
    <%= items %>.read(request.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
  put(request, reply) {
    <%= items %>.update(request.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
  delete(request, reply) {
    <%= items %>.delete(request.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  }
};
