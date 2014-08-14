'use strict';

var _ = require('lodash');

module.exports = {
  launch: _.once(function () {
    console.log('hi!');
  })
};

module.exports.launch();
