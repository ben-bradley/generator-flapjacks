'use strict';
var yeoman = require('yeoman-generator');

var dir = 'src/public';

module.exports = yeoman.generators.Base.extend({
  write: function () {
    this.directory('public', dir);
  }
});
