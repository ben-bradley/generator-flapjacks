'use strict';

/**
 * Routes are responsible for calling handlers to load data that is composed
 * into replies.  You *should* make use of the 'pre' parameter in route configs
 * to pre-load data that your handlers may need.
 */

// import publicRoutes from './public';
// import ping from './ping';
//
// const routes = [].concat(publicRoutes, ping);

import glob from 'glob';

const routes = glob
  .sync(__dirname + '/!(index).js')
  .reduce((routes, file) => routes.concat(require(file)), []);

export default routes;
