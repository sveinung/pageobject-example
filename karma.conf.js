// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  { pattern: 'src/main/webapp/modules/**/*.js', included: false },
  { pattern: 'src/main/webapp/modules/**/*.mustache', included: false },
  { pattern: 'src/main/webapp/modules/**/*.css', included: false },
  { pattern: 'src/main/webapp/bower_components/jquery/jquery.js', included: false },
  { pattern: 'src/main/webapp/bower_components/sinonjs/sinon.js', included: false },
  { pattern: 'src/main/webapp/bower_components/jasmine-sinon/lib/jasmine-sinon.js', included: false },
  { pattern: 'src/main/webapp/bower_components/jasmine-jquery/lib/jasmine-jquery.js', included: true },
  { pattern: 'src/main/webapp/bower_components/requirejs-text/text.js', included: false },
  { pattern: 'src/main/webapp/bower_components/rivets/dist/rivets.js', included: false },
  { pattern: 'src/main/webapp/bower_components/underscore/underscore.js', included: false },
  { pattern: 'src/main/webapp/bower_components/mustache/mustache.js', included: false },
  { pattern: 'src/main/webapp/bower_components/require-css/css.js', included: false },
  { pattern: 'src/main/webapp/bower_components/require-css/normalize.js', included: false },
  { pattern: 'src/main/webapp/bower_components/backbone/backbone.js', included: false },
  'src/main/webapp/test-main.js'
];


// list of files to exclude
exclude = [
];


//preprocessors = {
//    '**/webapp/**/*.js': 'coverage'
//};


//coverageReporter = {
//  type : 'html',
//  dir : 'target/coverage/'
//};


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
//reporters = ['progress', 'coverage'];
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
