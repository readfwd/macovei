'use strict';

var _ = require('lodash');

module.exports = {
  launch: _.once(function () {
    window.app = this;
    console.log('hi!');
  })
};

module.exports.launch();
