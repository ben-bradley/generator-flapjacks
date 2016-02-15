'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var yotils = require('../yotils');

const dir = 'src/handlers';

module.exports = yeoman.generators.Base.extend({

  preCheck: function() {
    if (!this.options.skipChecks)
      yotils.preCheck.call(this, dir);
  },

  inquire: function() {
    let component = chalk.green('handler');

    yotils.inquire.call(this, component);
  },

  write: function () {
    var items = this.props.items,
      dest = this.destinationPath(dir + '/' + items + '.js');

    this.template('_handler.js', dest, { items: items });
  }

});
