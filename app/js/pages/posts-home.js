'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
var posts = require('../lib/posts-json.json');
var $ = require('../shims/jquery');
var _ = require('lodash');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Home',
  template: templates.pages.postsHome,

  initialize: function () {
    var tags = [];
    _.each(posts, function (post) {
      _.each(post.tags, function (tag) {
        tags.push(tag);
      });
    });
    this.tags = _.uniq(tags);
  },

  render: function () {
    this.$el.html(this.template({
      tags: this.tags

    }));

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });

    var container = this.$('#posts')[0];

      var x = new window.Masonry( container, {
        itemSelector: '.item',
        columnWidth: 20,
      });

      if ($(window).width() > 768) {
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
