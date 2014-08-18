'use strict';

var $ = require('../shims/jquery');

module.exports = function (section) {
  var target = $('#' + section);
  if (target.length) {
    $('body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
};
