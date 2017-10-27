var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config.dev.js');

webpackConfig.externals = {
  'react/addons': true,
  'jsdom': 'window',
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
}

webpackConfig.devtool = 'inline-source-map';
delete webpackConfig.entry;
delete webpackConfig.output;

karmaConfig = {
  browsers: ['PhantomJS'],
  singleRun: false,
  frameworks: ['jasmine'],
  files: [
    './node_modules/phantomjs-polyfill-find/find-polyfill.js',
    './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
    'tests.webpack.js'
  ],
  plugins: [
    'karma-phantomjs-launcher',
    'karma-jasmine',
    'karma-jasmine-diff-reporter',
    'karma-sourcemap-loader',
    'karma-webpack',
    'karma-coverage'
  ],
  browserNoActivityTimeout: 100000,
  browserDisconnectTimeout: 10000,
  preprocessors: {
    'tests.webpack.js': ['webpack', 'sourcemap']
  },
  reporters: ['jasmine-diff', 'dots'],
  webpack: webpackConfig,
  webpackServer: {
    noInfo: true
  }
}

module.exports = function (config) {  
  config.set(karmaConfig);
};