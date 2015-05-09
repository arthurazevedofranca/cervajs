'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
    return nodemon({
        script: 'app.js',
        nodeArgs: ['--harmony'],
        ext: 'js',
        ignore: ['.git', 'node_modules/**/node_modules', 'src/**/*.spec.js', 'coverage'],
        env: {
            NODE_ENV: 'development'
        }
    });
});

gulp.task('default', ['nodemon']);
