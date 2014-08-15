'use strict';

var $ = require('./shims/jquery');
var _ = require('lodash');
var MainView = require('./views/main');
var Posts = require('./models/posts-collection');

module.exports = {
  launch: _.once(function () {
    var self = window.app = this;

    this.posts = new Posts();

    $(document).ready(function () {
      // Initialize our main view.
      var mainView = self.view = new MainView({
        el: document.body
      });

      // Render it.
      mainView.render();
    });
  })
};

module.exports.launch();
