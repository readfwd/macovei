'use strict';

module.exports = {};
module.exports.plugins = require('gulp-load-plugins')();

module.exports.paths = {
  'tmp': './.tmp',
  'dist': './dist',
  'app': './app',
  'test': './test'
};

module.exports.handleError = function (e) {
  module.exports.plugins.util.log(e.message);
  this.emit('end');
};
