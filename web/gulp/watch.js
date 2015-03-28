'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('src/app/**/*.scss', ['clean', 'index-html']);
  gulp.watch('src/app/**/*.js', ['index-html', 'test']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['index-html']);
  gulp.watch('src/index.tpl.html', ['index-html']);
});
