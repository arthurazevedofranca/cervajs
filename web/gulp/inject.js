'use strict';

var gulp = require('gulp'),
	gulpInject = require('gulp-inject'),
	merge = require('merge-stream');

gulp.task('inject', [ 'styles', 'scripts', 'wiredep' ], function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var src = gulp.src(['./**/*.js', './**/*.css', '!./**/*.spec.js'], {read: false, cwd: './src'});
  var tmp = gulp.src(['./**/*.css'], { read: false, cwd: './.tmp'});

  return target.pipe(gulpInject(merge(src, tmp)))
    .pipe(gulp.dest('./src'));
});