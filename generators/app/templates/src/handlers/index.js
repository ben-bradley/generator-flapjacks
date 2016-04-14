'use strict';

/**
 * Handlers are responsible for holding the actual business logic of the app.
 * They call the appropriate CRUD method on the controller to interact with the
 * data, but ALL mutation occurs here.
 *
 * The methods returned in the handler object *should* reflect the HTTP method
 * used to invoke the handler.
 *
 * A best-practice is to keep handlers as simple as possible and compose calls
 * using the 'pre' parameter on the route config to do any data-loading.
 */

import glob from 'glob';
import path from 'path';

export default glob.sync(__dirname + '/!(index).js').reduce((handlers, file) => {
  let name = path.basename(file, '.js'),
    handler = require(file).default;

  handlers[name] = handler;
  return handlers;
}, {});
