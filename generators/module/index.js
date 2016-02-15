'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var yotils = require('../yotils');

module.exports = yeoman.generators.Base.extend({

  inquire: function() {
    if (this.options.composed) {
      this.props = this.options.props;
      return true;
    }

    let component = chalk.bgRed('module');

    yotils.inquire.call(this, component);
  },

  compose: function() {
    var options = {
      props: (this.props || {}),
      composed: true,
      skipChecks: this.options.skipChecks
    };

    this.composeWith('flapjacks:route', { options: options });
    this.composeWith('flapjacks:handler', { options: options });
    this.composeWith('flapjacks:controller', { options: options });
  }
});
