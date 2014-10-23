'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json.json');
var _ = require('lodash');
var PostsView = require('../views/posts');


module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Postări',
  template: templates.pages.taggedPost,

  initialize: function (options) {
    var tags = [];
    _.each(posts, function (post) {
      _.each(post.tags, function (tag) {
        tags.push(tag);
      });
    });
    this.tags = _.uniq(tags);
    this.filterTag = options.tag;
  },

  render: function () {
    this.$el.html(this.template({
      tag: this.filterTag,
      tags: this.tags
    }));
    this.postsView = new PostsView({
      collection: window.app.posts,
      filterTag: this.filterTag,
      el: this.$('[role="posts-collection"]')
    });
    var container = this.$('#posts')[0];

    var x = new window.Masonry( container, {
      itemSelector: '.item',
      columnWidth: 20,
    });

    if (this.$(window).width() > 768) {
      x.gutter = 20;
    }
    else {
      x.gutter = 10;
      }
    x.bindResize();
    setTimeout(function () {
      x.layout();
    }, 10);

    return this;
  }
});
