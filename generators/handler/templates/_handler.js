'use strict';

import Boom from 'boom';
import controllers from '../controllers';
const { <%= items %> } = controllers;

export default {
  post(request, reply) {
    <%= items %>.create(request.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
  get(request, reply) {
    let { id } = request.params;

    <%= items %>.read(id)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
  put(request, reply) {
    let { id } = request.params;

    <%= items %>.update(id, request.payload)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  },
  delete(request, reply) {
    let { id } = request.params;

    <%= items %>.delete(id)
      .then(reply)
      .catch((err) => reply(Boom.badRequest(err)));
  }
};
