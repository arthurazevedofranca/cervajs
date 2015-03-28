'use strict';

var gulp = require('gulp');
var notifier = require('node-notifier');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('test', function() {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'src/app/app.js',
    'src/app/**/*.js'
  ]);
  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function() {
      notifier.notify({
        title: 'Karma tests failed!',
        message: 'Go fix them now motherfucker!', 
        sound: true
      });
    });
});
