'use strict';

var path = require('path');
var url = require('url');
var gulp = require('gulp');
var util = require('util');
var browserSync = require('browser-sync');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components'
    };
  }

  console.log('ROUTES', routes);

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: [
        function pushState(req, res, next) {
          var pathname = url.parse(req.url).pathname;
          if (!path.extname(pathname)) {
            req.url = '/index.html';
          }
          next();
        }
      ],
      routes: routes
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'src',
    '.tmp'
  ], [
    '.tmp/app/**/*.css',
    'src/assets/images/**/*',
    'src/*.html',
    'src/app/**/*.html',
    'src/app/**/*.js'
  ]);
});
