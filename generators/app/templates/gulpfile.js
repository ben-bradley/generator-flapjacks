'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  reactify = require('reactify'),
  babel = require('gulp-babel'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  runSequence = require('run-sequence'),
  uglify = require('gulp-uglify'),
  less = require('gulp-less'),
  rimraf = require('rimraf'),
  debug = require('debug')('gulpfile');

var PATHS = {
  dist: 'dist',
  srcBase: './src/',
  srcServerJs: [
    '!src/{public,public/**}',
    'src/**/*.js'
  ],
  srcPublicIndex: [ './src/public/index.js' ],
  srcPublicJs: [ '!./src/public/index.js', './src/public/*.js' ],
  srcPublicHtml: [ './src/public/*.html' ],
  srcPublicLess: [ './src/public/*.less' ],
  distPublic: 'dist/public',
  distServer: [ 'dist/**', '!dist/public' ]
};

function _clean(next) {
  rimraf(PATHS.dist + '/*', next);
}

function _babel() {
  return gulp.src(PATHS.srcServerJs, { base: PATHS.srcBase })
    .pipe(babel())
    .pipe(gulp.dest(PATHS.dist));
}

function _bundle() {
  var bundler = watchify(browserify(watchify.args));

  bundler.add(PATHS.srcPublicIndex);

  function rebundle() {
    gutil.log('public js rebundle');
    return bundler
      .transform('babelify', { presets: [ 'es2015', 'react' ] })
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(PATHS.distPublic));
  }

  bundler.on('update', rebundle);

  return rebundle();
}

function _js() {
  return gulp.src(PATHS.srcPublicJs, { base: PATHS.srcBase })
    .pipe(gulp.dest(PATHS.dist));
}

function _html() {
  return gulp.src(PATHS.srcPublicHtml, { base: PATHS.srcBase })
    .pipe(gulp.dest(PATHS.dist));
}

function _less() {
  return gulp.src(PATHS.srcPublicLess, { base: PATHS.srcBase })
    .pipe(less())
    .pipe(gulp.dest(PATHS.dist));
}

function _watch() {
  gulp.watch(PATHS.srcServerJs, [ 'babel' ]);
  gulp.watch(PATHS.srcPublicHtml, [ 'html' ]);
  gulp.watch(PATHS.srcPublicLess, [ 'less' ]);
  gulp.watch(PATHS.distPublic + '/**', livereload.changed);
  livereload.listen();
}

function _nodemon() {
  nodemon({
    env: gutil.env.type,
    script: 'index.js',
    args: process.argv.slice(2),
    watch: PATHS.distServer,
    delay: 500
  });
}

function _start() {
  runSequence('clean', [ 'babel', 'bundle', 'html', 'less', 'js' ], 'watch', 'nodemon');
}

// TODO: gulp.task('test', _test);

gulp.task('clean', _clean);

gulp.task('babel', _babel);

gulp.task('bundle', _bundle);

gulp.task('html', _html);

gulp.task('js', _js);

gulp.task('less', _less);

gulp.task('watch', _watch);

gulp.task('nodemon', _nodemon);

gulp.task('start', _start);

gulp.task('default', _start);
