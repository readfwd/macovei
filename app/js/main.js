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

      // Listen for new pages from the router.
      // self.router.on('newPage', mainView.setPage, mainView);

      // Start the router and show the appropriate page.
      // self.router.history.start({pushState: true, root: '/'});
    });
  })
};

module.exports.launch();
