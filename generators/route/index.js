'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var yotils = require('../yotils');

var dir = 'src/routes';

module.exports = yeoman.generators.Base.extend({

  preCheck: function() {
    if (!this.options.skipChecks)
      yotils.preCheck.call(this, dir);
  },

  inquire: function() {
    var component = chalk.yellow('route');

    yotils.inquire.call(this, component);
  },

  write: function () {
    var items = this.props.items,
      dest = this.destinationPath(dir + '/' + items + '.js');

    this.template('_route.js', dest, { items: items });
  }
});
