'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostView = require('./post');

module.exports = View.extend({
  template: templates.includes.postsCollection,
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'reset', this.render);

    this.collection.fetch({ reset: true });
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
    var view = new PostView({
      model: post
    });
    this.$('[role="posts"]').append(view.render().el);
  }
});
