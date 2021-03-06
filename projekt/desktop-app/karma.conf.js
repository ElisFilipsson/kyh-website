// Karma configuration
// Generated on Tue Jun 14 2016 09:14:11 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'assets/libs/angular/angular.js',
      'assets/libs/angular-mocks/angular-mocks.js',
      'assets/libs/angular-animate/angular-animate.js',
      'assets/libs/angular-ui-router/release/angular-ui-router.js',
      'assets/libs/angular-route/angular-route.js',
      'assets/libs/angular-ui-calendar/src/calendar.js',
      'assets/libs/AngularJS-Toaster/toaster.js',
      'app/module.js',
      'app/components/**/*.js',
      'app/shared/**/*.js',
      'app/shared/ba.js',
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/components/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'coveralls'],

    plugins: ['karma-sinon', 'karma-mocha-reporter', 'karma-coverage', 'karma-coveralls', 'karma-mocha', 'karma-chai', 'karma-phantomjs-launcher'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
