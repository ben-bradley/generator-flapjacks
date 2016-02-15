'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var Prompts = require('../prompts');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async(),
      flapjacks = chalk.red('flapjacks'),
      PROMPTS = new Prompts(this);

    this.log(yosay(flapjacks + '!!!'));

    var prompts = [
      PROMPTS.name,
      PROMPTS.author,
      PROMPTS.description,
      PROMPTS.items
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('.gitignore', '.gitignore');
    this.copy('.jshintrc', '.jshintrc');
    this.copy('index.js', 'index.js');
    this.copy('src/index.js', 'src/index.js');

    this.template('_package.json', 'package.json', this.props);
    this.template('_readme.md', 'readme.md', this.props);
    this.template('config/_default.json', 'config/default.json', this.props);

    this.directory('src/public', 'src/public');
    this.directory('src/routes', 'src/routes');
    this.directory('src/handlers', 'src/handlers');
    this.directory('src/controllers', 'src/controllers');
  },

  composing: function() {
    var options = {
      props: this.props,
      composed: true,
      skipChecks: true
    };

    this.composeWith('flapjacks:module', { options: options });
  },

  install: function () {
    var _this = this;
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false,
      callback: function () {}.bind(_this)
    });
  }
});
