'use strict';

var fs = require('fs'),
  yosay = require('yosay'),
  chalk = require('chalk'),
  Prompts = require('./prompts');

const flapjacks = chalk.red('flapjacks');

module.exports = {

  preCheck: function(dir) {
    var exists = fs.existsSync(this.destinationPath() + '/' + dir);

    if (!exists) {
      console.log(yosay('Uhoh, you\'re not in the right directory. I should see ' + chalk.bgRed(dir) + ' in a sub-directory.'));
      process.exit(1);
    }
  },

  inquire: function (component) {
    var done = this.async(),
      PROMPTS = new Prompts(this);
      
    if (this.options.composed) {
      this.props = this.options.props;
      return done();
    }

    this.log(yosay('Let\'s build a ' + flapjacks + ' ' + component + '!'));

    this.prompt([ PROMPTS.items ], function (props) {
      this.props = props;
      done();
    }.bind(this));
  }

};
