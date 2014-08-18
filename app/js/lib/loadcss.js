'use strict';

module.exports = function (path) {
  var cb = function () {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = path;
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
  };
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) {
    raf(cb);
  } else {
    window.addEventListener('load', cb);
  }
};
