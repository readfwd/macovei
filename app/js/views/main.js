'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('./posts');

module.exports = View.extend({
  template: templates.body,
  render: function () {
    this.$el.html(this.template());

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
    return this;
  }
});
