'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

const files = {
  app: [
    '.gitignore',
    '.jshintrc',
    'gulpfile.js',
    'index.js',
    'package.json',
    'readme.md',
    'config/default.json',
    'src/index.js'
  ],
  controllers: [
    'src/controllers/index.js',
    'src/controllers/ping.js'
  ],
  handlers: [
    'src/handlers/index.js',
    'src/handlers/public.js',
    'src/handlers/ping.js'
  ],
  routes: [
    'src/routes/index.js',
    'src/routes/public.js',
    'src/routes/ping.js'
  ],
  public: [
    'src/public/index.js',
    'src/public/index.html',
    'src/public/index.less',
    'src/public/components/App.js'
  ]
};

describe('generator-flapjacks', function() {

  describe(':app', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withGenerators([
          [ helpers.createDummyGenerator(), 'flapjacks:module' ],
          [ helpers.createDummyGenerator(), 'flapjacks:route' ],
          [ helpers.createDummyGenerator(), 'flapjacks:handler' ],
          [ helpers.createDummyGenerator(), 'flapjacks:controller' ]
        ])
        .withPrompts({
          name: 'flapjack_test',
          author: 'test_user',
          description: 'a test description',
          items: 'things'
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([].concat(files.app, files.public, files.routes, files.handlers, files.controllers));
    });
  });

  describe(':module', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/module'))
        .withGenerators([
          [ helpers.createDummyGenerator(), 'flapjacks:route' ],
          [ helpers.createDummyGenerator(), 'flapjacks:handler' ],
          [ helpers.createDummyGenerator(), 'flapjacks:controller' ]
        ])
        .withPrompts({ items: 'things' })
        .on('end', done);
    });

    it('only calls composeWith()', function () {});
  });

  describe(':route', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/route'))
        .withOptions({ skipChecks: true })
        .withPrompts({ items: 'things' })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([ 'src/routes/things.js' ]);
    });
  });

  describe(':handler', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/handler'))
        .withOptions({ skipChecks: true })
        .withPrompts({ items: 'things' })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([ 'src/handlers/things.js' ]);
    });
  });

  describe(':controller', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/controller'))
        .withOptions({ skipChecks: true })
        .withPrompts({ items: 'things' })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([ 'src/controllers/things.js' ]);
    });
  });


});
