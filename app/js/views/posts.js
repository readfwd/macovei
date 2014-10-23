'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostPreView = require('./post-preview');
var LinkPreView = require('./link-preview');
var postsJSON = require('../lib/posts-json.json');
var _ = require('lodash');

module.exports = View.extend({
  template: templates.includes.postsCollection,
  initialize: function (options) {
    this.filterTag = options.filterTag;
    this.render(options);
  },
  render: function (options) {
    this.$el.html(this.template(options));
    if (options.homePage) {
      this.addPost(this.collection.last());
      this.addLink(this.collection.at(this.collection.length - 2));
      this.addLink(this.collection.at(this.collection.length - 3));
      this.addLink(this.collection.at(this.collection.length - 4));
    }
    else {
      this.addAllPosts();
    }
    return this;
  },
  addAllPosts: function () {
    var self = this;
    self.collection.each(function (post) {
      if (!self.filterTag || _.contains(postsJSON[post.get('slug')].tags || [], self.filterTag)) {
        self.addPost(post);
      }
    });
  },

  addPost: function (post) {
    var view = new PostPreView({
      model: post
    });
    this.$el.find('[role="posts"]').prepend(view.render().el);
  },

  addLink: function (post) {
    var view = new LinkPreView({
      model: post
    });
    this.$el.find('[role="links"]').prepend(view.render().el);
  }
});
