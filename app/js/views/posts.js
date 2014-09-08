'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostPreView = require('./post-preview');

module.exports = View.extend({
  template: templates.includes.postsCollection,
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    this.addAllPosts();
    return this;
  },
  addAllPosts: function () {
    this.collection.each(this.addPost, this);
  },
  addPost: function (post) {
    var view = new PostPreView({
      model: post
    });
    this.$('[role="posts"]').prepend(view.render().el);
  }
});
