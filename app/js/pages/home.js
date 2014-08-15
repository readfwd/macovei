'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');

module.exports = View.extend({
  pageTitle: 'Monica Macovei | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
    return this;
  }
});
