'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostPreView = require('./post-preview');
var LinkPreView = require('./link-preview');
var $ = require('../shims/jquery');

module.exports = View.extend({
  template: templates.includes.postsCollection,
  initialize: function (options) {
    this.render(options);
  },
  render: function (options) {
    this.$el.html(this.template());
    if (options.homePage) {
      this.addPost(this.collection.last());
      this.addLink(this.collection.at(this.collection.length - 2));
      this.addLink(this.collection.at(this.collection.length - 3));
      // this.collection.each(this.addLink, this);
      // for (var i = this.collection.length - 2, n = this.collection.length - 6; i > n; i--) {
      //   this.addLink(i, this);
      // }
    }
    else {
      this.addAllPosts();
    }
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
  },

  addLink: function (post) {
    this.$( document ).ready(function() {
      var view = new LinkPreView({
        model: post
      });
      $('[role="links"]').prepend(view.render().el);
    });
  }
});
