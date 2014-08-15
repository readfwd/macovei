'use strict';

var $ = require('./shims/jquery');
var _ = require('lodash');
var MainView = require('./views/main');
var Posts = require('./models/posts-collection');
var Router = require('./router');

module.exports = {
  launch: _.once(function () {
    var self = window.app = this;

    // Create our global 'posts' object that contains the Facebook feed.
    this.posts = new Posts();

    // Init our URL handlers and the history tracker.
    this.router = new Router();

    $(document).ready(function () {
      // Initialize our main view.
      var mainView = self.view = new MainView({
        el: document.body
      });

      // Render it.
      mainView.render();

      // Listen for new pages from the router.
      self.router.on('newPage', mainView.setPage, mainView);

      // Start our router and show the appropriate page.
      self.router.history.start({ pushState: true, root: '/' });
    });
  }),
  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true });
  }
};

module.exports.launch();
