'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['test', 'clean', 'index-html'], function () {
    gulp.start('serve');
});
