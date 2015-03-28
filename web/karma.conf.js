'use strict';
// Karma configuration
// Generated on Tue Sep 10 2013 15:15:19 GMT-0300 (E. South America Standard Time)
module.exports = function (config) {
	config.set({

		// base path, that will be used to resolve files and exclude
//		basePath: './src',

		// frameworks to use
		frameworks: ['jasmine'],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: [ 'junit', 'dots', 'coverage' ], //, 'growl', 'osx'],

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'./src/app/**/*.js': ['coverage']
		},

		// optionally, configure the reporter
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},

		// web server port
		port: 9875,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

	    plugins : [
	        'karma-phantomjs-launcher',
	        'karma-jasmine',
	        'karma-coverage',
	        'karma-junit-reporter'
	    ]

	});
};