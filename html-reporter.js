var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/',
  themeName: 'default', // default default-gray compact compact-gray cover outlook
  customTheme: 'themes/cover/index.pug',
  hideSuccess: false,
  relativeScreenshots: false
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};