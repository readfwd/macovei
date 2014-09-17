'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

//So we don't need devDependencies for everything

var tasks = argv._;
var toRun = tasks.length ? tasks : ['default'];
var loadTest = false;
for (var i = 0; i < toRun.length; i++) {
  var task = toRun[i];
  if (/test|pagespeed/.test(task)) {
    loadTest = true;
  }
}

var files = fs.readdirSync('./gulp');
_.each(files, function(file) {
  if (!loadTest && /test/.test(file)) { return; }
  var ext = path.extname(file);
  if (require.extensions[ext]) {
    require('./gulp/' + file);
  }
});

gulp.task('default', ['build']);

