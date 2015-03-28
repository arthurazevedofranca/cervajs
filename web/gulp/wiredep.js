'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', ['copy-index-html'], function () {
  var wiredep = require('wiredep').stream;

  return gulp.src('src/index.html')
    .pipe(wiredep({
      directory: 'bower_components'
    }))
    .pipe(gulp.dest('src'));
});
