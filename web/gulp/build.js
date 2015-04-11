'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'del']
});

gulp.task('styles', function () {
	// var slash = require('slash');
	// var _s = require('underscore.string');
	//
	// var filesScss = gulp.src(['src/app/scss/core/*.scss','src/app/**/*.scss']);
	// var filesContent = '';
	//
	// filesScss.on('data', function (data) {
	// 	var path = slash(data.history[0]);
	// 	if (_s.endsWith(path, '/cervajs.scss')) return;
	// 	filesContent += '@import "' + path + '";\n';
	// })
	// .on('end', function () {
	// 	gulp.src('src/app/scss/cervajs.scss')
	// 	.pipe($.replace('{{scsssrc}}', filesContent))
	// 	.pipe($.sass())
	// 	.on('error',  function handleError(err) {
	// 		console.error(err.toString());
	// 		this.emit('end');
	// 	})
	// 	.pipe($.autoprefixer('last 1 version'))
	// 	.pipe(gulp.dest('src/assets/css/'))
	// 	.pipe($.size());
	// });

});

gulp.task('scripts', function () {
	return gulp.src(['src/app/**/*.js', 'gulp/**/*.js'])
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish'))
	.pipe($.size());
});


gulp.task('clean', function (done) {
	$.del(['www/**', '.tmp/'], done);
});

gulp.task('copy-index-html', function() {
	return gulp.src('src/index.tpl.html')
	    .pipe(rename('index.html'))
	    .pipe(gulp.dest('src'));
});

gulp.task('index-html', ['copy-index-html', 'wiredep', 'inject']);
