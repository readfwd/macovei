'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var _ = require('lodash');
var posts = require('../lib/posts-json.json');
var PostsView = require('../views/posts');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Declarații & Comunicate',
  template: templates.pages.declaratiiComunicate,

  initialize: function () {
    var tags = [];
    _.each(posts, function (post) {
      _.each(post.tags, function (tag) {
        tags.push(tag);
      });
    });
    this.tags = _.uniq(tags);
    this.filterTag = "comunicat";
  },

  render: function () {
    this.$el.html(this.template({
      tag: this.filterTag,
      tags: this.tags
    }));
    var postsView = new PostsView({
      collection: window.app.posts,
      filterTag: 'comunicat',
      el: this.$('#comunicat')
    });
    var container = this.$('#comunicat')[0];

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

    var postsView2 = new PostsView({
      collection: window.app.posts,
      filterTag: 'declaratie',
      el: this.$('#declaratie')
    });
    var container2 = this.$('#declaratie')[0];

    var x2 = new window.Masonry( container2, {
      itemSelector: '.item',
      columnWidth: 20,
    });

    if (this.$(window).width() > 768) {
      x2.gutter = 20;
    }
    else {
      x2.gutter = 10;
      }
    x2.bindResize();
    setTimeout(function () {
      x2.layout();
    }, 10);
  return this;
  },

});
