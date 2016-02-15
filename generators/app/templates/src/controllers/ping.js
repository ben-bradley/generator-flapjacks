'use strict';

export default {
  create() {
    return new Promise((resolve, reject) => {
      reject('not implemented');
    });
  },
  read() {
    return new Promise((resolve, reject) => {
      resolve({ pong: new Date() });
    });
  },
  update() {
    return new Promise((resolve, reject) => {
      reject('not implemented');
    });
  },
  delete() {
    return new Promise((resolve, reject) => {
      reject('not implemented');
    });
  }
};
