'use strict';

module.exports = function(ctx) {

  return {
    name: {
      type: 'text',
      name: 'name',
      message: 'What would you like to call your App?',
      default: ctx.appname
    },

    author: {
      type: 'text',
      name: 'author',
      message: 'Who\'s name should I put as the author in the package.json?'
    },

    description: {
      type: 'text',
      name: 'description',
      message: 'What should the description say?',
      default: 'A really super sweet webapp!'
    },

    items: {
      type: 'text',
      name: 'items',
      message: 'Give the plural name for your CRUDable item',
      default: 'items'
    }
  };

};
