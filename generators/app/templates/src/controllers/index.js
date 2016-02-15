'use strict';

/**
 * Controllers are responsible for CRUDing data.  They should each have a
 * .create(), .read(), .update(), and .delete() method that returns a Promise.
 * Returning promises make composing handlers simple and standardized.  Even if
 * the controller is dead-simple and synchronous, it should still return a
 * promise to maintain standardization.
 */


 import glob from 'glob';
 import path from 'path';

 export default glob.sync(__dirname + '/!(index).js').reduce((controllers, file) => {
   let name = path.basename(file, '.js'),
     controller = require(file);

   controllers[name] = controller;
   return controllers;
 }, {});

// import ping from './ping';
//
// export default {
//   ping
// };
